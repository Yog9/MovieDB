(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/no-image.ad02fd3c.jpg"},18:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(15),c=a.n(i),r=(a(9),a(2)),l=a(3),m=a(5),s=a(4),u=a(6),v=a(16),d=a.n(v),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault(),a.props.getMovie(a.input.value),a.input.value=""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid container-fluid mt-5 bg-dark"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h3",{className:"text-center text-white font-weight-light"},"Search For any Movie")),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"exampleCheck1",placeholder:"Search Movie....",ref:function(t){return e.input=t}})))))}}]),t}(n.Component),h=a(17),f=a.n(h);var g=function(e){var t;return t=null==e.movie_item.poster_path?f.a:"https://image.tmdb.org/t/p/w500/".concat(e.movie_item.poster_path),console.log("props of movie componet",e.movie_item),console.log("Poster of movie componet",e.movie_item.poster_path),console.log("Title of movie componet",e.movie_item.title),o.a.createElement("div",{className:"col col-lg-4"},o.a.createElement("div",{className:"card text-center mb-4",style:{width:"18rem"}},o.a.createElement("img",{src:t,className:"card-img-top",alt:"movie_image"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title text-center"},e.movie_item.title.length<14?"".concat(e.movie_item.title):"".concat(e.movie_item.title.substring(0,15),"...")))))};var E=function(){return o.a.createElement("div",null,o.a.createElement("p",{className:"text-center lead font-weight-bold text-white"},"Sorry No Movies Found!!!"))},b=function(e){var t;return console.log("container prop",e.movies),console.log("container prop length",e.movies.length),t=0===e.movies.length?o.a.createElement(E,null):e.movies.map(function(e){return o.a.createElement(g,{movie_item:e,key:e.id})}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},t))};var w=function(e){return o.a.createElement("div",null,o.a.createElement("ul",{className:"nav justify-content-start"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link text-white font-weight-bold",href:"#"},"TMDb Movie Search App"))))},N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[],loading:!0},a.getMovie=function(e){d.a.get("https://api.themoviedb.org/3/search/movie?api_key=2afba9f9458a7c12ebe9718f62d54bf5&query=".concat(e,"&include_adult=false")).then(function(e){a.setState({movies:e.data.results,loading:!1}),console.log("state is",a.state.movies)}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null),o.a.createElement("div",{className:"container"},o.a.createElement(p,{getMovie:this.getMovie}),this.state.loading?o.a.createElement("div",{className:"loader"},"Loading"):o.a.createElement(b,{movies:this.state.movies})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.fdb25d79.chunk.js.map