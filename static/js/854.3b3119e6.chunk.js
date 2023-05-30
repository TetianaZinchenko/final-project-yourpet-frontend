"use strict";(self.webpackChunkfinal_project_yourpet_frontend=self.webpackChunkfinal_project_yourpet_frontend||[]).push([[854],{2036:function(n,e,r){r.d(e,{Dx:function(){return b},Fg:function(){return S},II:function(){return k},Kf:function(){return _},PS:function(){return P},Yb:function(){return v},Yw:function(){return z},gW:function(){return Z},pM:function(){return j},vm:function(){return I},zx:function(){return y}});var i,o,s,t,a,d,c,l,p,u,m,x=r(168),h=r(9202),f=r(1087),g=r(5705),w=r(3829),v=h.Z.div(i||(i=(0,x.Z)(["\n  width: 100vw;\n  min-height: calc(100vh - 48px);\n  margin: 0 auto;\n  padding-top: 92px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center top;\n\n  @media screen and (min-device-pixel-ratio: 2),\n  screen and (min-resolution: 192dpi),\n  screen and (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-device-pixel-ratio: 3),\n  screen and (min-resolution: 288dpi),\n  screen and (min-resolution: 3dppx) {\n    background-image: url(",");\n  }\n  @media (min-width: 768px) {\n    padding-top: 92px;\n    padding-bottom: 268px;\n    min-height: calc(100vh - 64px);\n    background-image: url(",");\n\n  @media screen and (min-device-pixel-ratio: 2),\n  screen and (min-resolution: 192dpi),\n  screen and (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (min-device-pixel-ratio: 3),\n  screen and (min-resolution: 288dpi),\n  screen and (min-resolution: 3dppx) {\n    background-image: url(",");\n  }\n}\n  @media (min-width: 1280px) {\n    padding-top: 82px;\n    padding-bottom: 147px;\n    background-image: url(",");\n    @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n\n    @media screen and (min-device-pixel-ratio: 3),\n    screen and (min-resolution: 288dpi),\n    screen and (min-resolution: 3dppx) {\n      background-image: url(",");\n    }\n  }\n\n"])),w.i5,w.hC,w.iU,w.nu,w.Rz,w.Yx,w.v4,w.GM,w.sf),b=h.Z.h2(o||(o=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 40px;\n  margin-top: 0;\n  @media (min-width: 768px) {\n    font-size: 36px;\n    font-weight: 500;\n  }\n"]))),j=(0,h.Z)(g.l0)(s||(s=(0,x.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 10px;\n  background-color: #fff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n\n\n  @media (min-width: 768px) {\n    width: 608px;\n    padding: 60px 0 40px 0;\n    margin-left: 80px;\n\n  }\n  @media (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 0 60px 0;\n    margin-left: 300px;\n  }\n  > div {\n    position: relative;\n  }\n  :last-child {\n    font-size: 12px;\n  }\n"]))),Z=h.Z.span(t||(t=(0,x.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: 15px;\n  top: 13px;\n  fill:white;\n  stroke: ",";\n\n  svg {\n    width: inherit;\n    height: inherit;\n\n  }\n"])),(function(n){return n.error?n.theme.colors.red:n.valid?n.theme.colors.green:n.theme.colors.blue})),k=(0,h.Z)(g.gN)(a||(a=(0,x.Z)(["\n  width: 250px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: white;\n  border: 1px solid;\n    border-color: ",";\n  border-radius: 50px;\n  margin-bottom: 16px;\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n  @media (min-width: 768px) {\n    width: 448px;\n    font-size: 18px;\n    padding: 14px 0 13px 32px;\n  }\n  @media (min-width: 1280px) {\n    width: 458px;\n  }\n"])),(function(n){return n.error?n.theme.colors.red:n.valid?n.theme.colors.green:n.theme.colors.blue})),y=h.Z.button(d||(d=(0,x.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: #fff;\n  background: #54adff;\n  border: 1px solid #54adff;\n  border-radius: 50px;\n  margin: 24px 0 40px 0;\n  transform: scale(1);\n  transition: transform 0.5s;\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(255, 255, 255, 0.6),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n  :disabled:before {\n    transform: none;\n    transition: none;\n  }\n  @media (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"]))),P=h.Z.div(c||(c=(0,x.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0;\n  left: 15px;\n  color: #f43f5e;\n  font-size: 14px;\n  @media (min-width: 768px) {\n    left: 33px;\n  }\n"]))),z=h.Z.div(l||(l=(0,x.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0;\n  left: 15px;\n  color: #00c3ad;\n  font-size: 14px;\n  @media (min-width: 768px) {\n    left: 33px;\n  }\n"]))),I=h.Z.span(p||(p=(0,x.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: 15px;\n  top: 13px;\n  color: #54adff;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n\n"]))),S=(0,h.Z)(f.OL)(u||(u=(0,x.Z)(["\n  color: #54adff;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: blue;\n  }\n"]))),_=h.Z.a(m||(m=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  color: #54adff;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: blue;\n  }\n"])))},4854:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var i=r(5861),o=r(9439),s=r(4687),t=r.n(s),a=r(2791),d=r(7689),c=r(9434),l=r(5705),p=r(6727),u=r(3728),m=r(6768),x=r(2036),h=r(5473),f=r(184),g=(0,p.Ry)().shape({password:(0,p.Z_)().min(6,"Too short min 6 characters").max(16,"Too long max 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,"Password should be min 6 characters, 1 uppercase, 1 lowercase, 1 number").required("Password is required").trim(),confirmPassword:(0,p.Z_)().required("Please confirm your password").oneOf([(0,p.iH)("password")],"Passwords does not match"),email:(0,p.Z_)().email("Enter a valid Email").required("Email is required").trim()}),w=function(){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),r=e[0],s=e[1],p=(0,a.useState)(!1),w=(0,o.Z)(p,2),v=w[0],b=w[1],j=(0,c.I0)(),Z=(0,d.s0)(),k=function(){var n=(0,i.Z)(t().mark((function n(e,r){var i,o,s;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.email,o=e.password,s=r.resetForm,n.prev=2,n.next=5,j((0,m.y1)({email:i,password:o}));case 5:return n.next=7,j((0,m.zB)({email:i,password:o}));case 7:s(),Z("/user"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.error("Error logging out:",n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e,r){return n.apply(this,arguments)}}(),y=function(){s(!r)},P=function(){b(!v)},z=function(){document.querySelector("input[type=email]").value=""};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x.Yb,{children:(0,f.jsx)(l.J9,{validationSchema:g,initialValues:{email:"",password:"",confirmPassword:""},onSubmit:k,children:function(n){var e=n.errors,i=n.touched;return(0,f.jsxs)(x.pM,{children:[(0,f.jsx)(x.Dx,{children:"Register"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.II,{name:"email",type:"email",placeholder:"Email",error:e.email&&i.email&&"false",valid:!e.email&&i.email?"true":void 0}),i.email&&(e.email?(0,f.jsx)(x.PS,{children:e.email}):(0,f.jsx)(x.Yw,{children:"Email is correct"})),(0,f.jsxs)(x.vm,{children:[" ",i.email&&(e.email?(0,f.jsx)("svg",{style:{fill:"white",stroke:"#F43F5E"},onClick:z,children:(0,f.jsx)("use",{href:h.Z+"#icon-cross-small"})}):(0,f.jsx)("svg",{style:{fill:"white",stroke:"#00C3AD"},children:(0,f.jsx)("use",{href:h.Z+"#icon-check"})}))]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.II,{name:"password",type:r?"text":"password",placeholder:"Password",error:e.password&&i.password&&"false",valid:!e.password&&i.password?"true":void 0}),(0,f.jsx)(x.gW,{onClick:y,error:e.password&&i.password&&"false",valid:!e.password&&i.password&&"!null",children:r?(0,f.jsx)("svg",{children:(0,f.jsx)("use",{href:h.Z+"#icon-eye-open"})}):(0,f.jsx)("svg",{children:(0,f.jsx)("use",{href:h.Z+"#icon-eye-closed"})})}),i.password&&(e.password?(0,f.jsx)(x.PS,{children:e.password}):(0,f.jsx)(x.Yw,{children:"Password is secure"}))]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.II,{name:"confirmPassword",type:v?"text":"password",placeholder:"Confirm Password",error:e.confirmPassword&&i.confirmPassword&&"false",valid:!e.confirmPassword&&i.confirmPassword?"true":void 0}),(0,f.jsx)(x.gW,{onClick:P,error:e.confirmPassword&&i.confirmPassword&&"false",valid:!e.confirmPassword&&i.confirmPassword&&"!null",children:r?(0,f.jsx)("svg",{children:(0,f.jsx)("use",{href:h.Z+"#icon-eye-open"})}):(0,f.jsx)("svg",{children:(0,f.jsx)("use",{href:h.Z+"#icon-eye-closed"})})}),i.confirmPassword&&(e.confirmPassword?(0,f.jsx)(x.PS,{children:e.confirmPassword}):(0,f.jsx)(x.Yw,{children:"Password is matched"}))]}),(0,f.jsx)(x.zx,{type:"submit",children:"Registration"}),(0,f.jsx)("div",{children:(0,f.jsxs)(x.Kf,{href:"https://google",children:[" ",(0,f.jsx)(u.JM8,{style:{width:"2em",height:"2em"}})," Register with a Google account"]})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Already have an account?"})," ",(0,f.jsx)(x.Fg,{to:"/login",children:"Login"})]})]})}})})})},v=r(9677),b=function(){return(0,f.jsx)(v.$,{children:(0,f.jsx)(w,{})})}}}]);
//# sourceMappingURL=854.3b3119e6.chunk.js.map