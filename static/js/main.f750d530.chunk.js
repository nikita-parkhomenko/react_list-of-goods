(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(3),s=o.n(a),c=o(1),l=o(4),i=o(5),d=o(7),u=o(6),h=(o(13),o(14),function(t){var e=t.clicked,o=t.text;return r.a.createElement("button",{onClick:e,type:"button"},o)}),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[].concat(f),showButton:!0,showGoodsList:!1},t.showGoodsHandler=function(){t.setState((function(t){return{showButton:!t.showButton,showGoodsList:!t.showGoodsList}}))},t.reverseGoodsHandler=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.sortAlphabeticallyHandler=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLengthHandler=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.resetOrderHandler=function(){t.setState({goods:[].concat(f)})},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this.state,e=t.goods,o=t.showButton,n=t.showGoodsList;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),o&&r.a.createElement(h,{clicked:this.showGoodsHandler,text:"Start"}),r.a.createElement(h,{text:"Reverse",clicked:this.reverseGoodsHandler}),r.a.createElement(h,{clicked:this.sortAlphabeticallyHandler,text:"Sort alphabetically"}),r.a.createElement(h,{clicked:this.sortByLengthHandler,text:"Sort by length"}),r.a.createElement(h,{clicked:this.resetOrderHandler,text:"Reset"}),n&&r.a.createElement("ul",{className:"goods-list"},e.map((function(t){return r.a.createElement("li",{key:t},t)}))))}}]),o}(n.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f750d530.chunk.js.map