(this["webpackJsonpfilms-de-la-creme"]=this["webpackJsonpfilms-de-la-creme"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},17:function(e,a,t){},19:function(e,a,t){e.exports=t.p+"media/food-and-restaurant.aa9501df.png"},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),i=(t(8),t(1)),o=t(2),s=t(4),m=t(3),u=t(6),p=t.n(u),d=t(9),v=(t(17),t(10)),h=t.n(v),f=(t(18),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,movie:[],bg:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var a,t,n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1",a="https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154",e.next=4,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1");case 4:return t=e.sent,e.next=7,fetch(a);case 7:return n=e.sent,e.next=10,t.json();case 10:return r=e.sent,e.next=13,n.json();case 13:l=e.sent,this.setState({movie:r.results,loading:!1}),this.setState({bg:l.images.base_url+l.images.backdrop_sizes[2]});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Slideshow"},r.a.createElement(h.a,{infinite:!0,dots:!0,autoPlay:4e3,animationSpeed:2e3},this.state.movie.map((function(a,t,n){return r.a.createElement("div",{className:"now-playing-details"},r.a.createElement("div",{className:"details"},r.a.createElement("h2",null,"Latest"),r.a.createElement("h1",{className:"title"}," ",a.title," ",r.a.createElement("span",{className:"date"}," (",a.release_date,") ")," "),r.a.createElement("h2",null,a.vote_average,"/10    ",r.a.createElement("span",null,a.vote_count," reviews ")),r.a.createElement("p",null,a.overview)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.state.bg+a.poster_path,alt:""})))}))))}}]),t}(r.a.Component)),E=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,"HOME"),r.a.createElement("li",null,"MOVIES"),r.a.createElement("li",null,"TV SHOWS"),r.a.createElement("li",{id:"logo"},r.a.createElement("img",{src:t(19),alt:""})),r.a.createElement("li",null,"SEARCH"),r.a.createElement("li",null,"PROFILE"),r.a.createElement("li",{id:"last"},"LOG OUT"))),r.a.createElement(f,null))}}]),n}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.89c23010.chunk.js.map