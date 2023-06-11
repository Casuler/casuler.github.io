import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-bc08d2c7.js";import{_ as y,p as D,c as F,w as e,o as C,e as d,a as s,b as l,d as a,r as n,f as A}from"./app-3a1d4704.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-3440db68.js";import"./YunCard.vue_vue_type_style_index_0_lang-ff2fc80a.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-edd51e6a.js";const H=JSON.parse('{"title":"Android","description":"","frontmatter":{"title":"Android","author":"四宮かぐや","date":"2021-06-12T00:00:00.000Z","updated":"2021-06-12T00:00:00.000Z","categories":["学习笔记"],"tags":["笔记","后端"]},"headers":[{"level":2,"title":"Service","slug":"service","link":"#service","children":[{"level":3,"title":"Service概述","slug":"service概述","link":"#service概述","children":[]},{"level":3,"title":"Service在清单文件中的声明","slug":"service在清单文件中的声明","link":"#service在清单文件中的声明","children":[]},{"level":3,"title":"Service启动服务","slug":"service启动服务","link":"#service启动服务","children":[]}]}],"relativePath":"pages/posts/note/Android.md","path":"/home/runner/work/gatsby0108.github.io/gatsby0108.github.io/pages/posts/note/Android.md","lastUpdated":1686469895000}'),r=JSON.parse('{"title":"Android","description":"","frontmatter":{"title":"Android","author":"四宮かぐや","date":"2021-06-12T00:00:00.000Z","updated":"2021-06-12T00:00:00.000Z","categories":["学习笔记"],"tags":["笔记","后端"]},"headers":[{"level":2,"title":"Service","slug":"service","link":"#service","children":[{"level":3,"title":"Service概述","slug":"service概述","link":"#service概述","children":[]},{"level":3,"title":"Service在清单文件中的声明","slug":"service在清单文件中的声明","link":"#service在清单文件中的声明","children":[]},{"level":3,"title":"Service启动服务","slug":"service启动服务","link":"#service启动服务","children":[]}]}],"relativePath":"pages/posts/note/Android.md","path":"/home/runner/work/gatsby0108.github.io/gatsby0108.github.io/pages/posts/note/Android.md","lastUpdated":1686469895000}'),u={name:"pages/posts/note/Android.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){D("pageData",r)}},f=s("p",null,"Android笔记总结",-1),v={id:"android四大组件",tabindex:"-1"},m=s("hr",null,null,-1),h={class:"table-of-contents"},E={id:"service",tabindex:"-1"},_=s("hr",null,null,-1),S={id:"service概述",tabindex:"-1"},g=s("p",null,"​ Service是一个一种可以在后台执行长时间运行操作而没有用户界面的应用组件。服务可由其他应用组件启动（如 Activity），服务一旦被启动将在后台一直运行，即使启动服务的组件（Activity）已被销毁也不受影响。此外，组件可以绑定到服务，与之进行交互，甚至是执行进程间通信（IPC）。例如，服务可以处理网络事务、播放音乐，执行文件I/O或与内容提供程序交互，而所有这一切均可在后台进行，Service基本上分为两种形式:",-1),b={id:"启动状态",tabindex:"-1"},k=s("p",null,"​ 当应用组件（如 Activity）通过调用 startService() 启动服务时，服务即处于“启动“状态。一旦启动，服务即可在后台无限期运行。除非手动调用才能停止服务，已启动的服务通常是执行单已操作，而不会返回结果给调用方",-1),B={id:"绑定状态",tabindex:"-1"},$=s("p",null,"​ 当应用组件通过调用 bindService() 绑定到服务时，服务即处于“绑定”状态",-1),I={id:"service在清单文件中的声明",tabindex:"-1"},N=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}},"service android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"enabled"),s("span",{style:{color:"#89DDFF"}},"=["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"false"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"exported"),s("span",{style:{color:"#89DDFF"}},"=["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"false"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"icon"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"drawable resource"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"isolatedProcess"),s("span",{style:{color:"#89DDFF"}},"=["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"false"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"label"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"string resource"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"name"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"string"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"permission"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"string"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        android"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},":"),s("span",{style:{color:"#A6ACCD"}},"process"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"string"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#A6ACCD"}},"service"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),O=s("ul",null,[s("li",null,[s("p",null,"android:exported：代表是否能被其他应用隐式调用，其默认值是由service中有无intent-filter决定的，如果有 intent-filter，默认值为 true，否则为 false。为false的情况下，即使有 intent-filter 匹配，也无法打开，既无法被其他应用隐式调用")]),s("li",null,[s("p",null,"android:name：对应Service类名")]),s("li",null,[s("p",null,"android:permission：是权限声明")]),s("li",null,[s("p",null,'android:process：是否需要在单独的进程中运行，当设置为 android:process="remote" 时，代表Service在单独的进程中运行'),s("p",null,'​ ==注意":"很重要，它的意思是指要在当前进程名称前面加上当前的包名，所以"remote"和":remote"不是同一个意思，前者的进程名称为:remote，而后者的进程名称为:App-packageName:remote==')]),s("li",null,[s("p",null,"android:isolatedProcess：设置true意味着，服务会在一个特殊的进程下运行，这个进程与系统其他进程分开且没有自己的权限，与其通信的唯一途径是通过服务的API(bind and start)")]),s("li",null,[s("p",null,"android:enabled：是否可以被系统实例化，默认为 true，因为父标签也有 enable 属性，所以必须两个都为默认值 true 的情况下服务才会被激活，否则不会激活")])],-1),P={id:"service启动服务",tabindex:"-1"},x=s("p",null,"​ 首先要创建服务，必须创建 Service 的子类（或使用它的一个现有子类如 IntentService）。在实现中，我们需要重写一些回调方法，以处理服务生命周期的某些关键过程",-1),T=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"package"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"com"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"Amdusias"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"ipctest"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"service"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"android"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"app"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"Service"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"android"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"content"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"Intent"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"android"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"os"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"IBinder"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F78C6C"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"android"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"support"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"annotation"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#C792EA"}},"Nullable"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}}," *Created by Amdusias")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}}," *Time 2021/10/20")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}}," *Description:service simple demo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"SimpleService"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Service"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"    /**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *绑定服务时才会调用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *必须要实现的方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@param"),s("span",{style:{color:"#676E95","font-style":"italic"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"intent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Nullable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"IBinder"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"onBind"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"Intent"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"intent"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"null;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"    /**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *首次创建服务时，系统将调用此方法来执行一次性设置程序（在调用 onStartCommand() 或 onBind() 之前）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *如果服务已在运行，则不会调用此方法。该方法只被调用一次")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"onCreate"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onCreate invoke"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        super"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"onCreate"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"    /**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *每次通过startService()方法启动Service时都会被回调")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@param"),s("span",{style:{color:"#676E95","font-style":"italic"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"intent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@param"),s("span",{style:{color:"#676E95","font-style":"italic"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"flags")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@param"),s("span",{style:{color:"#676E95","font-style":"italic"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"startId")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *"),s("span",{style:{color:"#F78C6C","font-style":"italic"}},"@return")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"onStartCommand"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"Intent"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"intent"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"flags"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"startId"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onStartCommand invoke"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," super"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"onStartCommand"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"intent"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}},"flags"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}},"startId"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"    /**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     *服务销毁时的回调")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"     */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Override")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"onDestroy"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onDestroy invoke"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        super"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"onDestroy"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("p",null,"​ 从上面的代码可以看出，SimpleService 继承了Service类，并重写了 onBind 方法，该方法是必须重写的，但由于此时服务是“启动状态”，则该方法无需实现，返回null即可，只有在“绑定状态”的情况下才需要实现该方法并返回一个 IBinder 的实现类，接着重写了 onCreate、onStartCommand、onDestroy三个主要的生命周期方法",-1),V=s("ul",null,[s("li",null,[s("p",null,[s("strong",null,"onBind()")]),s("p",null,"​ 当另一个组件想通过调用bindService()与服务绑定（例如执行 RPC）时，系统将调用此方法。在此方法的实现中，必须返回一个IBinder 接口的实现类，供客户端用来与服务进行通信。无论是“启动状态”还是“绑定状态”，此方法必须重写，但在“启动状态”下直接返回null")]),s("li",null,[s("p",null,[s("strong",null,"onCreate()")]),s("p",null,"​ 首次创建服务时，系统将调用此方法来执行一次性设置程序（在调用 onStartCommand() 或 onBind() 之前）。如果服务已在运行，则不会调用此方法，该方法只调用一次")]),s("li",null,[s("p",null,[s("strong",null,"onStartCommand()")]),s("p",null,"​ 当另一个组件（如 Activity）通过调用 startService() 请求启动服务时，系统将调用此方法。一旦执行此方法，服务即会启动并可在后台无限期运行。如果自己实现此方法，则需要在服务工作完成后，通过调用 stopSelf() 或 stopService() 来停止服务。（在“绑定状态”下，无需实现此方法）")]),s("li",null,[s("p",null,[s("strong",null,"onDestroy()")]),s("p",null,"​ 当服务不再使用且将被销毁时，系统将会调用此方法。服务应实现此方法来清理所有资源，如线程、注册的侦听器、接收器等，这是服务接收的最后一个调用"),s("hr")])],-1);function Z(o,j,J,U,c,L){const t=A,i=p;return C(),F(i,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[f,d(" more "),s("h1",v,[l("Android四大组件 "),a(t,{class:"header-anchor",href:"#android四大组件","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),m,s("nav",h,[s("ul",null,[s("li",null,[a(t,{href:"#service"},{default:e(()=>[l("Service")]),_:1}),s("ul",null,[s("li",null,[a(t,{href:"#service概述"},{default:e(()=>[l("Service概述")]),_:1})]),s("li",null,[a(t,{href:"#service在清单文件中的声明"},{default:e(()=>[l("Service在清单文件中的声明")]),_:1})]),s("li",null,[a(t,{href:"#service启动服务"},{default:e(()=>[l("Service启动服务")]),_:1})])])])])]),s("h2",E,[l("Service "),a(t,{class:"header-anchor",href:"#service","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),_,s("h3",S,[l("Service概述 "),a(t,{class:"header-anchor",href:"#service概述","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),g,s("h4",b,[l("启动状态 "),a(t,{class:"header-anchor",href:"#启动状态","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),k,s("h4",B,[l("绑定状态 "),a(t,{class:"header-anchor",href:"#绑定状态","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),$,s("h3",I,[l("Service在清单文件中的声明 "),a(t,{class:"header-anchor",href:"#service在清单文件中的声明","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),N,O,s("h3",P,[l("Service启动服务 "),a(t,{class:"header-anchor",href:"#service启动服务","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),x,T,w,V]),"main-header":e(()=>[n(o.$slots,"main-header")]),"main-header-after":e(()=>[n(o.$slots,"main-header-after")]),"main-nav":e(()=>[n(o.$slots,"main-nav")]),"main-content":e(()=>[n(o.$slots,"main-content")]),"main-content-after":e(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(o.$slots,"main-nav-after")]),comment:e(()=>[n(o.$slots,"comment")]),footer:e(()=>[n(o.$slots,"footer")]),aside:e(()=>[n(o.$slots,"aside")]),"aside-custom":e(()=>[n(o.$slots,"aside-custom")]),default:e(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const K=y(u,[["render",Z]]);export{H as __pageData,K as default};