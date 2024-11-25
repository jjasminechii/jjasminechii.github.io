exports.id=913,exports.ids=[913],exports.modules={9445:e=>{e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",image:"Home_image__SZ168",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},233:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(7518),o=i.n(n),r=i(5834);let a=n.keyframes`
  0% {
    background-position: 0 50%;
  }

  20% {
    background-position: 35% 80%;
  }

  40% {
    background-position: 100% 50%;
  }

  60% {
    background-position: 70% 0;
  }

  80% {
    background-position: 70% 0;
  }

  100% {
    background-position: 0 50%;
  }
`,s=o().button`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  display: inline-block;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding: 18px 50px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: ease-in-out 0.15s;
  outline: 0;
  color: white;

  ${({variant:e})=>"animated"===e&&n.css`
      animation: ${a} 2s linear infinite;
    `}
  ${(0,r.compose)(r.padding,r.color,r.layout)}
  
  ${(0,r.variant)({variants:{animated:{background:"linear-gradient(200deg, rgb(255, 95, 109),rgb(255, 195, 113))"},primary:{color:"white",backgroundColor:"#0e0e0e","&:hover":{color:"white",backgroundColor:"black",transform:"scale(1.04)"}},secondary:{color:"black",backgroundColor:"#f5f6fa","&:hover":{color:"white",backgroundColor:"black",transform:"scale(1.04)"}}}})};
`;s.defaultProps={variant:"primary"};let l=s},4496:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(7518),o=i.n(n),r=i(5834),a=i(3354);let s=o()(a.Z)`
  background-color: white;
  padding: 30px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.3s ease-in-out 0s;
  justify-content: start;

  ${({selected:e})=>e&&n.css`
      box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
    `}

  :hover {
    box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
  }

  ${(0,r.compose)(r.layout,r.space)}
`,l=s},7712:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${(0,r.compose)(r.position,r.alignContent,r.justifyContent,r.justifyItems,r.grid,r.layout,r.flexDirection,r.padding,r.borders,r.margin,r.textAlign,r.alignItems,r.color,r.display)};
`,s=a},3354:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var n=i(6689),o=i.n(n),r=i(7518),a=i.n(r),s=i(5834);let l=a().div`
  display: grid;
  align-items: center;
  justify-content: flex-end;

  grid-template-columns:
    ${({children:e})=>e&&r.css`repeat(${o().Children.toArray(e).length}, auto);`}
    ${(0,s.compose)(s.gridGap,s.grid,s.space,s.layout,s.flexbox,s.borders)};
`;l.defaultProps={};let c=l},3992:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().img`
  ${(0,r.compose)(r.flexbox,r.layout)}
`,s=a},3817:(e,t,i)=>{"use strict";i.d(t,{Z:()=>components_Layout});var n=i(997),o=i(6689),r=i.n(o),a=i(968),s=i.n(a),l=i(7712),c=i(7518),d=i.n(c),p=i(3354),m=i(279),g=i(3979),h=i(7735),x=i(5434);let u=d().footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`,f=d().div`
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`,j=[{url:"https://github.com/jjasminechii",icon:h.pZu,alt:"Image of Github logo"},{url:"mailto:jachi@uw.edu",icon:x.h6V,alt:"Image of Email logo"},{url:"https://linkedin.com/in/jjasminechii",icon:h.n7M,alt:"Image of Linkedin logo"}],components_Footer=()=>(0,n.jsxs)(u,{children:[n.jsx(l.Z,{paddingY:"25px",children:(0,n.jsxs)(p.Z,{gridGap:"30px",children:[n.jsx(m.Z,{href:"/",children:"Home"}),n.jsx(m.Z,{href:"/about",children:"About"}),n.jsx(m.Z,{href:"mailto:jachi@uw.edu",children:"Contact"})]})}),n.jsx(f,{children:j.map(({url:e,icon:t,alt:i})=>n.jsx(m.Z,{target:"_blank",opacity:.7,href:e,children:n.jsx(t,{size:22,"aria-label":i,role:"img"})},e))}),(0,n.jsxs)(g.Z,{margin:0,fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.7)",children:["\xa9 Jasmine Chi 2024 → ",new Date().getFullYear()]})]});var b=i(1163);let y=o.memo(({size:e="1em",fill:t,...i})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 16",width:e,height:e,role:"img",style:{display:"block"},...i,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 2C0 1.37868 0.50368 0.875 1.125 0.875H16.875C17.4963 0.875 18 1.37868 18 2C18 2.62132 17.4963 3.125 16.875 3.125H1.125C0.50368 3.125 0 2.62132 0 2ZM0 8C0 7.37868 0.50368 6.875 1.125 6.875H16.875C17.4963 6.875 18 7.37868 18 8C18 8.62132 17.4963 9.125 16.875 9.125H1.125C0.50368 9.125 0 8.62132 0 8ZM1.125 12.875C0.50368 12.875 0 13.3787 0 14C0 14.6213 0.50368 15.125 1.125 15.125H16.875C17.4963 15.125 18 14.6213 18 14C18 13.3787 17.4963 12.875 16.875 12.875H1.125Z"})})),w=o.memo(({size:e="1em",fill:t,...i})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",fill:"currentColor",role:"img",width:e,height:e,...i,children:n.jsx("path",{d:"M7.22876 5.81455C6.83824 5.42403 6.20507 5.42403 5.81455 5.81455C5.42402 6.20507 5.42402 6.83824 5.81455 7.22876L9.58578 11L5.81455 14.7712C5.42402 15.1618 5.42402 15.7949 5.81455 16.1854C6.20507 16.576 6.83824 16.576 7.22876 16.1854L11 12.4142L14.7712 16.1854C15.1618 16.576 15.7949 16.576 16.1854 16.1854C16.576 15.7949 16.576 15.1618 16.1854 14.7712L12.4142 11L16.1854 7.22876C16.576 6.83824 16.576 6.20507 16.1854 5.81455C15.7949 5.42403 15.1618 5.42403 14.7712 5.81455L11 9.58579L7.22876 5.81455Z"})})),v={"/":{left:"6px",width:"61px"},"/about":{left:"81px",width:"65px"},"/blog":{left:"157px",width:"55px"}},Z=d().a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-weight: 500;
  transition: opacity 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
  }
`,_=d()(l.Z)`
  cursor: pointer;
`,Links=()=>(0,n.jsxs)(n.Fragment,{children:[n.jsx(Z,{href:"/",children:"Home"}),n.jsx(Z,{href:"/about",children:"About"}),n.jsx(Z,{href:"/blog",children:"Blog"})]}),components_Nav=({isOpen:e,onOpen:t,onClose:i})=>{let o=(0,b.useRouter)(),r=v["/"];if("/"!==o.asPath){for(let e of Object.keys(v).slice(1))if(o.asPath.startsWith(e)){r=v[e];break}}return(0,n.jsxs)(p.Z,{as:"nav",px:["2rem","2rem","2rem","0"],gridTemplateColumns:["1fr","1fr","1fr 1fr 1fr"],alignContent:"center",justifyContent:["center","center","space-between"],margin:"3rem 0",children:[n.jsx(l.Z,{display:["none","none","flex"],children:n.jsx(Z,{href:"/",children:"Jasmine Chi"})}),n.jsx(_,{display:["flex","none","none"],children:e?n.jsx(w,{size:"2rem",style:{margin:"-0.3rem"},onClick:e=>"click"===e.type&&i()}):n.jsx(y,{size:"1.6rem",onClick:e=>"click"===e.type&&t()})}),e&&n.jsx(p.Z,{gridTemplateColumns:"1fr",style:{fontSize:"2rem"},py:"3rem",children:n.jsx(Links,{})}),n.jsx(l.Z,{alignContent:"center",display:["none","flex","flex"],children:(0,n.jsxs)(p.Z,{width:"fit-content",gridGap:"2rem",alignItems:"center",justifyItems:"center",gridTemplateColumns:"repeat(3, auto)",style:{borderRadius:"25px",background:"rgba(0, 0, 0, 0.04)",padding:"15px",position:"relative"},children:[n.jsx("div",{style:{background:"white",position:"absolute",borderRadius:"25px",height:"85%",left:"6px",width:"60px",...r}}),n.jsx(Links,{})]})}),n.jsx(l.Z,{alignContent:"flex-end",display:["none","none","flex"],children:n.jsx(Z,{href:"mailto:jachi@uw.edu",children:"Contact"})})]})};var C=i(4298),k=i.n(C),L=i(9445),H=i.n(L);let components_Layout=({title:e="Jasmine Chi",children:t})=>{let[i,o]=r().useState(!1);return(0,n.jsxs)("div",{className:H().container,children:[(0,n.jsxs)(s(),{children:[n.jsx("title",{children:e}),n.jsx("link",{rel:"icon",href:"/favicon.ico"}),n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"author",content:"Jasmine Chi"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.jsx("meta",{property:"og:title",content:"Jasmine Chi"}),n.jsx("meta",{property:"og:description",content:"I'm a Full Stack developer with experience in DevOps, Backend, Frontend and mobile development."}),n.jsx("meta",{property:"og:type",content:"website"}),n.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),n.jsx("meta",{property:"og:image",content:"https://jjasminechii.github.io/img/preview.webp"}),(0,n.jsxs)(n.Fragment,{children:[n.jsx(k(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-RZP6RWZ32F"}),n.jsx(k(),{id:"gtm-script",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', 'G-RZP6RWZ32F');`}})]})]}),n.jsx(components_Nav,{isOpen:i,onOpen:()=>o(!0),onClose:()=>o(!1)}),(0,n.jsxs)(l.Z,{justifyContent:"space-between",alignContent:"space-between",children:[!i&&n.jsx("main",{className:H().main,children:t}),n.jsx(components_Footer,{})]})]})}},279:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(7518),o=i.n(n),r=i(5834);let a=(0,r.system)({textTransform:!0,textDecoration:!0}),s=o().a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  padding: 0;

  ${(0,r.compose)(r.opacity,r.color,r.fontWeight,r.fontSize,a,r.background,r.layout)}

  ${({isSelected:e})=>e&&n.css`
      border-radius: 25px;
      padding: 10px 20px;
      background: black;
      color: white;
      opacity: 0.9;
    `}

  :hover {
    opacity: 1;
  }
`,l=s},946:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-gap: 0.75rem;

  ${(0,r.compose)(r.grid,r.layout,r.padding,r.margin)}
`,s=a},7788:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.d(t,{Z:()=>g});var o=i(997),r=i(9961),a=i(6689),s=i(7518),l=i.n(s),c=i(3979),d=e([r]);r=(d.then?(await d)():d)[0];let p=l().ul`
  padding-left: 2rem;
`,m=l().li`
  margin: 0.5rem 0;
  font-size: medium;
  margin: 0.75rem 0;
  color: rgba(0, 0, 0, 0.7);
  white-space: pre-wrap;
  line-height: 160%;
  letter-spacing: 0.02em;
`,g=(0,a.memo)(({components:e,...t})=>o.jsx(r.MDXRemote,{...t,components:{p:c.Z,ul:p,li:m,...e}}));n()}catch(e){n(e)}})},2598:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(7518),o=i.n(n);let r=o().hr`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`,a=r},2829:(e,t,i)=>{"use strict";var n=i(7518),o=i.n(n),r=i(5834);o().small`
  background: rgb(252, 116, 76);
  color: white;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 0.375rem;

  ${r.color}
`},3979:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().p`
  font-size: 1.125rem;
  margin: 0.75rem 0;
  color: rgba(0, 0, 0, 0.7);
  white-space: pre-wrap;
  line-height: 160%;
  letter-spacing: 0.02em;

  ${(0,r.compose)(r.color,r.textAlign,r.margin,r.fontSize,r.fontWeight,r.display,r.typography,r.layout)}
`,s=a},5875:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().h1`
  margin: 10px 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  ${(0,r.compose)(r.fontSize,r.fontWeight,r.color,r.textAlign,r.margin)}
`,s=a},4655:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(7518),o=i.n(n),r=i(5834);let a=o().a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: inherit;
  border-bottom: none;
  margin: 0;
  padding: 0;

  ${(0,r.compose)(r.layout)}
`,s=a},5556:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.d(t,{Ar:()=>a.Z,Dx:()=>c.Z,Ee:()=>g.Z,Ji:()=>x.Z,Jx:()=>h.Z,W2:()=>d.Z,Z0:()=>u.Z,Zb:()=>m.Z,aV:()=>p.Z,rU:()=>s.Z,rj:()=>r.Z,xv:()=>l.Z,zx:()=>o.Z});var o=i(233),r=i(3354),a=i(3817),s=i(279),l=i(3979),c=i(5875),d=i(7712);i(2829);var p=i(946),m=i(4496),g=i(3992),h=i(4655),x=i(7788),u=i(2598),f=e([x]);x=(f.then?(await f)():f)[0],n()}catch(e){n(e)}})},5913:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997);i(6689);var r=i(6197),a=i(9752),s=i(5556);i(6764),i(9477),i(6385),i(8923),i(7158),i(2996),i(5338),i(6502);var l=e([r,a,s]);[r,a,s]=l.then?(await l)():l;let __WEBPACK_DEFAULT_EXPORT__=({Component:e,pageProps:t})=>(0,o.jsxs)(o.Fragment,{children:[o.jsx(a.Analytics,{}),o.jsx(s.Ar,{children:o.jsx(r.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:o.jsx(e,{...t})})})]});n()}catch(e){n(e)}})},6764:()=>{}};