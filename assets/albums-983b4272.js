import{h as c,o as s,c as i,w as u,a as l,j as n,t as p,f as h,g as _,F as v,i as y,k as $,C as k,W as A,a9 as L,aa as Y,T as C,l as w,d as r,a8 as B}from"./app-3a1d4704.js";import{o as P}from"./index-8f8e9689.js";import{_ as F}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-edd51e6a.js";const x=["title"],E=["src","alt","on-error"],I=c({__name:"YunAlbum",props:{album:{}},setup(m){return(e,t)=>{const a=h;return s(),i(a,{class:"yun-album-list-item",to:e.album.url},{default:u(()=>[l("figure",{title:e.album.desc},[l("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":n(P)},null,40,E),l("figcaption",null," 「"+p(e.album.caption)+"」 ",1)],8,x)]),_:1},8,["to"])}}}),N={class:"yun-album-list"},S=c({__name:"YunAlbumList",props:{albums:{}},setup(m){return(e,t)=>{const a=I;return s(),_("div",N,[(s(!0),_(v,null,y(e.albums,o=>(s(),i(a,{key:o.url,album:o},null,8,["album"]))),128))])}}});const T={text:"center",class:"yun-text-light",p:"2"},H=c({__name:"albums",setup(m){const{t:e}=$(),t=k(),a=A(t);L([Y({"@type":"CollectionPage"})]);const o=C(()=>t.value.albums||[]);return(V,W)=>{const b=F,d=S,f=w("router-view"),g=B;return s(),i(g,null,{"main-header":u(()=>[r(b,{title:n(a)||n(e)("title.album"),icon:n(t).icon||"i-ri-gallery-line",color:n(t).color},null,8,["title","icon","color"])]),"main-content":u(()=>[l("div",T,p(n(e)("counter.albums",o.value.length)),1),r(d,{albums:o.value},null,8,["albums"]),r(f)]),_:1})}}});export{H as default};
