---
title: Java高阶
author: 四宮かぐや
date: 2021-12-16
updated: 2021-12-16
categories:
  - 学习笔记
tags:
  - 笔记
  - 后端
---

Java高阶课程知识总结
<!-- more -->
# Java高阶

[[TOC]]

------

## Java类加载器

1.启动类加载器

2.扩展类加载器

3.应用程序类加载器

4.自定义类加载器

------

## 泛型

### 泛型方法

类型推导  1.只有参数列表中涉及的泛型类型，则所传类型就是何种类型

​				2.参数列表都是一致的，需要找的参数就去所传参数的共同父类中去找

​				3.有返回值则按返回值确定其类型

​				4.泛型类型只能是一个类型，只针对对象函数，只有属于对象的才能使用

​				5.当泛型类型的静态方法中可以使用泛型时，则其他类调用静态方法时都是调用相同的方法（其泛型类型若不明确就会产生矛盾）

*==**PS：**==*Java中的泛型只在编译阶段起作用，在编译中如果正确检验泛型结果后，就会将泛型的相关消息擦出，并在对象进入和打开边界处添加类型检查和类型转换方法。

### 泛型数组

------

## 集合

集合只能装引用类型，数组可以装引用类型和基础类型

------

## 接口

| COLLECTION | MAP  |
| ---------- | ---- |
| list：有序 |      |
| set：无序  |      |

------

## List

### ArrayList

特点：底层为数组；起始值一般为16,，如果装不下则进行扩容操作（此时参数翻倍增加）

例：

```java
new ArrayList();
list.add(100);
add{
	o[i] = 100;
	i++;
}
Object o[] = new Object[16];	//重新创建一个数组把先前数组内容转移以实现扩容
```



### LinkedList



### HashMap

由数组与链表一同实现；

***==PS:==***==判断

```java
Map map == new HashMap();
map.put(1,"Tom");
map.put(1,"Jerry");				//Key值相同，则覆盖先前的内容
map.put(2,"KillerQueen");
```

------

## Set

重复元素无法再次存入

### HashSet

### LinkedHashSet

------

## I/O

------

### File

#### 1.概述

文件和目录（文件夹）路径名的抽象表示形式

用户可以通过file类在硬盘上操作文件和目录，但file类只显示文件信息，不能用于访问文件

------

#### 2.路径的分类

绝对路径：带有盘符号的路径

相对路径：没有带盘符号的路径，默认在根目录下

------

#### 3.构造方法

File (String pathname) ：照着一个路径得到File对象

File (String parent, String child) ：根据一个目录和一个子文件/目录得到File对象

File (File parent, String child) ：根据一个父File对象和子文件/目录都到File对象

```java
import java.io.File;

public class Demo {
	public static void main(String[] args){
		//通过路径得到对象
		File file = new File("E:\\aaa\\");
		//通过父类路径和子类名得到对象
		File file1 = new File("E:\\", "aaa");
		//通过父类对象和子类名得到对象
		File file2 = new File("E:\\");
		File file3 = new File(file2, "aaa");
	}
}
```

------

#### 4.功能

##### (1)创建功能

public boolean creatNewFile() ：创建一个新文件，若存在，则不重复创建

public boolean mkdir() ：创建一个目录，若存在，则不创建，只能创建单层目录

public boolean mkdirs() ：创建一个目录，若存在，则不创建，用于创建单层或多层目录

```java
import java.io.File;
import java.io.IOException;

public class Demo {
	public static void main(String[] args) throws IOException{
		//将文件封装
        File file = new File("E:\\aaa.txt");
        //在E盘创建文件aaa，返回值代表是否创建成功
        boolean newFile = file.createNewFile();
        System.out.println(newFile);
        //封装单层目录
        File file1 = new File("E:\\aaa\\");
        //创建单层目录，返回值代表是否创建成功
        boolean mkdir = file1.mkdir();
        System.out.println(mkdir);
        //封装多层目录
        File file2 = new File("E:\\bbb\ccc\eee");
        //创建多层目录，返回值代表是否创建成功
        boolean mkdirs = file2.mkdirs();
        System.out.println(mkdirs);
	}
}
```

==**Ps ：**==若在封装时忘记写盘符号，则默认在根目录下

------

##### (2)删除功能

public boolean delete() ：删除文件或文件夹

==**Ps ：**==只能删除空文件夹

```java
import java.io.File;
import java.io.IOException;

public class Demo {
	public static void main(String[] args) throws IOException{
		//将文件封装
		File file = new file("E:\\aaa.txt");
		//调用delete方法删除文件，返回值表示是否删除成功
		boolean delete = file.delete;
		System.out.println(delete);
		//封装单层目录
		File file1 = new File("E:\\aaa\\");
		//调用delete方法删除空文件夹，返回值表示是否删除成功
		boolean delete1 = file1.delete();
		System.out.println(delete1);
		//封装多层目录
		File file2 = new File("E:\\bbb\\");
		//调用delete方法删除文件夹，返回值表示是否删除成功
		boolean delete2 = file2.delete();
		System.out.println(delete2);
	}
}
```

------

##### (3)重命名功能

public boolean renameTo(FIle file) ：把文件重命名为指定路径

**==Ps ：==**如果路径相同，就是改名；如果路径不同，就是剪切并改名

