"use strict";(self["webpackChunkclub"]=self["webpackChunkclub"]||[]).push([[443],{7432:function(t,e,l){l.r(e),l.d(e,{default:function(){return U}});var i=l(3396);const u={class:"about"},n=(0,i._)("h1",null,"This is site built with vue for Club Del Cielo",-1),a=(0,i._)("li",null,"open command prompt",-1),r=(0,i._)("li",null,"cd C:\\Users\\thambrick\\club",-1),o=(0,i._)("li",null,"npm run build and then npm run serve ",-1),m=(0,i._)("li",null,"git init",-1),s=(0,i._)("li",null,"git add .",-1),c=(0,i._)("li",null,'git commit -m "first commit123"',-1),d=(0,i._)("li",null,"git branch -M main",-1),b=(0,i._)("li",null,"git remote add origin https://github.com/treyhambrick/club.git",-1),g=(0,i._)("li",null,'if "remote origin already exists" then "git remote rm origin" and run again',-1),p=(0,i._)("li",null,"git push -u origin main",-1),_=(0,i._)("li",null,'git add dist && git commit -m "Initial dist subtree commit"',-1),f=(0,i._)("li",null,"git subtree push --prefix dist origin gh-pages",-1),h=(0,i._)("li",null,"wait 8 minutes the goto: https://treyhambrick.github.io/club/ ",-1),v=(0,i._)("li",null,"before run try: git remote set-url origin https://treyhambrick.github.io/club/",-1);function k(t,e){const l=(0,i.up)("B"),k=(0,i.up)("U");return(0,i.wg)(),(0,i.iD)("div",u,[n,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Execution Steps:")])),_:1})]),a,r,o,(0,i._)("li",null,[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" upload to GitHub: run.bat to execute the commands below")])),_:1})]),m,s,c,d,b,g,p,(0,i._)("li",null,[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Note:")])),_:1}),(0,i.Uk)(" Remove the dist directory from the project’s .gitignore file")]),_,f,h,v])])}var y=l(89);const w={},D=(0,y.Z)(w,[["render",k]]);var U=D},7704:function(t,e,l){l.r(e),l.d(e,{default:function(){return b}});var i=l(3396),u=l(9242),n=l(7139);const a={class:"picker"},r=(0,i._)("h1",null,"Pick your dates ",-1);function o(t,e,l,o,m,s){const c=(0,i.up)("VueDatePicker"),d=(0,i.up)("BR"),b=(0,i.up)("P");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i.Wm)(b,{ref:"p"},{default:(0,i.w5)((()=>[r,(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,u.iM)(((...e)=>t.onSubmit&&t.onSubmit(...e)),["prevent"])),class:"form"},[(0,i.Wm)(c,{modelValue:o.date,"onUpdate:modelValue":e[0]||(e[0]=t=>o.date=t),range:"",format:"MM/dd/yyyy","value-format":"MM-dd-yyyy"},null,8,["modelValue"]),(0,i.Wm)(d),(0,i.Uk)(" Your email: "),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.email=t)},null,512),[[u.nr,o.email]]),(0,i.Wm)(d),(0,i.Wm)(d),(0,i._)("button",{onClick:e[2]||(e[2]=t=>o.sendReservation())}," Submit Reservation Request "),(0,i.Uk)(),(0,i.Wm)(d),(0,i.Wm)(d),(0,i.Uk)(" "+(0,n.zw)(o.status),1)],32)])),_:1},512)])])}var m=l(4870),s={setup(){const t=(0,m.iH)();let e=(0,m.iH)(0);const l=(0,m.iH)(),i=(0,m.iH)(),u=new Date,n=new Date((new Date).setDate(u.getDate()+7));t.value=[u,n];const a=()=>{l.value="",i.value&&(l.value="Submit Reservation from email = "+i.value,e.value++,l.value=l.value+" times= "+e.value)};return{date:t,email:i,startDate:u,endDate:n,sendReservation:a,count:e,status:l}}},c=l(89);const d=(0,c.Z)(s,[["render",o]]);var b=d}}]);
//# sourceMappingURL=about.288082ee.js.map