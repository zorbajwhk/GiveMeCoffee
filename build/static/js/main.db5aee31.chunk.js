(this.webpackJsonpGiveMeCoffee=this.webpackJsonpGiveMeCoffee||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=a(2),c=a(3),l=a(1),u=a(5),h=a(4),p=(a(13),a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Business"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),r.a.createElement("h2",null,this.props.business.name),r.a.createElement("div",{className:"Business-information"},r.a.createElement("div",{className:"Business-address"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.business.googleURL},r.a.createElement("p",null,this.props.business.address),r.a.createElement("p",null,this.props.business.city),r.a.createElement("p",null,"".concat(this.props.business.zipCode)))),r.a.createElement("div",{className:"Business-reviews"},r.a.createElement("h3",null,this.props.business.category.toUpperCase()),r.a.createElement("h3",{className:"rating"},"".concat(this.props.business.rating," \u2605")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.business.yelpURL},"".concat(this.props.business.reviewCount," \u53e3\u30b3\u30df")))))}}]),a}(r.a.Component)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return r.a.createElement(p,{business:e,key:e.id})})))}}]),a}(r.a.Component),d=(a(16),{yelpAPI:"2bzaz9MBzj9iHOU0U46YLDzIeqAVLoU65WsAO8Uzknpy_fcWZgl-l2kkrrWzv9YKbZwcZ7Q_BywEIxvJe8gEmCfUGM4am2KAvqyBB0lrmQAoBPXYq6V_Ejg9W2s2YHYx","x-rapidapi-key":"0327f17517msh335ffa17706cb43p19564cjsnab183a31d83a","x-rapidapi-host":"google-translate20.p.rapidapi.com"}),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n.handleSortByChange=n.handleSortByChange.bind(Object(l.a)(n)),n.handleLocationTranslation=n.handleLocationTranslation.bind(Object(l.a)(n)),n.triggerSearch=n.triggerSearch.bind(Object(l.a)(n)),n.sortByOptions={"\u304a\u3059\u3059\u3081\u9806":"best_match","\u8a55\u4fa1\u9806":"rating","\u53e3\u30b3\u30df\u9806":"review_count"},n}return Object(c.a)(a,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleLocationTranslation",value:function(e){var t=this;fetch("https://google-translate20.p.rapidapi.com/translate?text=".concat(e,"&tl=en&sl=ja"),{method:"GET",headers:{"x-rapidapi-key":d["x-rapidapi-key"],"x-rapidapi-host":d["x-rapidapi-host"]}}).then((function(e){return e.json()})).then((function(e){var a=e.data.translation;console.log(a),t.setState({location:a}),t.handleSearch()}))}},{key:"triggerSearch",value:function(e){var t=this.state.location;/^[a-zA-Z]+$/.test(t)?(this.handleSearch(),e.preventDefault()):(this.handleLocationTranslation(t),e.preventDefault())}},{key:"handleSearch",value:function(){this.props.searchYelp(this.state.location,this.state.sortBy)}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var a=e.sortByOptions[t];return r.a.createElement("li",{className:e.getSortByClass(a),key:a,onClick:e.handleSortByChange.bind(e,a)},t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"SearchBar-sort-options"},r.a.createElement("ul",null,this.renderSortByOptions())),r.a.createElement("div",{className:"SearchBar-fields"},r.a.createElement("input",{placeholder:"\u3069\u306e\u8fba\u306e\u304a\u5e97\u3092\u63a2\u3057\u305f\u3044\u3067\u3059\u304b\uff1f",onChange:this.handleLocationChange,onKe:!0})),r.a.createElement("div",{className:"SearchBar-submit"},r.a.createElement("button",{onClick:this.triggerSearch},"\u30ec\u30c3\u30c4\u30b4\u30fc!")))}}]),a}(r.a.Component),v=d.yelpAPI,f={search:function(e,t){return fetch("https://small-art-ab11.zjw-cors-anywhere.workers.dev/?https://api.yelp.com/v3/businesses/search?term=coffee&location=".concat(e,"&sort_by=").concat(t,"&limit=40"),{headers:{Authorization:"Bearer ".concat(v)}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count,googleURL:"https://www.google.com/maps/search/?api=1&query=".concat(e.name,"+").concat(e.location.address1,"%20").concat(e.location.address2),yelpURL:e.url}}))}))}},g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"searchYelp",value:function(e,t){var a=this;f.search(e,t).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"GiveME",r.a.createElement("span",{role:"img","aria-label":"\u30b3\u30fc\u30d2\u30fc"},"\u2615\ufe0f")),r.a.createElement("h6",null,"Zorba Jobs Wong | PI11A124 | A08")),r.a.createElement(b,{searchYelp:this.searchYelp}),r.a.createElement(m,{businesses:this.state.businesses}),r.a.createElement("div",{className:"footer"},r.a.createElement("small",null,"GiveME",r.a.createElement("span",{role:"img","aria-label":"\u30b3\u30fc\u30d2\u30fc"},"\u2615\ufe0f")," v1.1.0"),r.a.createElement("small",null,"Copyright \xa9 ",r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://zorbajobswong.com"},"Zorba Jobs Wong"),", All Rights Reserved.")))}}]),a}(r.a.Component);i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}],[[8,1,2]]]);
//# sourceMappingURL=main.db5aee31.chunk.js.map