import{r as c,R as a}from"./index-2yJIXLcc.js";import{P as l}from"./index-CBoMLUjc.js";function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function g(e,o){if(e==null)return{};var t=u(e,o),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function u(e,o){if(e==null)return{};var t={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(o.indexOf(n)>=0)&&(t[n]=e[n]);return t}var p=c.forwardRef(function(e,o){var t=e.color,r=t===void 0?"currentColor":t,n=e.size,i=n===void 0?24:n,f=g(e,["color","size"]);return a.createElement("svg",s({ref:o,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),a.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),a.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),a.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});p.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};p.displayName="AlertTriangle";export{p as A};
