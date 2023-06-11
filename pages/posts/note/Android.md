---
title: Android
author: 四宮かぐや
date: 2021-06-12
updated: 2021-06-12
categories:
  - 学习笔记
tags: 
  - 笔记
  - 后端
---
Android笔记总结
<!-- more -->
# Android四大组件

------

[[TOC]]

## Service

------

### Service概述

​	Service是一个一种可以在后台执行长时间运行操作而没有用户界面的应用组件。服务可由其他应用组件启动（如 Activity），服务一旦被启动将在后台一直运行，即使启动服务的组件（Activity）已被销毁也不受影响。此外，组件可以绑定到服务，与之进行交互，甚至是执行进程间通信（IPC）。例如，服务可以处理网络事务、播放音乐，执行文件I/O或与内容提供程序交互，而所有这一切均可在后台进行，Service基本上分为两种形式:

#### 启动状态

​	当应用组件（如 Activity）通过调用 startService() 启动服务时，服务即处于“启动“状态。一旦启动，服务即可在后台无限期运行。除非手动调用才能停止服务，已启动的服务通常是执行单已操作，而不会返回结果给调用方

#### 绑定状态

​	当应用组件通过调用 bindService() 绑定到服务时，服务即处于“绑定”状态

### Service在清单文件中的声明

```java
<service android:enabled=["true"|"false"]
		android:exported=["true"|"false"]
		android:icon="drawable resource"
        android:isolatedProcess=["true"|"false"]
        android:label="string resource"
        android:name="string"
        android:permission="string"
        android:process="string">
        ...
</service>
```

- android:exported：代表是否能被其他应用隐式调用，其默认值是由service中有无intent-filter决定的，如果有 intent-filter，默认值为 true，否则为 false。为false的情况下，即使有 intent-filter 匹配，也无法打开，既无法被其他应用隐式调用

- android:name：对应Service类名

- android:permission：是权限声明

- android:process：是否需要在单独的进程中运行，当设置为 android:process="remote" 时，代表Service在单独的进程中运行

	​	==注意":"很重要，它的意思是指要在当前进程名称前面加上当前的包名，所以"remote"和":remote"不是同一个意思，前者的进程名称为:remote，而后者的进程名称为:App-packageName:remote==

- android:isolatedProcess：设置true意味着，服务会在一个特殊的进程下运行，这个进程与系统其他进程分开且没有自己的权限，与其通信的唯一途径是通过服务的API(bind and start)
- android:enabled：是否可以被系统实例化，默认为 true，因为父标签也有 enable 属性，所以必须两个都为默认值 true 的情况下服务才会被激活，否则不会激活

### Service启动服务

​	首先要创建服务，必须创建 Service 的子类（或使用它的一个现有子类如 IntentService）。在实现中，我们需要重写一些回调方法，以处理服务生命周期的某些关键过程

```java
package com.Amdusias.ipctest.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.support.annotation.Nullable;

/**
 *Created by Amdusias
 *Time 2021/10/20
 *Description:service simple demo
 */
public class SimpleService extends Service{
    /**
     *绑定服务时才会调用
     *必须要实现的方法
     *@param intent
     *@return
     */
    @Nullable
    @Override
    public IBinder onBind(Intent intent){
		return null;
    }

    /**
     *首次创建服务时，系统将调用此方法来执行一次性设置程序（在调用 onStartCommand() 或 onBind() 之前）
     *如果服务已在运行，则不会调用此方法。该方法只被调用一次
     */
    @Override
    public void onCreate(){
        System.out.println("onCreate invoke");
        super.onCreate();
    }

    /**
     *每次通过startService()方法启动Service时都会被回调
     *@param intent
     *@param flags
     *@param startId
     *@return
     */
    @Override
    public int onStartCommand(Intent intent,int flags, int startId){
        System.out.println("onStartCommand invoke");
        return super.onStartCommand(intent,flags,startId);
    }

    /**
     *服务销毁时的回调
     */
    @Override
    public void onDestroy(){
        System.out.println("onDestroy invoke");
        super.onDestroy();
    }
}
```

​	从上面的代码可以看出，SimpleService 继承了Service类，并重写了 onBind 方法，该方法是必须重写的，但由于此时服务是“启动状态”，则该方法无需实现，返回null即可，只有在“绑定状态”的情况下才需要实现该方法并返回一个 IBinder 的实现类，接着重写了 onCreate、onStartCommand、onDestroy三个主要的生命周期方法

- **onBind()**

	​	当另一个组件想通过调用bindService()与服务绑定（例如执行 RPC）时，系统将调用此方法。在此方法的实现中，必须返回一个IBinder 接口的实现类，供客户端用来与服务进行通信。无论是“启动状态”还是“绑定状态”，此方法必须重写，但在“启动状态”下直接返回null

- **onCreate()**

	​	首次创建服务时，系统将调用此方法来执行一次性设置程序（在调用 onStartCommand() 或 onBind() 之前）。如果服务已在运行，则不会调用此方法，该方法只调用一次

- **onStartCommand()**

	​	当另一个组件（如 Activity）通过调用 startService() 请求启动服务时，系统将调用此方法。一旦执行此方法，服务即会启动并可在后台无限期运行。如果自己实现此方法，则需要在服务工作完成后，通过调用 stopSelf() 或 stopService() 来停止服务。（在“绑定状态”下，无需实现此方法）

- **onDestroy()**

	​	当服务不再使用且将被销毁时，系统将会调用此方法。服务应实现此方法来清理所有资源，如线程、注册的侦听器、接收器等，这是服务接收的最后一个调用

	------

