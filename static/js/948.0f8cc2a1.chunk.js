"use strict";(self.webpackChunkfinal_project_yourpet_frontend=self.webpackChunkfinal_project_yourpet_frontend||[]).push([[948],{2036:function(n,e,i){i.d(e,{Dx:function(){return w},Fg:function(){return C},II:function(){return Z},Kf:function(){return Y},PS:function(){return y},Yb:function(){return b},Yw:function(){return z},gW:function(){return k},pM:function(){return v},vm:function(){return _},zx:function(){return j}});var r,o,a,t,d,s,c,p,l,u,m,x=i(168),g=i(9202),h=i(5705),f=i(3829),b=g.Z.div(r||(r=(0,x.Z)(["\n  width: 100vw;\n  min-height: calc(100vh - 48px);\n  margin: 0 auto;\n  padding-top: 92px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center top;\n\n  @media screen and (min-device-pixel-ratio: 2),\n  screen and (min-resolution: 192dpi),\n  screen and (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-device-pixel-ratio: 3),\n  screen and (min-resolution: 288dpi),\n  screen and (min-resolution: 3dppx) {\n    background-image: url(",");\n  }\n  @media (min-width: 768px) {\n    padding-top: 92px;\n    padding-bottom: 268px;\n    min-height: calc(100vh - 64px);\n    background-image: url(",");\n\n  @media screen and (min-device-pixel-ratio: 2),\n  screen and (min-resolution: 192dpi),\n  screen and (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (min-device-pixel-ratio: 3),\n  screen and (min-resolution: 288dpi),\n  screen and (min-resolution: 3dppx) {\n    background-image: url(",");\n  }\n}\n  @media (min-width: 1280px) {\n    padding-top: 82px;\n    padding-bottom: 147px;\n    background-image: url(",");\n    @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n\n    @media screen and (min-device-pixel-ratio: 3),\n    screen and (min-resolution: 288dpi),\n    screen and (min-resolution: 3dppx) {\n      background-image: url(",");\n    }\n  }\n\n"])),f.i5,f.hC,f.iU,f.nu,f.Rz,f.Yx,f.v4,f.GM,f.sf),w=g.Z.h2(o||(o=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 40px;\n  margin-top: 0;\n  @media (min-width: 768px) {\n    font-size: 36px;\n    font-weight: 500;\n  }\n"]))),v=(0,g.Z)(h.l0)(a||(a=(0,x.Z)(["\n  position: relative;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 10px;\n  background-color: #fff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n\n\n  @media (min-width: 768px) {\n    width: 608px;\n    padding: 60px 0 40px 0;\n    margin-left: 80px;\n\n  }\n  @media (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 0 60px 0;\n    margin-left: 300px;\n  }\n  > div {\n    position: relative;\n  }\n  :last-child {\n    font-size: 12px;\n  }\n"]))),k=g.Z.span(t||(t=(0,x.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: 15px;\n  top: 13px;\n  fill: ",";\n\n  svg {\n    width: inherit;\n    height: inherit;\n\n  }\n"])),(function(n){return n.error?n.theme.colors.red:n.valid?n.theme.colors.green:n.theme.colors.blue})),Z=(0,g.Z)(h.gN)(d||(d=(0,x.Z)(["\n  width: 250px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 11px 0 12px 14px;\n  background: white;\n  border: 1px solid;\n    border-color: ",";\n  border-radius: 50px;\n  margin-bottom: 16px;\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n  @media (min-width: 768px) {\n    width: 448px;\n    font-size: 18px;\n    padding: 14px 0 13px 32px;\n  }\n  @media (min-width: 1280px) {\n    width: 458px;\n  }\n"])),(function(n){return n.error?n.theme.colors.red:n.valid?n.theme.colors.green:n.theme.colors.blue})),j=g.Z.button(s||(s=(0,x.Z)(["\n  width: 100%;\n  padding: 11px 0 12px 14px;\n  text-align: center;\n  color: #fff;\n  background: #54adff;\n  border: 1px solid #54adff;\n  border-radius: 50px;\n  margin: 24px 0 40px 0;\n  transform: scale(1);\n  transition: transform 0.5s;\n  cursor: pointer;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    transition: transform 0.5s;\n  }\n  :hover:before {\n    left: 100%;\n  }\n  :before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      120deg,\n      transparent,\n      rgba(255, 255, 255, 0.6),\n      transparent\n    );\n    transition: all 650ms;\n  }\n  :disabled {\n    opacity: 0.5;\n    cursor: auto;\n    transform: none;\n    transition: none;\n  }\n  :disabled:before {\n    transform: none;\n    transition: none;\n  }\n  @media (min-width: 768px) {\n    width: 458px;\n    font-size: 20px;\n  }\n"]))),y=g.Z.div(c||(c=(0,x.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0;\n  left: 15px;\n  color: #f43f5e;\n  font-size: 14px;\n  @media (min-width: 768px) {\n    left: 33px;\n  }\n"]))),z=g.Z.div(p||(p=(0,x.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  bottom: 0;\n  left: 15px;\n  color: #00c3ad;\n  font-size: 14px;\n  @media (min-width: 768px) {\n    left: 33px;\n  }\n"]))),_=g.Z.span(l||(l=(0,x.Z)(["\n  display: inline-block;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: 15px;\n  top: 13px;\n  color: #54adff;\n  cursor: pointer;\n  svg {\n    width: inherit;\n    height: inherit;\n  }\n  //&.isValid{\n  //  display: none;\n  //}\n"]))),C=g.Z.a(u||(u=(0,x.Z)(["\n  color: #54adff;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: blue;\n  }\n"]))),Y=g.Z.a(m||(m=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  color: #54adff;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: blue;\n  }\n"])))},9677:function(n,e,i){i.d(e,{$:function(){return x}});var r,o,a=i(1413),t=i(4925),d=i(168),s=i(9202),c=i(3829),p=s.Z.section(r||(r=(0,d.Z)(["\n    max-width: 100%;\n    background-color: ",";\n\n    ","\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.$bg&&" \n  max-height: calc(100vh - 48px);\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: 100%;\n  background-image: url(".concat(c.i5,");\n\n  background-color: ").concat((function(n){return n.theme.colors.background}),";\n\n  @media screen and (min-device-pixel-ratio: 2),\n    screen and (min-resolution: 192dpi),\n    screen and (min-resolution: 2dppx) {\n    background-image: url(").concat(c.hC,");\n  }\n\n  @media screen and (min-device-pixel-ratio: 3),\n    screen and (min-resolution: 288dpi),\n    screen and (min-resolution: 3dppx) {\n    background-image: url(").concat(c.iU,");\n  }\n\n  @media screen and (min-width: 768px) {\n    height: calc(100vh - 68px);\n    background-image: url(").concat(c.nu,");\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(").concat(c.Rz,");\n    }\n\n    @media screen and (min-device-pixel-ratio: 3),\n      screen and (min-resolution: 288dpi),\n      screen and (min-resolution: 3dppx) {\n      background-image: url(").concat(c.Yx,");\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-height: calc(100vh - 72px);\n    background-image: url(").concat(c.v4,");\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(").concat(c.GM,");\n    }\n\n    @media screen and (min-device-pixel-ratio: 3),\n      screen and (min-resolution: 288dpi),\n      screen and (min-resolution: 3dppx) {\n      background-image: url(").concat(c.sf,");\n    }\n  }\n    ")})),l=s.Z.div(o||(o=(0,d.Z)(["\n  margin: 0 auto;\n  width: 320px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 786px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]))),u=i(184),m=["children"],x=function(n){var e=n.children,i=(0,t.Z)(n,m);return(0,u.jsx)(p,(0,a.Z)((0,a.Z)({},i),{},{children:(0,u.jsx)(l,{children:e})}))}},3829:function(n,e,i){i.d(e,{v4:function(){return r},GM:function(){return o},sf:function(){return a},i5:function(){return c},hC:function(){return p},iU:function(){return l},nu:function(){return t},Rz:function(){return d},Yx:function(){return s}});var r=i(3293),o=i.p+"static/media/desc-bg-page_2x.11c697bb19eb260df408.png",a=i.p+"static/media/desc-bg-page_3x.9b312e0dd69c328ee327.png",t=i(4383),d=i.p+"static/media/tablet-bg-page_2x.67b668a7489f35b0a3da.png",s=i.p+"static/media/tablet-bg-page_3x.e854c1010152b10326f7.png",c=i(4315),p=i.p+"static/media/mobile-bg-page_2x.3718878183569fc70412.png",l=i.p+"static/media/mobile-bg-page_3x.65f7cead316da53a12e3.png"},8714:function(n,e,i){i.r(e),i.d(e,{default:function(){return g}});var r=i(9439),o=i(2791),a=i(6727),t=i(9434),d=i(5705),s=i(5473),c=i(6768),p=i(2036),l=i(184),u=(0,a.Ry)().shape({email:(0,a.Z_)().required("Email is required").email("Enter a valid Email").trim(),password:(0,a.Z_)().required("Password is required").min(6,"Too short min 6 characters").max(16,"Too long max 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password should be min 6 characters, 1 uppercase, 1 lowercase, 1 number").trim()}),m=function(){var n=(0,t.I0)(),e=(0,o.useState)(!1),i=(0,r.Z)(e,2),a=i[0],m=i[1],x=function(){m(!a)},g=function(){document.querySelector("input[type=email]").value=""};return(0,l.jsx)(p.Yb,{children:(0,l.jsx)(d.J9,{validationSchema:u,initialValues:{email:"",password:""},onSubmit:function(e,i){var r=e.email,o=e.password,a=i.resetForm;n((0,c.zB)({email:r,password:o})),a()},children:function(n){var e=n.errors,i=n.touched;return(0,l.jsxs)(p.pM,{children:[(0,l.jsx)(p.Dx,{children:"Login"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.II,{name:"email",type:"email",autoComplete:"off",placeholder:"Email",error:e.email&&i.email&&"false",valid:!e.email&&i.email?"true":void 0}),i.email&&(e.email?(0,l.jsx)(p.PS,{children:e.email}):(0,l.jsx)(p.Yw,{children:"Email is correct"})),(0,l.jsxs)(p.vm,{children:[" ",i.email&&(e.email?(0,l.jsx)("svg",{style:{fill:"#F43F5E"},onClick:g,children:(0,l.jsx)("use",{href:s.Z+"#icon-cross-small"})}):(0,l.jsx)("svg",{style:{fill:"#00C3AD"},children:(0,l.jsx)("use",{href:s.Z+"#icon-check"})}))]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.II,{name:"password",type:a?"text":"password",placeholder:"Password",error:e.password&&i.password&&"false",valid:!e.password&&i.password?"true":void 0}),(0,l.jsx)(p.gW,{onClick:x,error:e.password&&i.password&&"false",valid:!e.password&&i.password&&"!null",children:a?(0,l.jsx)("svg",{children:(0,l.jsx)("use",{href:s.Z+"#icon-eye-open"})}):(0,l.jsx)("svg",{children:(0,l.jsx)("use",{href:s.Z+"#icon-eye-closed"})})}),i.password&&(e.password?(0,l.jsx)(p.PS,{children:e.password}):(0,l.jsx)(p.Yw,{children:"Password is secure"}))]}),(0,l.jsx)(p.zx,{type:"submit",children:"Login"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Don't have an account?"})," ",(0,l.jsx)(p.Fg,{to:"/register",children:"Register"})]})]})}})})},x=i(9677),g=function(){return(0,l.jsx)(x.$,{children:(0,l.jsx)(m,{})})}},3293:function(n,e,i){n.exports=i.p+"static/media/desc-bg-page_1x.cf58327b31c66737de00.png"},4315:function(n,e,i){n.exports=i.p+"static/media/mobile-bg-page_1x.0cd02ce1d43a46754e63.png"},4383:function(n,e,i){n.exports=i.p+"static/media/tablet-bg-page_1x.b7eb05ffad718448eedb.png"}}]);
//# sourceMappingURL=948.0f8cc2a1.chunk.js.map