```java
import java.io.File;
import java.io.IOException;

public class Demo {
    public static void main(String[] args) throws IOException{
        //封装文件
        File file = new File("a.txt");
        //创建文件
        file.createNewFile();
        //封装新路径并重命名，返回值代表是否重命名成功
        File file1 = new File("E:\\b.txt");
        boolean b = file.renameTo(file1);
        System.out.println(b);
    }
}
```

------

##### (4)判断功能

public boolean isDirectory() ：判断是否是目录

public boolean isFile() ：判断是否是文件

public boolean exists() ：判断是否存在

public boolean canRead() ：判断是否可读

public boolean canWrite() ：判断是否可写

public boolean isHidden() ：判断是否隐藏

```java
import java.io.File;
import java.io.IOException;

public class Demo {
    public static void main(String[] args) throws IOException{
        //封装文件
        File file = new File("a.txt");
        //判断是否是文件
        boolean file1 = file.isFile();
        System.out.println(file1);//true
        //判断是否是文件夹
        boolean directory = file.isDirectory();
        System.out.println(directory);//false
        //判断是否存在
        boolean exists = file.exists();
        System.out.println(exists);//true
        //判断是否可读、可写、隐藏
        boolean b = file.canRead();
        System.out.println(b);
        boolean b1 = file.canWrite();
        System.out.println(b1);
        boolean hidden = file.isHidden();
        System.out.println(hidden);
    }
}
```

------

##### (5)获取功能

public String getAbsolutePath() ：获取绝对路径
public String getPath() ：获取相对路径
public String getParent() ：获取上一级路径，返回字符串，没有返回null
public File getParentFile() ：获取上一级路径，返回File类型，没有返回null
public long getTotalSpace() ：返回总容量（单位字节）
public long getFreeSpace() ：返回剩余容量（单位字节）
public String getName() ：获取名称
public long length() ：获取长度（字节数）
public long lastModified() ：获取最后一次的修改时间（毫秒值）

```java
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws IOException {
        //封装文件
        File file = new File("a.txt");
        //创建文件
        //手动写入vfdsfsafafafadsfa内容
        file.createNewFile();
        //获取a文件的绝对路径
        String path = file.getAbsolutePath();
        System.out.println(path);
        //获取a文件的相对路径
        String path1 = file.getPath();
        System.out.println(path1);
        //获取a文件的上一级目录,以字符串的形式返回,没有返回null
        //封装成对象的只有a文件，所以它没有上一级目录
        String parent = file.getParent();
        System.out.println(parent);
        //获取a文件的上一级目录,以file类型返回
        //推荐使用，方便操作
        File parentFile = file.getParentFile();
        System.out.println(parentFile);
        //获取文件的总容量
        long totalSpace = file.getTotalSpace();
        System.out.println("总容量"+totalSpace);
        //获取文件剩余容量
        long freeSpace = file.getFreeSpace();
        System.out.println("剩余容量"+freeSpace);
        //那么，文件的已用空间就可以得到计算
        long useSpace = totalSpace-freeSpace;
        System.out.println("剩余容量："+useSpace);
        //获取文件名称
        String name = file.getName();
        System.out.println(name);
        //获取文件中内容字节数
        long length = file.length();
        System.out.println(length);
        //获取文件最后一次修改的时间
        long l = file.lastModified();
        //这里返回的是毫秒值，转换成年月日格式
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = dateFormat.format(new Date(l));
        System.out.println(format);
    }
}
```

public String[] list() ：获取指定目录下的所有文件或者文件夹的名称数组

public String[] listFiles() ：获取指定目录下的所有文件或者文件夹的File数组

```java
import java.io.File;

public class Demo {
    public static void main(String[] args) {
        File file = new File("E:\\photos\\");
        //获取此目录下所有文件或文件夹的字符串对象数组
        String[] list = file.list();
        //遍历
        for (String s : list) {
            System.out.println(s);
        }
        System.out.println("-----------");
        //获取此目录下所有文件或文件夹的File对象数组
        //比较灵活，可继续对文件或文件夹进行操作，一般使用它
        File[] files = file.listFiles();
        //遍历
        for (File file1 : files) {
            System.out.println(file1);
        }
    }
}
```

根据个人需求返回字符串数组或file数组，但一般返回file数组，便于之后对文件进行操作

------

##### (6)文件过滤器

public String[] list(FilenameFilter filter)

public File[] listFiles(FilenameFilter filter)

结合文件过滤器和封装数组就可获得符合条件的文件或文件夹名

```java
import java.io.File;
import java.io.FilenameFilter;

public class Demo {
    public static void main(String[] args) {
        File file = new File("E:\\photos\\");
        //将此目录下符合条件的文件或文件夹放入数组中
        File[] files = file.listFiles(new FilenameFilter() {
            //过滤条件：只放入以.jpg为后缀名的文件
            public boolean accept(File dir, String name) {
                //dir代表父路径
                //name代表文件名的字符串形式
                File file1 = new File(dir, name);
                if(file1.isFile()&&file1.getName().endsWith(".jpg")){
                    return true;
                }else {
                    return false;
                }
            }
        });
        //遍历
        for (File file1 : files) {
            System.out.println(file1);
        }
    }
}
```

