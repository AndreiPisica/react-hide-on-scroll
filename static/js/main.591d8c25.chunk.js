(this["webpackJsonpreact-hide-on-scroll-example"]=this["webpackJsonpreact-hide-on-scroll-example"]||[]).push([[0],{1:function(e,t,i){e.exports={div:"styles_div__3asOk",sticky:"styles_sticky__lNOKJ",hide1to3:"styles_hide1to3__1F9r9",show1to3:"styles_show1to3__3tkUV",hideHeight:"styles_hideHeight__2AuBC",hide1to3Offset:"styles_hide1to3Offset__3w7ip",show1to3Offset:"styles_show1to3Offset__3qEg8",hideOnDiv:"styles_hideOnDiv__1fLDI",hideOnHeight:"styles_hideOnHeight__2_hiB"}},12:function(e,t,i){"use strict";i.r(t);i(5);var n=i(0),o=i.n(n),r=i(3),s=i.n(r),a=i(2),l=i.n(a),d=i(1),c=i.n(d);function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m=function(e){var t=null===e||void 0===e?void 0:e.getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop;return t.top+i},v=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={show:!1},t.listenToScroll=function(){var e=t.props,i=e.startDivID,n=e.endDivID,o=e.startHeight,r=e.endHeight,s=e.height,a=e.inverse,l=e.startDivOffset,d=e.endDivOffset,c=null,h=null;s||(c=document.querySelector("#"+i),h=document.querySelector("#"+n));var v=s?o||0:m(c),u=s?r||0:m(h);s||(l?v+=l:d&&(u+=d));var f=document.body.scrollTop||document.documentElement.scrollTop;f>=v&&f<=u?t.setState({show:a}):t.setState({show:!a})},t}h(t,e);var i=t.prototype;return i.componentDidMount=function(){window.addEventListener("scroll",this.listenToScroll)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenToScroll)},i.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.show&&this.props.children)},t}(o.a.Component),u=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={show:!1},t.listenToScroll=function(){var e=t.props,i=e.atHeight,n=e.inverse,o=e.divID,r=e.offset,s=e.height,a=null;i||(a=document.querySelector("#"+o));var l=s?s||0:m(a);!s&&r&&(l+=r),(document.body.scrollTop||document.documentElement.scrollTop)>=l?t.setState({show:n}):t.setState({show:!n})},t}h(t,e);var i=t.prototype;return i.componentDidMount=function(){window.addEventListener("scroll",this.listenToScroll)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenToScroll)},i.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.show&&this.props.children)},t}(o.a.Component),f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"first",className:c.a.div,style:{backgroundColor:"green"}},"first div"),o.a.createElement("div",{className:c.a.div,style:{backgroundColor:"red"}},"second div"),o.a.createElement("div",{id:"third",className:c.a.div,style:{backgroundColor:"blue"}},"third div"),o.a.createElement("div",{className:c.a.div,style:{backgroundColor:"orange"}},"fourth div"),o.a.createElement(u,{divID:"third"},o.a.createElement("div",{className:l()(c.a.sticky,c.a.hideOnDiv)},"Hidden from third div")),o.a.createElement(u,{inverse:!0,divID:"third"},o.a.createElement("div",{className:l()(c.a.sticky,c.a.hideOnDiv)},"Shown from third div")),o.a.createElement(u,{height:1200},o.a.createElement("div",{className:l()(c.a.sticky,c.a.hideOnHeight)},"Hidden from 1200px height")),o.a.createElement(u,{inverse:!0,height:1200},o.a.createElement("div",{className:l()(c.a.sticky,c.a.hideOnHeight)},"Shown from 1200px height")),o.a.createElement(v,{div:!0,startDivID:"first",endDivID:"third"},o.a.createElement("div",{className:l()(c.a.hide1to3,c.a.sticky)},"hidden from div 1 to 3")),o.a.createElement(v,{div:!0,inverse:!0,startDivID:"first",endDivID:"third"},o.a.createElement("div",{className:l()(c.a.show1to3,c.a.sticky)},"visible from div 1 to 3")),o.a.createElement(v,{div:!0,startDivOffset:950,startDivID:"first",endDivID:"third"},o.a.createElement("div",{className:l()(c.a.hide1to3Offset,c.a.sticky)},"hidden from div 1 to 3 with 950px start offset")),o.a.createElement(v,{height:!0,startHeight:900,endHeight:1900},o.a.createElement("div",{className:l()(c.a.hideHeight,c.a.sticky)},"hidden from 900px to 1900px")),o.a.createElement(v,{height:!0,inverse:!0,startHeight:900,endHeight:1900},o.a.createElement("div",{className:l()(c.a.hideHeight,c.a.sticky)},"visible from 900px to 1900px")))};s.a.render(o.a.createElement(f,null),document.getElementById("root"))},4:function(e,t,i){e.exports=i(12)},5:function(e,t,i){}},[[4,1,2]]]);
//# sourceMappingURL=main.591d8c25.chunk.js.map