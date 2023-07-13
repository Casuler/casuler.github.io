---
title: GitHub Uploader工具类
date: 2023-07-13 15:58:35
updated: 2023-07-13 15:58:35
description: 实现上传图片到GitHub仓库并获取链接地址
tags:
  - 后端
  - Java
  - SpringBoot 
categories:
  - 后端
  - 工具
aplayer: true
---

# GitHub Uploader工具类

> 运行环境：Windows 11、SpringBoot3.0.5 (maven)
>
> 编译器：Intellij IDEA Ultimate v2023.1

<meting-js id="2059532170" server="netease" type="song" theme="#C20C0C"> </meting-js>

---

使用`SpringBoot`中的`RestTemplate`作为客户端，向GItHub仓库上传文件。

---

## 申请GitHub Personal access tokens

首先要先申请私人的api token，如果已经有token了可以跳过这一步。

点击`头像`-`Settings`进入设置页面

![image-20230713145420109](https://image.itbaima.net/images/27/image-20230713148581039.png)

在左侧侧边栏最底部找到`Developer settings`

![image-20230713145804058](https://image.itbaima.net/images/27/image-20230713149727409.png)

在`Personal access tokens`中选择`Tokens(classic)`（classic可以创建永不过期的token，如果短期使用可以选择图中的`Beta`方式创建token）

![image-20230713150610776](https://image.itbaima.net/images/27/image-20230713156911195.png)



填写token信息，设定过期时间，并选择好repo仓库权限后，即可选择保存，创建的token仅会展示一次，需要注意及时保存。

![image-20230713151613284](https://image.itbaima.net/images/27/image-2023071315363077.png)

## 系统变量配置

以下是配置github仓库的一些私密信息，如api、仓库地址、用户名等。

`application.properties`

```properties
github.bucket.user=你的GitHub用户名
github.bucket.repository=你的仓库名
github.bucket.access-token=你的api权限token
//这里是上传完成后cdn加速处理过的url链接地址
//推荐使用 cdn.staticaly.com，该cdn加速服务较稳定,cdn.jsdelivr.net经常抽风
github.bucket.url=https://{cdn加速网站}cdn.staticaly.com/gh/${github.bucket.user}/${github.bucket.repository}/master/
github.bucket.api=https://api.github.com/repos/${github.bucket.user}/${github.bucket.repository}/contents/
```

## Config

这里简单写一个RestTemple的config文件。

`RestTemplateConfig.java`

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfig {
    @Bean
    public RestTemplate RestTemplate(){
        return new RestTemplate();
    }
}
```

## Util

在工具类中实现上传的主要功能。上传的文件后缀名也可自行修改，这样就不只局限于图床功能。

`GitHubUploader.java`

```java
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonPrimitive;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

@Component
public class GithubUploader {

    private static final Logger LOGGER = LoggerFactory.getLogger(GithubUploader.class);

    public static final String URI_SEPARATOR = "/";

    public static final Set<String> ALLOW_FILE_SUFFIX = new HashSet<>(Arrays.asList("jpg", "png", "jpeg", "gif", "ico", "svg"));

    @Value("${github.bucket.url}")
    private String url;

    @Value("${github.bucket.api}")
    private String api;

    @Value("${github.bucket.access-token}")
    private String accessToken;

    @Autowired
    RestTemplate restTemplate;

    /**
     * 上传文件到Github
     * @return 文件的访问地址
     */
    public String upload (MultipartFile multipartFile) throws IOException {

        String suffix = this.getSuffix(Objects.requireNonNull(multipartFile.getOriginalFilename())).toLowerCase();
        if (!ALLOW_FILE_SUFFIX.contains(suffix)) {
            throw new IllegalArgumentException("不支持的文件后缀：" + suffix);
        }

        // 重命名文件
        String fileName = UUID.randomUUID().toString().replace("-", "") + "." + suffix;

        // 目录按照日期打散
        String[] folders = this.getDateFolder();

        // 最终的文件路径
        String filePath = String.join(URI_SEPARATOR, folders)+ fileName;

        LOGGER.info("上传文件到Github：{}", filePath);

        JsonObject payload = new JsonObject();
        payload.add("message", new JsonPrimitive("file upload"));
        payload.add("content", new JsonPrimitive(Base64.getEncoder().encodeToString(multipartFile.getBytes())));

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        httpHeaders.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
        httpHeaders.set(HttpHeaders.AUTHORIZATION, "token " + this.accessToken);

        ResponseEntity<String> responseEntity = this.restTemplate.exchange(this.api + filePath, HttpMethod.PUT,
                new HttpEntity<>(payload.toString(), httpHeaders), String.class);

        responseEntity.getStatusCode().isError();// TODO 上传失败

        JsonObject response = JsonParser.parseString(Objects.requireNonNull(responseEntity.getBody())).getAsJsonObject();

        LOGGER.info("上传完毕: {}", response.toString());


        // TODO 序列化到磁盘备份

        return this.url + filePath;
    }

    /**
     * 获取文件的后缀
     */
    protected String getSuffix(String fileName) {
        int index = fileName.lastIndexOf(".");
        if (index != -1) {
            String suffix = fileName.substring(index + 1);
            if (!suffix.isEmpty()) {
                return suffix;
            }
        }
        throw new IllegalArgumentException("非法的文件名称：" + fileName);
    }

    /**
     * 按照年月日获取打散的打散目录
     * yyyy/mmd/dd
     */
    protected String[] getDateFolder() {
        String[] retVal = new String[3];

        LocalDate localDate = LocalDate.now();
        retVal[0] = localDate.getYear() + "";

        int month = localDate.getMonthValue();
        retVal[1] = month < 10 ? "0" + month : month + "";

        int day = localDate.getDayOfMonth();
        retVal[2] = day < 10 ? "0" + day : day + "";

        return retVal;
    }
}
```

## Controller

在controller中声明接口即可配置使用了。

`UploadController.java`

```java
import com.idle.entity.RestBean;
import com.idle.util.GithubUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/api/github")
public class UploadController {

    @Autowired
    private GithubUploader githubUploader;

    @PostMapping("upload")
    public RestBean<?> upload (@RequestParam("file") MultipartFile multipartFile) throws IOException {
        return RestBean.success(this.githubUploader.upload(multipartFile));
    }
}
```

## 功能测试

在ApiPost测试接口上传

![image-20230713155253884](https://image.itbaima.net/images/27/image-20230713155429486.png)

图片效果预览

https://cdn.staticaly.com/gh/Gatsby0108/idle_bed/master/2023/07/13bb4aacf2701c4be0a08794c380dbe749.png

![image-20230713155401502](https://image.itbaima.net/images/27/image-20230713155222584.png)