public File[] listFiles(FileFilter filter)，这个方法和上一个方法类似，只不过不需要封装父路径和路径名，达到的效果是一样的

```java
import java.io.File;
import java.io.FileFilter;

public class Demo {
    public static void main(String[] args) {
        File file = new File("E:\\photos\\");
        //将此目录下符合条件的文件或文件夹放入数组中
        File[] files = file.listFiles(new FileFilter() {
            public boolean accept(File pathname) {
                if(pathname.isFile()&&pathname.getName().endsWith(".jpg")){
                    return true;
                }else{
                    return false;
                }
            }
        });
        //遍历
        for (File file1 : files) {
            System.out.println(file1);
        }
    }
}
```

------

总结：要想对单个文件或文件夹进行操作，必须先将文件或文件夹封装成对象，然后再通过方法实现需求；要想对多个文件同时进行操作，就要先将这些文件放入数组，然后在遍历数组的过程中实现需求，这里就需要用到文件过滤器

------

### I/O流

#### 1.概念

java的 io 是实现输入和输出的基础，可以方便的实现数据的输入和输出操作。在java中把不同的输入/输出源（键盘，文件，网络连接等）抽象表述为“流”(stream)。通过流的形式允许java程序使用相同的方式来访问不同的输入/输出源。stram是从起源（source）到接收的（sink）的有序数据

**==Ps ：==**java把所有的传统的流类型都放到在java.io包下，用于实现输入和输出功能

------

#### 2.分类

- 按操作**数据单位**不同分为 ：**字节流(8 bit)**、**字符流(16 bit)**
- 按数据流的**流向**不同分为 ：**输入流**、**输出流**
- 按流的**角色**不同分为 ：**节点流**、**处理流**
	1. Java的IO流共涉及40多个类，实际上非常规则，都是从如下4个抽象基类中派生的
	2. 由这4个类派生出来的子类名称都是以其父类名作为子类名后缀

| （抽象基类） |    字节流    | 字符流 |
| :----------: | :----------: | :----: |
|    输入流    | InputStream  | Reader |
|    输出流    | OutputStream | Writer |

------

#### 3.体系

|    分类    |      字节输入流      |      字节输出流       |    字符输入流     |     字符输出流     |
| :--------: | :------------------: | :-------------------: | :---------------: | :----------------: |
|  抽象基类  |     InputStream      |     OutputStream      |      Reader       |       Writer       |
|  访问文件  |   FileInputStream    |   FileOutputStream    |    FileReader     |     FileWriter     |
|  访问数组  | ByteArrayInputStream | ByteArrayOutputStream |  CharArrayReader  |  CharArrayWriter   |
|  访问管道  |   PipedInputStream   |   PipedOutputStream   |    PipedReader    |    PipedWriter     |
| 访问字符串 |                      |                       |   StringReader    |    StringWriter    |
|   缓冲流   | BufferedInputStream  | BufferedOutputStream  |  BufferedReader   |   BufferedWriter   |
|   转换流   |                      |                       | InputStreamReader | OutputStreamWriter |
|   对象流   |  ObjectInputStream   |  ObjectOutputStream   |                   |                    |
|            |  FilterInputStream   |  FilterOutputStream   |   FilterReader    |    FliterWriter    |
|   打印流   |                      |      PrintStream      |                   |    PrintWriter     |
| 推回输入流 | PushbackInputStream  |                       |  PushbackReader   |                    |
|   特殊流   |   DataInputStream    |   DataOutputStream    |                   |                    |

------

#### 4.节点流和处理流

- 节点流 ：直接从数据源或目的地读写数据

- 处理流 ：不直接连接到数据源或目的地，而是“连接”在已存在的流（节点流或处理流）之上，通过对数据的处理为程序提供更为强大的读写功能

------

#### 5.InputStream & Reader

- InputStream 和 Reader 是所有**输入流**的基类

- InputStream（典型实现 ：*==FileInputStream==*）

```java
int read();
int read(byte[] b);
int read(byte[] b, int off, int len);
```

- Reader（典型实现 ：*==FileReader==*）

```java
int read();
int read(char[] c);
int read(char[] c, int off, int len);
```

- 程序中打开的文件 IO 资源不属于内存里的资源，垃圾回收机制无法回收该资源，所以应该是**==显式关闭文件 IO 资源==**

- FileInputStream 从文件系统中的某个文件中获得输入字节。FileInputStream 用于读取非文本数据之类的原始字节流；要读取字符流，需要使用 FileReader

------

##### （1）InputStream

- int read()

从输入流中读取数据的下一个字节，返回 0 到 255 范围内的 int 字节值。如果因为已经到达流末尾而没有可用的字节，则返回值-1

- int read(byte[] b)

从此输入流中将最多 b.length 个字节的数据读入一个 byte 的数组中。如果因为已经到达流末尾而没有可用的字节，则返回值-1；否则==**以整数形式返回实际读取的字节数**==

- int read(byte[] b, int off, int len)

将输入流中最多 len 个数据字节读入 byte 数组，尝试读取 len 个字节，但读取的字节也可能小于该值。以整数形式返回实际读取的字节数。如果因为流位于文件末尾而没有可用的字节，则返回值-1

- public void close() throws IOException

关闭此输入流并释放与该流关联的所有系统资源

------

##### （2）Reader

