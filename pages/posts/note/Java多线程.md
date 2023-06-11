---
title: Java多线程
author: 四宮かぐや
date: 2021-12-17
updated: 2021-12-17
categories:
  - 学习笔记
tags:
  - 笔记
  - 后端
---
Java多线程知识总结
<!-- more -->
# Java多线程全套功法

[[TOC]]

## 引言

### 什么是进程，线程？

**进程** ：==资源分配的最小单位==，CPU 从磁盘中读取一段程序到内存中，该执行程序的实例就叫做进程。一个程序如果被 CPU 多次读取到内存中，则变成多个独立的进程。

**线程** ：线程是程序执行的最小单位，在一个进程中可以有多个不同的线程。

**线程的应用实例** ：

*同一个应用程序中(进程)，更好的并行处理。*

为什么需要使用多线程？

**采用多线程的形式执行代码，目的是为了提高程序开发的效率。**

### 串行、并行的区别

CPU分时间片交替执行，宏观并行，微观串行，由OS负责调度。如今的CPU已经发展到了多核CPU，真正存在并行。

### CPU调度算法

多线程是不是一定提高效率？ 不一定，需要了解 CPU 调度的算法。

CPU 调度算法 ：

| 调度算法        | 占用 CPU 方式            | 吞吐量                       | 响应时间                                   | 开销         | 对进程的影响                    | 饥饿问题 |
| --------------- | ------------------------ | ---------------------------- | ------------------------------------------ | ------------ | ------------------------------- | -------- |
| FCFS            | 非抢占                   | 不强调                       | 可能很慢，特别是当进程的执行时间差别很大时 | 最小         | 对短进程不利；对I/O型的进程不利 | 无       |
| ==Round Robin== | ==抢占（时间片用完时）== | ==若时间片小，吞吐量会很低== | ==为短进程提供好的响应时间==               | ==最小==     | ==公平对待==                    | ==无==   |
| SJF             | 非抢占                   | 高                           | 为短进程提供好的响应时间                   | 可能较大     | 对长进程不利                    | 可能     |
| ==SRTN==        | ==抢占（到达时）==       | ==高==                       | ==提供好的响应时间==                       | ==可能较大== | ==对长进程不利==                | ==可能== |
| HRRN            | 非抢占                   | 高                           | 提供好的响应时间                           | 可能较大     | 很好的平衡                      | 无       |
| ==Feedback==    | ==抢占（时间片用完时）== | ==不强调==                   | ==不强调==                                 | ==可能较大== | ==对I/O型进程有利==             | ==可能== |

如果在生产环境中，开启很多线程，但是我们的服务器核数很低，我们这么多线程会在 CPU 上做上下文切换，反而会降低效率。

==使用线程池来限制线程数和 CPU 相同会比较好。==

### 一、Java多线程基础

1. 继承 Thread 类创建线程
2. 实现 Runnable 接口创建线程
3. 使用匿名内部类形式创建线程
4. 使用 Lambda 表达式创建
5. 使用 Callable 和 Future 创建线程
6. 使用线程池创建
7. Spring 中的 @Async 创建

#### 1.继承 Thread 类创建线程

```java
public class ThreadTest extends Thread{
    @Override
    public void run() {
        for (int i = 0; i < 10; i++){
            System.out.println("子线程，线程一");
        }
    }

    /** 创建对象进入初始状态，调用start()进入就绪状态。直接调用run()方法，相当于在main中执行run。并不是新线程*/
    public static void main(String[] args) {
        new ThreadTest().start();
    }
}
```

#### 2.实现 Runnable 接口创建线程

```java
public class Thread02 implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+"我是子线程");
    }

    public static void main(String[] args) {
        new Thread(new Thread02()).start();
    }
}
```

#### 3.使用匿名内部类形式创建线程

```java
 public static void main(String[] args) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName()+"我是子线程");
            }
        }).start();
    }
```

#### 4.使用 Lambda 表达式创建

```java
public class Thread02  {
    public static void main(String[] args) {
        new Thread(() -> System.out.println(Thread.currentThread().getName()+"我是子线程")).start();
    }
}
```

#### 5.使用 ==Callable== 和 ==Future== 创建线程

Callable 和 Future 线程可以获取到返回结果，底层基于 ==LockSupport==。

```
Runnable 的缺点：
1. run没有返回值
2. 不能抛异常

Callable 接口允许线程有返回值，也允许线程抛出异常
Future 接口用来接受返回值
```

```java
public class Thread03 implements Callable<Integer> {
    /**
     * 当前线程需要执行的代码，返回结果
     * @return 1
     * @throws Exception
     */
    @Override
    public Integer call() throws Exception {
        System.out.println(Thread.currentThread().getName()+"返回1");
        return 1;
    }
}
```

```java
public static void main(String[] args) throws InterruptedException, ExecutionException {
        Thread03 callable = new Thread03();
        FutureTask<Integer> integerFutureTask = new FutureTask<Integer>(callable);
        new Thread(integerFutureTask).start();
        //通过api获取返回结果，主线程需要等待子线程返回结果
        Integer result = integerFutureTask.get();
    	// main,1
        System.out.println(Thread.currentThread().getName()+","+result);
    }
```

#### 6.使用线程池创建

```java
public class ThreadExecutor {
    public static void main(String[] args) {
        //PS：手动创建线程池，效果会更好
        ExecutorService executorService = Executors.newCachedThreadPool();
        executorService.execute(new Runnable(){
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName()+"我是子线程1");
            }
        });
        //submit一个线程到线程池
        executorService.submit(new Thread03());
    }
}
```

#### 7.Spring 中的 @Async 创建

第一步 ：在入口类中开启异步注解

```java
@SpringBootApplication
@EnableAsync
```

第二步 ：在当前方法加上@Async

```java
@Component
@Slf4j
public class Thread01 {
    @Async
    public void asyncLog(){
        try {
            Thread.sleep(3000);
            log.info("<2>");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
```

第三步 ：验证测试

```java
@RestController
@Slf4j
public class Service {
    @Autowired
    private Thread01 thread01;
    @RequestMapping("test")
    public String Test(){
        log.info("<1>");
        thread01.asyncLog();
        log.info("<3>");
        return "test";
    }
}
```

