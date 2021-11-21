(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"Container_container__nSTrt"}},13:function(e,t,a){e.exports={button:"Button_button__1qqQP"}},15:function(e,t,a){e.exports={loader:"App_loader__1NKtV"}},20:function(e,t,a){},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1JH5L",searchForm:"Searchbar_searchForm__1EUBS",searchFormButton:"Searchbar_searchFormButton__3tUap",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__5SEn9",searchFormInput:"Searchbar_searchFormInput__3KZHU"}},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),s=(a(20),a(11)),l=a(3),i=a(12),u=a.n(i),m=a(0);var b=function(e){var t=e.children;return Object(m.jsx)("div",{className:u.a.container,children:t})},j=a(4),d=a.n(j);function h(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(m.jsx)("header",{className:d.a.searchbar,children:Object(m.jsxs)("form",{className:d.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r.trim().toLowerCase()),o("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},children:[Object(m.jsx)("button",{type:"submit",className:d.a.searchFormButton,children:Object(m.jsx)("span",{className:d.a.searchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:d.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value)}})]})})}var g=a(13),O=a.n(g);var f=function(e){var t=e.handleClickBtn;return Object(m.jsx)("button",{className:O.a.button,onClick:t,type:"button",children:"Load more"})},p=a(9),_=a.n(p),v=document.querySelector("#modal-root");function x(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[]);var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(m.jsx)("div",{className:_.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(m.jsxs)("div",{className:_.a.modal,children:[a,Object(m.jsx)("button",{className:_.a.button,type:"button",onClick:t,children:"X"})]})}),v)}var y=a(6),S=a.n(y);var I=function(e){var t=e.src,a=e.tags,n=e.dataSrc,c=e.onClick;return Object(m.jsx)("li",{className:S.a.imageGalleryItem,onClick:c,children:Object(m.jsx)("img",{src:t,"data-src":n,alt:a,className:S.a.imageGalleryItemImage})})};var F=function(e){var t=e.gallery,a=e.onClickImg;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:S.a.imageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,r=e.tags;return Object(m.jsx)(I,{src:n,dataSrc:c,tags:r,onClick:a},t)}))})})};var k={fetchImages:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23027480-c70d45ac3781d0e477b4a7117","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},w=a(14),C=a.n(w),N=(a(42),a(15)),L=a.n(N);function B(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("idle"),o=Object(l.a)(r,2),i=o[0],u=o[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),g=d[0],O=d[1],p=Object(n.useState)(1),_=Object(l.a)(p,2),v=_[0],y=_[1],S=Object(n.useState)(""),I=Object(l.a)(S,2),w=I[0],N=I[1],B=Object(n.useState)(""),G=Object(l.a)(B,2),U=G[0],E=G[1],R=Object(n.useState)(!1),M=Object(l.a)(R,2),q=M[0],H=M[1],T=Object(n.useState)(null),A=Object(l.a)(T,2),J=A[0],K=A[1];Object(n.useEffect)((function(){""!==g.trim()&&(u("pending"),k.fetchImages(g,v).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));t.length>0?(c((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),u("resolved")):(alert("\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(g," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),u("idle"))})).catch((function(e){K(e),u("rejected")})).finally((function(){v>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[v,g]);var P=function(e){e!==g&&(c([]),y(1),O(e))};return"idle"===i?Object(m.jsx)(b,{children:Object(m.jsx)(h,{onSubmit:P})}):"rejected"===i?Object(m.jsx)("h1",{children:J.message}):"resolved"===i||"pending"===i?Object(m.jsxs)(m.Fragment,{children:[q&&Object(m.jsx)(x,{onClose:function(){H(!q)},children:Object(m.jsx)("img",{src:w,alt:U})}),Object(m.jsxs)(b,{children:[Object(m.jsx)(h,{onSubmit:P}),a.length>0&&Object(m.jsx)(F,{onClickImg:function(e){var t=e.target.dataset.src,a=e.target.alt;N(t),E(a),H(!0)},gallery:a}),"pending"===i?Object(m.jsx)(C.a,{className:L.a.loader,type:"Circles",color:"#00BFFF",height:80,width:80}):Object(m.jsx)(f,{handleClickBtn:function(){y((function(e){return e+1})),u("pending")}})]})]}):void 0}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__19pNp",imageGalleryItem:"ImageGallery_imageGalleryItem__2MMVU",imageGalleryItemImage:"ImageGallery_imageGalleryItemImage__2jAgl"}},9:function(e,t,a){e.exports={overlay:"Modal_overlay__HOa00",modal:"Modal_modal__l3nRr",button:"Modal_button__3shAB"}}},[[43,1,2]]]);
//# sourceMappingURL=main.baf12244.chunk.js.map