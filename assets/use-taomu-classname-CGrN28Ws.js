import{R as u}from"./index-CZMpeKRu.js";import{e as i,T as s}from"./mini-scrollbar-CZ8eNCm3.js";function l(r,...n){return u.useMemo(()=>Object.assign(i(r),...n),[r,n])}function a(r){var n,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(n=0;n<o;n++)r[n]&&(e=a(r[n]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function f(){for(var r,n,e=0,t="",o=arguments.length;e<o;e++)(r=arguments[e])&&(n=a(r))&&(t&&(t+=" "),t+=n);return t}function p(r,...n){return u.useMemo(()=>f(`${s}-${r}`,n),n)}export{l as a,f as c,p as u};
