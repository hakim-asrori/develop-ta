import{_ as l,o as d,c as g,a as e,t as a,n as c,p as _,f as h}from"./index-47b57f38.js";const p={props:{pagination:{type:Object,default:{}}},methods:{onPageChange(n){this.$emit("onPageChange",n)}}},i=n=>(_("data-v-17ee0f65"),n=n(),h(),n),u={class:"d-flex align-items-center justify-content-md-end justify-content-center"},f={class:"me-2 mt-2"},m=i(()=>e("p",{class:"me-2 mt-2"},"of",-1)),w={class:"mt-2"},k=["disabled"],b=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-left-circle"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("polyline",{points:"12 8 8 12 12 16"}),e("line",{x1:"16",y1:"12",x2:"8",y2:"12"})],-1)),x=[b],P=["disabled"],y=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right-circle"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("polyline",{points:"12 16 16 12 12 8"}),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"})],-1)),v=[y];function C(n,o,t,j,B,s){return d(),g("nav",u,[e("p",f,a(t.pagination.from)+" - "+a(t.pagination.to),1),m,e("p",w,a(t.pagination.total),1),e("p",{class:c(["mt-2",t.pagination.currentPage==1?"pointer-block":""])},[e("button",{class:"btn no-border show-block",disabled:t.pagination.currentPage==1,onClick:o[0]||(o[0]=r=>s.onPageChange(t.pagination.currentPage-1))},x,8,k)],2),e("p",{class:c(["mt-2",t.pagination.currentPage==t.pagination.lastPage?"pointer-block":""])},[e("button",{class:"btn show-block no-border",disabled:t.pagination.currentPage==t.pagination.lastPage,onClick:o[1]||(o[1]=r=>s.onPageChange(t.pagination.currentPage+1))},v,8,P)],2)])}const S=l(p,[["render",C],["__scopeId","data-v-17ee0f65"]]);export{S as P};