- int read()

读取单个字符，作为整数读取的字符。范围在 0 到 65535 之间（0x00-0xffff）（2个字节的Unicode码），如果已到达流的末尾，则返回-1

- int read(char[] cbuf)

将字符读入数组。如果已到达流的末尾，则返回-1，否则返回本次读取的字符数

- int read(char[] cbuf, int off, int len)

将字符读入数组的某一部分，存到数组 cbuf 中，从 off 处开始存储，最多读 len 个字符。如果已到达流的末尾，则返回-1，否则返回本次读取的字符数

- public void close() throws IOException

关闭此输入流并释放该流关联的所有系统资源

------

#### 6.OutputStream & Writer

- OutputStream 和 Writer 也非常相似

```java
void write(int b/int c);
void write(byte[] b/char[] cbuf);
void write(byte[] b/char[] buff, int off, int len);
void flush();
void close();//需要先刷新，再关闭此流
```

- 因为字符流直接以字符作为操作单位，所以 Writer 可以用字符串来替换字符数组，即以 String 对象作为参数

```java
void write(String str);
void write(String str, int off, int len);
```

- FileOutputStream 从文件系统中的某个文件中获得输出字节。FileOutputStream 用于写出非文本数据之类的原始字节流。要写出字符流，需要使用 FileWriter

------

##### （1）OutputStream

- void write(int b)

将指定的字节写入此输出流。write 的常规协定是 ：向输出流写入一个字节，要写入的字节是参数 b 的 8 个低位，b 的 24 个高位将被忽略。即写入 0-255

- void write(byte[] b)

将 b.length 个字节从指定的 byte 数组写入此输出流。write(b) 的常规协定是 ：应该与调用 write(b, 0, b.length) 的效果完全相同

- void write(byte[] b, int off, int len)

将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此输出流

- public void flush()throws IOException

刷新此输出流并强制写出所有缓冲的输出字节。调用此方法指示应将这些字节立即写入它们预期的目标

- public void close()throws IOException

关闭此输出流并释放与该流关联的所有系统资源

------

##### （2）Writer

- void write(int c)

写入单个字符。要写入的字符包含在给定整数值的 16 个低位中， 16 个高位被忽略，即写入 0 到 65535 之间的 Unicode 码

- void write(char[] cbuf)

写入字符数组

- void write(char[] cbuf, int off, int len)

写入字符数组的某一部分。从 off 开始，写入 len 个字符

- void write(String str)

写入字符串

- void write(String str, int off, int len)

写入字符串的某一部分

- void flush()

刷新该流的缓冲，则立即将它们写入预期目标

- public void close()throws IOException

关闭此输出流并释放与该流关联的所有系统资源

------

## 多线程

------

### 概念

#### 进程与线程

- 进程 ：每个进程都有独立的代码和数据空间（进程上下文），进程间的切换会有较大的开销，一个进程包含1- n 个线程。（进程是资源分配的最小单位）


- 线程 ：同一类线程共享代码和数据空间，每个线程有独立的运行栈和程序计数器（PC），线程切换开销小。（线程是 cpu 调度的最小单位）


- 线程和进程一样分为五个阶段 ：创建、就绪、运行、阻塞、终止。


- 多进程是指操作系统能同时运行多个任务（程序）。


- 多线程是指在同一程序中有多个顺序流在执行。

#### 并行与并发

- 并发 ：单核cpu运行多线程时，时间片进行很快的切换。线程轮流执行cpu

- 并行 ：多核cpu运行 多线程时，真正的在同一时刻运行

#### 线程的相关API

```java
//获取当前线程的名字
Thread.currentThread().getName()
```

1.start() ：①启动当前线程	②调用线程中的run方法
2.run() ：通常需要重写 Thread 类中的此方法，将创建的线程要执行的操作声明在此方法中
3.currentThread() ：静态方法，返回执行当前代码的线程
4.getName() ：获取当前线程的名字
5.setName() ：设置当前线程的名字
6.yield() ：主动释放当前线程的执行权
7.join() ：在线程中插入执行另一个线程，该线程被阻塞，直到插入执行的线程完全执行完毕以后，该线程才继续执行下去
8.stop() ：过时方法。当执行此方法时，强制结束当前线程。
9.sleep(long millitime) ：线程休眠一段时间
10.isAlive() ：判断当前线程是否存活

------

## 反射

==反射是框架设计的灵魂==

==**PS：必须先得到代表的字节码的Class，Class类用于表示.class文件（字节码）**==

------

### 概念

JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。
要想解剖一个类,必须先要获取到该类的字节码文件对象。而解剖使用的就是Class类中的方法，所以先要获取到每一个字节码文件对应的Class类型的对象。

==**反射就是把java类中的各种成分映射成一个个的Java对象**==

eg：

```
一个类有：成员变量、方法、构造方法、包等等信息，利用反射技术可以对一个类进行解剖，把个个组成部分映射成一个个对象。
     （其实：一个类中这些成员方法、构造方法、在加入类中都有一个类来描述）
```

如图是类的正常加载过程，反射的原理在于class对象

加载时：Class对象是将class文件读入内存并创建的。

![](/反射机制.png)

------

### 使用

------

#### 获取Class对象的三种方式

