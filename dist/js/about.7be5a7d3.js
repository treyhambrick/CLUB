(self["webpackChunkclub"]=self["webpackChunkclub"]||[]).push([[443],{6260:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return D}});var i=l(3396);const u={class:"about"},n=(0,i._)("h1",null,"This is site built with vue for Club Del Cielo",-1),a=(0,i._)("li",null,"open command prompt",-1),r=(0,i._)("li",null,"cd C:\\Users\\thambrick\\club",-1),o=(0,i._)("li",null,"npm run build and then npm run serve ",-1),s=(0,i._)("li",null,"git init",-1),m=(0,i._)("li",null,"git add .",-1),c=(0,i._)("li",null,'git commit -m "first commit123"',-1),d=(0,i._)("li",null,"git branch -M main",-1),v=(0,i._)("li",null,"git remote rm origin",-1),f=(0,i._)("li",null,"git remote add origin https://github.com/treyhambrick/club.git",-1),g=(0,i._)("li",null,"On a Mac: git remote add origin git@github.com:treyhambrick/club.git",-1),p=(0,i._)("li",null,"git push -u origin main",-1),b=(0,i._)("li",null,'git add dist && git commit -m "Initial dist subtree commit"',-1),h=(0,i._)("li",null,"git subtree push --prefix dist origin gh-pages",-1),_=(0,i._)("li",null,"wait 7 minutes the goto: https://treyhambrick.github.io/club/ (refresh page to see changes). deployed from a Mac Mini ",-1);function y(e,t){const l=(0,i.up)("B"),y=(0,i.up)("U");return(0,i.wg)(),(0,i.iD)("div",u,[n,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Execution Steps:")])),_:1})]),a,r,o,(0,i._)("li",null,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" upload to GitHub: run.bat to execute the commands below")])),_:1})]),s,m,c,d,v,f,g,p,(0,i._)("li",null,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Note:")])),_:1}),(0,i.Uk)(" Remove the dist directory from the project’s .gitignore file")]),b,h,_])])}var k=l(89);const w={},U=(0,k.Z)(w,[["render",y]]);var D=U},2565:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v}});var i=l(3396),u=l(9242),n=l(7139);const a={class:"picker"},r=(0,i._)("h1",null,"Pick your dates ",-1);function o(e,t,l,o,s,m){const c=(0,i.up)("VueDatePicker"),d=(0,i.up)("BR"),v=(0,i.up)("P");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i.Wm)(v,{ref:"p"},{default:(0,i.w5)((()=>[r,(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,u.iM)(((...t)=>e.onSubmit&&e.onSubmit(...t)),["prevent"])),class:"form"},[(0,i.Wm)(c,{modelValue:o.date,"onUpdate:modelValue":t[0]||(t[0]=e=>o.date=e),range:"",format:"MM/dd/yyyy","value-format":"MM-dd-yyyy"},null,8,["modelValue"]),(0,i.Wm)(d),(0,i.Uk)(" Your email: "),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>o.email=e)},null,512),[[u.nr,o.email]]),(0,i.Wm)(d),(0,i.Wm)(d),(0,i._)("button",{onClick:t[2]||(t[2]=e=>o.sendReservation())}," Submit Reservation Request "),(0,i.Uk)(),(0,i.Wm)(d),(0,i.Wm)(d),(0,i.Uk)(" "+(0,n.zw)(o.status),1)],32)])),_:1},512)])])}var s=l(4870),m={saveFile:function(){const e=JSON.stringify(this.arr),t=l(5775);try{t.writeFileSync("myfile.txt",e,"utf-8")}catch(i){alert("Failed to save the file !")}},setup(){const e=(0,s.iH)();let t=(0,s.iH)(0);const l=(0,s.iH)(),i=(0,s.iH)(),u=(0,s.iH)(),n=(0,s.iH)(),a=new Date,r=new Date((new Date).setDate(a.getDate()+7));e.value=[a,r];const o=()=>{l.value="",i.value&&null!=e.value?t.value>2?alert("Limit of 3 requests"):e.value==n.value?alert("Select a diffrent date range"):(i.value==u.value?t.value++:t.value=0,alert("This reservation process is Under Construction"),l.value="Submit Reservation from email = "+i.value+" for dates:"+e.value,u.value=i.value,n.value=e.value):null==e.value?alert("Please enter a date range"):alert("Please enter an email")};return{date:e,email:i,startDate:a,endDate:r,sendReservation:o,count:t,status:l}}},c=l(89);const d=(0,c.Z)(m,[["render",o]]);var v=d},5775:function(){}}]);
//# sourceMappingURL=about.7be5a7d3.js.map