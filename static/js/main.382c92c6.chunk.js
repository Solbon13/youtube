(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{41:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(14),r=i.n(s),a=i(5),o=i.n(a),l=i(15),d=i(3),u=i(16),j=i.n(u).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:5,key:"AIzaSyCOKi-SR9f4rC6J5a0HmHmBJWzVWvus8Z4"}}),h=i(0),b=function(e){var t=c.a.useState(""),i=Object(d.a)(t,2),n=i[0],s=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{style:{textAlign:"center"},children:Object(h.jsx)("img",{style:{width:"200px",height:"100px",justifyContent:"center"},src:"https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png",alt:"youtube logo"})}),Object(h.jsx)("div",{children:Object(h.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.handleFormSubmit(n)},className:"ui form",children:Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"video-search",style:{height:"50px",fontSize:"20px"},children:"\u0418\u0449\u0435\u043c \u0432\u0438\u0434\u0435\u043e \u0441 YouTube"}),Object(h.jsx)("input",{onChange:function(e){s(e.target.value)},name:"video-search",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..",style:{height:"50px",fontSize:"20px"}})]})})})]})},p=function(e){var t=e.video;if(!t)return Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{fontSize:"25px"},children:"\u043f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 API youtube"})});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return console.log(typeof t),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("iframe",{src:i,allowFullScreen:!0,title:"Video player"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:t.snippet.title}),Object(h.jsx)("p",{children:t.snippet.description})]})]})},m=function(e){var t=e.video,i=e.handleVideoSelect;return Object(h.jsxs)("div",{onClick:function(){return i(t)},className:" video-item item",children:[Object(h.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.description}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("div",{className:"header ",children:t.snippet.title})})]})},x=function(e){var t=e.videos,i=e.handleVideoSelect,n=t.map((function(e){return Object(h.jsx)(m,{video:e,handleVideoSelect:i},e.id.videoId)}));return Object(h.jsx)("div",{children:n})};var v=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),i=t[0],n=t[1],s=c.a.useState(null),r=Object(d.a)(s,2),a=r[0],u=r[1],m=function(){var e=Object(l.a)(o.a.mark((function e(t){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/search",{params:{q:t}});case 2:i=e.sent,n(i.data.items),console.log("this is resp",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"ui container",style:{marginTop:"1em"},children:[Object(h.jsx)(b,{handleFormSubmit:m}),Object(h.jsx)("div",{className:"ui grid",children:Object(h.jsxs)("div",{className:"ui row",children:[Object(h.jsx)("div",{className:"eleven wide column",children:Object(h.jsx)(p,{video:a})}),Object(h.jsx)("div",{className:"five wide column",children:Object(h.jsx)(x,{handleVideoSelect:function(e){u(e)},videos:i})})]})})]})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.382c92c6.chunk.js.map