1. Object-> getClass();
2. 任何数据类型（包括基本数据类型）都有一个"静态"的class属性
3. 通过Class类的静态方法：forName(String className)（常用）

其中getClass()是因为所有类都继承于Object类，故调用Object类获取。

| 构造方法摘要 |
| ------------ |
| Object()     |

| 方法摘要                |                                                              |
| ----------------------- | ------------------------------------------------------------ |
| protected Object        | clone() 创建并返回此对象的一个副本                           |
| boolean                 | equals(Object obj) 指示某个其他对象是否与此对象"相等"        |
| protected void          | finalize() 当垃圾回收器确定不存在对该对象更多引用时，由对象的垃圾回收器调用此方法 |
| Class<? extends Object> | getClass() 返回一个对象的运行时类                            |
| int                     | hashCode() 返回该对象的哈希值                                |
| void                    | notify() 唤醒在此对象监视器上等待的单个线程                  |
| void                    | notifyAll() 唤醒在此对象监视器上等待的所有线程               |
| String                  | toString() 返回该对象的字符串表示                            |
| void                    | wait() 导致当前的线程等待，直到其他线程调用此对象的 notify() 方法或 notifyAll()方法 |
| void                    | wait(long timeout) 导致当前的线程等待，直到其他线程调用此对象的 notify() 方法或 notifyAll()方法，或者超过指定的时间量 |
| void                    | wait(long timeout) 导致当前的线程等待，直到其他线程调用此对象的 notify() 方法或 notifyAll()方法，或者其他某个线程中断当前线程，或者已超过指定的时间量 |

```java
package fanshe;
/**
 * 获取Class对象的三种方式
 * 1 Object ——> getClass();
 * 2 任何数据类型（包括基本数据类型）都有一个“静态”的class属性
 * 3 通过Class类的静态方法：forName（String  className）(常用)
 *
 */
public class Fanshe {
	public static void main(String[] args) {
		//第一种方式获取Class对象
		Student stu1 = new Student();//这一new 产生一个Student对象，一个Class对象。
		Class stuClass = stu1.getClass();//获取Class对象
		System.out.println(stuClass.getName());

		//第二种方式获取Class对象
		Class stuClass2 = Student.class;
		System.out.println(stuClass == stuClass2);//判断第一种方式获取的Class对象和第二种方式获取的是否是同一个

		//第三种方式获取Class对象
		try {
			Class stuClass3 = Class.forName("fanshe.Student");//注意此字符串必须是真实路径，就是带包名的类路径，包名.类名
			System.out.println(stuClass3 == stuClass2);//判断三种方式是否获取的是同一个Class对象
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

	}
}
```

------

#### 通过反射获取构造方法并使用

```java
package fanshe;

public class Student {

	//---------------构造方法-------------------
	//（默认的构造方法）
	Student(String str){
		System.out.println("(默认)的构造方法 s = " + str);
	}

	//无参构造方法
	public Student(){
		System.out.println("调用了公有、无参构造方法执行了。。。");
	}

	//有一个参数的构造方法
	public Student(char name){
		System.out.println("姓名：" + name);
	}

	//有多个参数的构造方法
	public Student(String name ,int age){
		System.out.println("姓名："+name+"年龄："+ age);//这的执行效率有问题，以后解决。
	}

	//受保护的构造方法
	protected Student(boolean n){
		System.out.println("受保护的构造方法 n = " + n);
	}

	//私有构造方法
	private Student(int age){
		System.out.println("私有的构造方法   年龄："+ age);
	}

}
```

测试类

```java
package fanshe;

import java.lang.reflect.Constructor;


/*
 * 通过Class对象可以获取某个类中的：构造方法、成员变量、成员方法；并访问成员；
 *
 * 1.获取构造方法：
 * 		1).批量的方法：
 * 			public Constructor[] getConstructors()：所有"公有的"构造方法
            public Constructor[] getDeclaredConstructors()：获取所有的构造方法(包括私有、受保护、默认、公有)

 * 		2).获取单个的方法，并调用：
 * 			public Constructor getConstructor(Class... parameterTypes):获取单个的"公有的"构造方法：
 * 			public Constructor getDeclaredConstructor(Class... parameterTypes):获取"某个构造方法"可以是私有的，或受保护、默认、公有；
 *
 * 			调用构造方法：
 * 			Constructor-->newInstance(Object... initargs)
 */
public class Constructors {

	public static void main(String[] args) throws Exception {
		//1.加载Class对象
		Class clazz = Class.forName("fanshe.Student");


		//2.获取所有公有构造方法
		System.out.println("**********************所有公有构造方法*********************************");
		Constructor[] conArray = clazz.getConstructors();
		for(Constructor c : conArray){
			System.out.println(c);
		}


		System.out.println("************所有的构造方法(包括：私有、受保护、默认、公有)***************");
		conArray = clazz.getDeclaredConstructors();
		for(Constructor c : conArray){
			System.out.println(c);
		}

		System.out.println("*****************获取公有、无参的构造方法*******************************");
		Constructor con = clazz.getConstructor(null);
		//1>、因为是无参的构造方法所以类型是一个null,不写也可以：这里需要的是一个参数的类型，切记是类型
		//2>、返回的是描述这个无参构造函数的类对象。

		System.out.println("con = " + con);
		//调用构造方法
		Object obj = con.newInstance();
	//	System.out.println("obj = " + obj);
	//	Student stu = (Student)obj;

		System.out.println("******************获取私有构造方法，并调用*******************************");
		con = clazz.getDeclaredConstructor(char.class);
		System.out.println(con);
		//调用构造方法
		con.setAccessible(true);//暴力访问(忽略掉访问修饰符)
		obj = con.newInstance('男');
	}

}
```

