import{h as d,u as _,o as t,g as a,a as o,F as m,i as p,n as u,j as n,t as r}from"./app-3a1d4704.js";import{o as h}from"./index-8f8e9689.js";const f={class:"links"},k={class:"link-items"},g=["href","title"],y={class:"link-left"},v=["src","alt","onError"],b={class:"link-info",m:"l-2"},B={class:"link-blog",font:"serif black"},E={class:"link-desc"},L=d({__name:"YunLinks",props:{links:{},random:{type:Boolean}},setup(l){const e=l,{data:i}=_(e.links,e.random);return(x,z)=>(t(),a("div",f,[o("ul",k,[(t(!0),a(m,null,p(n(i),(s,c)=>(t(),a("li",{key:c,class:"link-item",style:u(`--primary-color: ${s.color}`)},[o("a",{class:"link-url",p:"x-4 y-2",href:s.url,title:s.name,alt:"portrait",rel:"friend"},[o("div",y,[o("img",{class:"link-avatar",w:"16",h:"16",loading:"lazy",src:s.avatar,alt:s.name,onError:n(h)},null,40,v)]),o("div",b,[o("div",B,r(s.blog),1),o("div",E,r(s.desc),1)])],8,g)],4))),128))])]))}});export{L as _};
