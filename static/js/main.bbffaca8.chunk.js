(this["webpackJsonpreact-hide-on-scroll-example"]=this["webpackJsonpreact-hide-on-scroll-example"]||[]).push([[0],{1:function(e,t,n){e.exports={div:"styles_div__3asOk",star:"styles_star__1Lj1l",link:"styles_link__dxACx",sticky:"styles_sticky__lNOKJ",hide1to3:"styles_hide1to3__1F9r9",show1to3:"styles_show1to3__3tkUV",hideHeight:"styles_hideHeight__2AuBC",hide1to3Offset:"styles_hide1to3Offset__3w7ip",show1to3Offset:"styles_show1to3Offset__3qEg8",hideScrollDown:"styles_hideScrollDown__3_XvY",hideScrollUp:"styles_hideScrollUp__1JSc5",hideOnDiv:"styles_hideOnDiv__1fLDI",hideOnHeight:"styles_hideOnHeight__2_hiB"}},12:function(e,t,n){"use strict";n.r(t);n(5);var i=n(0),r=n.n(i),o=n(3),s=n.n(o),a=n(2),l=n.n(a),c=n(1),d=n.n(c);function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m=function(e){var t=null===e||void 0===e?void 0:e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n},v=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={show:!1},t.listenToScroll=function(){var e=t.props,n=e.startDivID,i=e.endDivID,r=e.startHeight,o=e.endHeight,s=e.height,a=e.inverse,l=e.startDivOffset,c=e.endDivOffset,d=null,h=null;s||(d=document.querySelector("#"+n),h=document.querySelector("#"+i));var v=s?r||0:m(d),u=s?o||0:m(h);s||(l?v+=l:c&&(u+=c));var p=document.body.scrollTop||document.documentElement.scrollTop;p>=v&&p<=u?t.setState({show:a}):t.setState({show:!a})},t}h(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.listenToScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenToScroll)},n.render=function(){return r.a.createElement(r.a.Fragment,null,this.state.show&&this.props.children)},t}(r.a.Component),u=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={show:!1},t.listenToScroll=function(){var e=t.props,n=e.atHeight,i=e.inverse,r=e.divID,o=e.offset,s=e.height,a=null;n||(a=document.querySelector("#"+r));var l=s?s||0:m(a);!s&&o&&(l+=o),(document.body.scrollTop||document.documentElement.scrollTop)>=l?t.setState({show:i}):t.setState({show:!i})},t}h(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.listenToScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenToScroll)},n.render=function(){return r.a.createElement(r.a.Fragment,null,this.state.show&&this.props.children)},t}(r.a.Component),p=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={show:!1,prevYOffset:window.pageYOffset},t.listenToScroll=function(){var e=t.state.prevYOffset,n=t.props.variant,i=window.pageYOffset;e>i?t.setState({show:"down"===n,prevYOffset:i}):t.setState({show:"down"!==n,prevYOffset:i})},t}h(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.listenToScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.listenToScroll)},n.render=function(){return r.a.createElement(r.a.Fragment,null,this.state.show&&this.props.children)},t}(r.a.Component);p.defaultProps={variant:"down"};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"first",className:d.a.div,style:{backgroundColor:"green"}},"first div",r.a.createElement("a",{className:d.a.link,href:"https://github.com/Pradeep-selva/react-hide-on-scroll/tree/master/example",target:"_blank",rel:"noreferrer noopener"},"View Code"),r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=Pradeep-selva&repo=react-hide-on-scroll&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"200",height:"50",title:"GitHub",className:d.a.star})),r.a.createElement("div",{className:d.a.div,style:{backgroundColor:"red"}},"second div"),r.a.createElement("div",{id:"third",className:d.a.div,style:{backgroundColor:"blue"}},"third div"),r.a.createElement("div",{className:d.a.div,style:{backgroundColor:"orange"}},"fourth div"),r.a.createElement(p,{variant:"down"},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideScrollDown)},"Hidden on scrolling down")),r.a.createElement(p,{variant:"up"},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideScrollUp)},"Hidden on scrolling up")),r.a.createElement(u,{divID:"third"},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideOnDiv)},"Hidden from third div")),r.a.createElement(u,{inverse:!0,divID:"third"},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideOnDiv)},"Shown from third div")),r.a.createElement(u,{height:1200},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideOnHeight)},"Hidden from 1200px height")),r.a.createElement(u,{inverse:!0,height:1200},r.a.createElement("div",{className:l()(d.a.sticky,d.a.hideOnHeight)},"Shown from 1200px height")),r.a.createElement(v,{div:!0,startDivID:"first",endDivID:"third"},r.a.createElement("div",{className:l()(d.a.hide1to3,d.a.sticky)},"hidden from div 1 to 3")),r.a.createElement(v,{div:!0,inverse:!0,startDivID:"first",endDivID:"third"},r.a.createElement("div",{className:l()(d.a.show1to3,d.a.sticky)},"visible from div 1 to 3")),r.a.createElement(v,{div:!0,startDivOffset:950,startDivID:"first",endDivID:"third"},r.a.createElement("div",{className:l()(d.a.hide1to3Offset,d.a.sticky)},"hidden from div 1 to 3 with 950px start offset")),r.a.createElement(v,{height:!0,startHeight:900,endHeight:1900},r.a.createElement("div",{className:l()(d.a.hideHeight,d.a.sticky)},"hidden from 900px to 1900px")),r.a.createElement(v,{height:!0,inverse:!0,startHeight:900,endHeight:1900},r.a.createElement("div",{className:l()(d.a.hideHeight,d.a.sticky)},"visible from 900px to 1900px")))};s.a.render(r.a.createElement(f,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(12)},5:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.bbffaca8.chunk.js.map