后台输出：

```java
**********************所有公有构造方法*********************************
public fanshe.Student(java.lang.String,int)
public fanshe.Student(char)
public fanshe.Student()
************所有的构造方法(包括：私有、受保护、默认、公有)***************
private fanshe.Student(int)
protected fanshe.Student(boolean)
public fanshe.Student(java.lang.String,int)
public fanshe.Student(char)
public fanshe.Student()
fanshe.Student(java.lang.String)
*****************获取公有、无参的构造方法*******************************
con = public fanshe.Student()
调用了公有、无参构造方法执行了。。。
******************获取私有构造方法，并调用*******************************
public fanshe.Student(char)
姓名：男
```



**调用方法：**

1.获取构造方法：
  1).批量的方法：
public Constructor[] getConstructors()：所有"公有的"构造方法
            public Constructor[] getDeclaredConstructors()：获取所有的构造方法(包括私有、受保护、默认、公有)

  2).获取单个的方法，并调用：
public Constructor getConstructor(Class... parameterTypes):获取单个的"公有的"构造方法：
public Constructor getDeclaredConstructor(Class... parameterTypes):获取"某个构造方法"可以是私有的，或受保护、默认、公有；

  调用构造方法：
Constructor-->newInstance(Object... initargs)

2、 newInstance是 Constructor类的方法（管理构造函数的类）
api的解释为：
newInstance(Object... initargs)
           使用此 Constructor 对象表示的构造方法来创建该构造方法的声明类的新实例，并用指定的初始化参数初始化该实例。
它的返回值是T类型，所以newInstance是创建了一个构造方法的声明类的新实例对象。并为之调用

------

#### 获取成员变量并调用

student类

```java
package fanshe.field;

public class Student {
	public Student(){

	}
	//**********字段*************//
	public String name;
	protected int age;
	char sex;
	private String phoneNum;

	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + ", sex=" + sex
				+ ", phoneNum=" + phoneNum + "]";
	}


}
```

测试类

```java
package fanshe.field;
import java.lang.reflect.Field;
/*
 * 获取成员变量并调用：
 *
 * 1.批量的
 * 		1).Field[] getFields():获取所有的"公有字段"
 * 		2).Field[] getDeclaredFields():获取所有字段，包括：私有、受保护、默认、公有；
 * 2.获取单个的：
 * 		1).public Field getField(String fieldName):获取某个"公有的"字段；
 * 		2).public Field getDeclaredField(String fieldName):获取某个字段(可以是私有的)
 *
 * 	 设置字段的值：
 * 		Field --> public void set(Object obj,Object value):
 * 					参数说明：
 * 					1.obj:要设置的字段所在的对象；
 * 					2.value:要为字段设置的值；
 *
 */
public class Fields {

		public static void main(String[] args) throws Exception {
			//1.获取Class对象
			Class stuClass = Class.forName("fanshe.field.Student");
			//2.获取字段
			System.out.println("************获取所有公有的字段********************");
			Field[] fieldArray = stuClass.getFields();
			for(Field f : fieldArray){
				System.out.println(f);
			}
			System.out.println("************获取所有的字段(包括私有、受保护、默认的)********************");
			fieldArray = stuClass.getDeclaredFields();
			for(Field f : fieldArray){
				System.out.println(f);
			}
			System.out.println("*************获取公有字段**并调用***********************************");
			Field f = stuClass.getField("name");
			System.out.println(f);
			//获取一个对象
			Object obj = stuClass.getConstructor().newInstance();//产生Student对象--》Student stu = new Student();
			//为字段设置值
			f.set(obj, "刘德华");//为Student对象中的name属性赋值--》stu.name = "刘德华"
			//验证
			Student stu = (Student)obj;
			System.out.println("验证姓名：" + stu.name);


			System.out.println("**************获取私有字段****并调用********************************");
			f = stuClass.getDeclaredField("phoneNum");
			System.out.println(f);
			f.setAccessible(true);//暴力反射，解除私有限定
			f.set(obj, "18888889999");
			System.out.println("验证电话：" + stu);

		}
	}
```

后台输出：

```java
************获取所有公有的字段********************
public java.lang.String fanshe.field.Student.name
************获取所有的字段(包括私有、受保护、默认的)********************
public java.lang.String fanshe.field.Student.name
protected int fanshe.field.Student.age
char fanshe.field.Student.sex
private java.lang.String fanshe.field.Student.phoneNum
*************获取公有字段**并调用***********************************
public java.lang.String fanshe.field.Student.name
验证姓名：刘德华
**************获取私有字段****并调用********************************
private java.lang.String fanshe.field.Student.phoneNum
验证电话：Student [name=刘德华, age=0, sex=
```

由此可见
调用字段时：需要传递两个参数：
Object obj = stuClass.getConstructor().newInstance();//产生Student对象--》Student stu = new Student();
//为字段设置值
f.set(obj, "刘德华");//为Student对象中的name属性赋值--》stu.name = "刘德华"
第一个参数：要传入设置的对象，第二个参数：要传入实参

