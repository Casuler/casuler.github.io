---
title: JavaSE 教程
author: 四宮かぐや
date: 2022-6-16
updated: 2022-6-16
categories:
  - 学习笔记
tags:
  - 笔记
  - 后端
---

JavaSE 课程总结
<!-- more -->
# JavaSE 教程

[[TOC]]

## 前篇

### 走进Java语言

1.从头开始，每一个概念都会依次提出，不会以轰炸的形式出现

2.跳过历史介绍

3.少踩坑

==有一定的编程基础Java的学习会更加容易==

推荐将**C/C++语言**作为**前置学习语言** ==Java就是C++的简化版本==

python、Js亦可

------

推荐教材：

计算机理论知识四大天王——《计算机操作系统》、《计算机网络》、《计算机组成原理》、==《数据结构与算法》==

------

#### Java创造了什么？

NOKIA、Android、Minecraft（得益于Java优越的==跨平台==特性，Minecraft能运行在各大操作系统上）

**JVM(Java Virtual Machine)**

**Java语言的平台无关性**

Linux、Windows、Mac、Solaris等操作系统之间通过JVM虚拟机加载.class二进制文件来相互交互

------

#### Java的各大版本

Java ME ：Lite版Java，很少使用

Java SE ：主要内容，标准版Java，是整个Java的核心，完成JavaSE的学习，才能走向更加高级的开发

​				在此阶段，更应该专注于基础知识的掌握，考验个人的基本功

Java EE ：企业级Java，专用于企业级开发，尤其是当下最热门的网站应用，也称作JavaWeb应用，它是基于JavaSE				建立起来的体系，只有学好了JavaSE，才能接触到EE开发

------

#### JDK和JRE

**JRE(Java Runtime Environment)**是最基本的**Java运行环境**，有了JRE后，就可以运行Java程序，不同的操作系统都有自己的JRE

**JDK(Java Development Kit)**==包含==了JRE，同时提供了开发时所需的一些工具

------

### 环境与编译器安装

开发环境JDK、编译器IDEA

==不用配置环境变量==

JDKurl：zulu openjdk

------

### Java运行机制

源程序.java(javac命令) -> java编译器 -> 字节码.class文件 -> **JVM**(类装载器 -> 字节码校验器 -> 解释器) -> 操作系统