------

#### 获取成员方法并调用

student类

```java
package fanshe.method;

public class Student {
	//**************成员方法***************//
	public void show1(String s){
		System.out.println("调用了：公有的，String参数的show1(): s = " + s);
	}
	protected void show2(){
		System.out.println("调用了：受保护的，无参的show2()");
	}
	void show3(){
		System.out.println("调用了：默认的，无参的show3()");
	}
	private String show4(int age){
		System.out.println("调用了，私有的，并且有返回值的，int参数的show4(): age = " + age);
		return "abcd";
	}
}
```

测试类

```java
package fanshe.method;

import java.lang.reflect.Method;

/*
 * 获取成员方法并调用：
 *
 * 1.批量的：
 * 		public Method[] getMethods():获取所有"公有方法"；（包含了父类的方法也包含Object类）
 * 		public Method[] getDeclaredMethods():获取所有的成员方法，包括私有的(不包括继承的)
 * 2.获取单个的：
 * 		public Method getMethod(String name,Class<?>... parameterTypes):
 * 					参数：
 * 						name : 方法名；
 * 						Class ... : 形参的Class类型对象
 * 		public Method getDeclaredMethod(String name,Class<?>... parameterTypes)
 *
 * 	 调用方法：
 * 		Method --> public Object invoke(Object obj,Object... args):
 * 					参数说明：
 * 					obj : 要调用方法的对象；
 * 					args:调用方式时所传递的实参；
):
 */
public class MethodClass {

	public static void main(String[] args) throws Exception {
		//1.获取Class对象
		Class stuClass = Class.forName("fanshe.method.Student");
		//2.获取所有公有方法
		System.out.println("***************获取所有的”公有“方法*******************");
		stuClass.getMethods();
		Method[] methodArray = stuClass.getMethods();
		for(Method m : methodArray){
			System.out.println(m);
		}
		System.out.println("***************获取所有的方法，包括私有的*******************");
		methodArray = stuClass.getDeclaredMethods();
		for(Method m : methodArray){
			System.out.println(m);
		}
		System.out.println("***************获取公有的show1()方法*******************");
		Method m = stuClass.getMethod("show1", String.class);
		System.out.println(m);
		//实例化一个Student对象
		Object obj = stuClass.getConstructor().newInstance();
		m.invoke(obj, "刘德华");

		System.out.println("***************获取私有的show4()方法******************");
		m = stuClass.getDeclaredMethod("show4", int.class);
		System.out.println(m);
		m.setAccessible(true);//解除私有限定
		Object result = m.invoke(obj, 20);//需要两个参数，一个是要调用的对象（获取有反射），一个是实参
		System.out.println("返回值：" + result);


	}
}
```

控制台输出：

```java
***************获取所有的”公有“方法*******************
public void fanshe.method.Student.show1(java.lang.String)
public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
public final void java.lang.Object.wait() throws java.lang.InterruptedException
public boolean java.lang.Object.equals(java.lang.Object)
public java.lang.String java.lang.Object.toString()
public native int java.lang.Object.hashCode()
public final native java.lang.Class java.lang.Object.getClass()
public final native void java.lang.Object.notify()
public final native void java.lang.Object.notifyAll()
***************获取所有的方法，包括私有的*******************
public void fanshe.method.Student.show1(java.lang.String)
private java.lang.String fanshe.method.Student.show4(int)
protected void fanshe.method.Student.show2()
void fanshe.method.Student.show3()
***************获取公有的show1()方法*******************
public void fanshe.method.Student.show1(java.lang.String)
调用了：公有的，String参数的show1(): s = 刘德华
***************获取私有的show4()方法******************
private java.lang.String fanshe.method.Student.show4(int)
调用了，私有的，并且有返回值的，int参数的show4(): age = 20
返回值：abcd
```

由此可见：
m = stuClass.getDeclaredMethod("show4", int.class);//调用制定方法（所有包括私有的），需要传入两个参数，第一个是调用的方法名称，第二个是方法的形参类型，切记是类型。
 System.out.println(m);
 m.setAccessible(true);//解除私有限定
 Object result = m.invoke(obj, 20);//需要两个参数，一个是要调用的对象（获取有反射），一个是实参
 System.out.println("返回值：" + result);

------

控制台输出：

```java
***************获取所有的”公有“方法*******************
public void fanshe.method.Student.show1(java.lang.String)
public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
public final void java.lang.Object.wait() throws java.lang.InterruptedException
public boolean java.lang.Object.equals(java.lang.Object)
public java.lang.String java.lang.Object.toString()
public native int java.lang.Object.hashCode()
public final native java.lang.Class java.lang.Object.getClass()
public final native void java.lang.Object.notify()
public final native void java.lang.Object.notifyAll()
***************获取所有的方法，包括私有的*******************
public void fanshe.method.Student.show1(java.lang.String)
private java.lang.String fanshe.method.Student.show4(int)
protected void fanshe.method.Student.show2()
void fanshe.method.Student.show3()
***************获取公有的show1()方法*******************
public void fanshe.method.Student.show1(java.lang.String)
调用了：公有的，String参数的show1(): s = 刘德华
***************获取私有的show4()方法******************
private java.lang.String fanshe.method.Student.show4(int)
调用了，私有的，并且有返回值的，int参数的show4(): age = 20
返回值：abcd
```

其实这里的成员方法：在模型中有属性一词，就是那些setter（）方法和getter()方法。还有字段组成，这些内容在内省中详解

------

#### 反射main方法

student类

```java
package fanshe.main;

public class Student {

	public static void main(String[] args) {
		System.out.println("main方法执行了。。。");
	}
}
```

测试类

```java
package fanshe.main;

import java.lang.reflect.Method;

/**
 * 获取Student类的main方法、不要与当前的main方法搞混了
 */
public class Main {

	public static void main(String[] args) {
		try {
			//1、获取Student对象的字节码
			Class clazz = Class.forName("fanshe.main.Student");

			//2、获取main方法
			 Method methodMain = clazz.getMethod("main", String[].class);//第一个参数：方法名称，第二个参数：方法形参的类型，
			//3、调用main方法
			// methodMain.invoke(null, new String[]{"a","b","c"});
			 //第一个参数，对象类型，因为方法是static静态的，所以为null可以，第二个参数是String数组，这里要注意在jdk1.4时是数组，jdk1.5之后是可变参数
			 //这里拆的时候将  new String[]{"a","b","c"} 拆成3个对象。。。所以需要将它强转。
			 methodMain.invoke(null, (Object)new String[]{"a","b","c"});//方式一
			// methodMain.invoke(null, new Object[]{new String[]{"a","b","c"}});//方式二

		} catch (Exception e) {
			e.printStackTrace();
		}


	}
}
```

控制台输出：

main方法执行了。。。

------

#### 反射方法的其他使用--通过反射运行配置文件内容

student类

```java
public class Student {
	public void show(){
		System.out.println("is show()");
	}
}
```

配置文件eg.txt文件(pro.txt)

```java
className = cn.fanshe.Student
methodName = show
```

测试类

```java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.Properties;

/*
 * 我们利用反射和配置文件，可以使：应用程序更新时，对源码无需进行任何修改
 * 我们只需要将新类发送给客户端，并修改配置文件即可
 */
public class Demo {
	public static void main(String[] args) throws Exception {
		//通过反射获取Class对象
		Class stuClass = Class.forName(getValue("className"));//"cn.fanshe.Student"
		//2获取show()方法
		Method m = stuClass.getMethod(getValue("methodName"));//show
		//3.调用show()方法
		m.invoke(stuClass.getConstructor().newInstance());

	}

	//此方法接收一个key，在配置文件中获取相应的value
	public static String getValue(String key) throws IOException{
		Properties pro = new Properties();//获取配置文件的对象
		FileReader in = new FileReader("pro.txt");//获取输入流
		pro.load(in);//将流加载到配置文件对象中
		in.close();
		return pro.getProperty(key);//返回根据key获取的value值
	}
}
```

控制台输出：

is show();

**需求：**

法1：

当我们升级这个系统时，不要Student类，而需要new一个Student2类时，只需要更改pro.txt文件即可

要替换的student2类

```java
public class Student2 {
	public void show2(){
		System.out.println("is show2()");
	}
}
```

配置文件更改为

```java
className = cn.fanshe.Student2
methodName = show2
```

控制台输出：

is show2();

法2：

使用资源定位方法，确认文件路径：

```java
FileReader in = new FileReader(Demo.class.getResource("pro.txt").getPath());
```

接着，还需要在idea的pom文件中确认资源配置，才能够在编译的时候把src下面的txt文件拷贝到target的classes文件夹下，运行时才能找到配置的txt文件：

```javascript
<build>
<resources>
	<resource>

//src/main/java目录下所有xml文件都包含进去， ${basedir}是maven的内置变量， 表示项目根目录。如果需要添加其他文件如.properties 文件，可以添加标签
    <directory>${basedir}/src/main/java</directory>
		<includes>
			<include>	**/*.txt	</include>
		</includes>
	</resource>
</resources>

<plugins>
	<plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-compiler-plugin</artifactId>
		<version>3.7.0</version>
			<configuration>
				<source>1.8</source>
				<target>1.8</target>
			</configuration>
	</plugin>
</plugins>
```



------

#### 反射方法的其他使用--通过反射越过泛型检查

泛型用在编译期，编译完成后擦除，所以可以通过反射越过泛型检查

测试类

```java
import java.lang.reflect.Method;
import java.util.ArrayList;

/*
 * 通过反射越过泛型检查
 *
 * 例如：有一个String泛型的集合，怎样能向这个集合中添加一个Integer类型的值？
 */
public class Demo {
	public static void main(String[] args) throws Exception{
		ArrayList<String> strList = new ArrayList<>();
		strList.add("aaa");
		strList.add("bbb");

	//	strList.add(100);
		//获取ArrayList的Class对象，反向的调用add()方法，添加数据
		Class listClass = strList.getClass(); //得到 strList 对象的字节码 对象
		//获取add()方法
		Method m = listClass.getMethod("add", Object.class);
		//调用add()方法
		m.invoke(strList, 100);

		//遍历集合
		for(Object obj : strList){
			System.out.println(obj);
		}
	}
}
```

控制台输出

aaa

bbb

100
