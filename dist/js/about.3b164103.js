(self["webpackChunkclub"]=self["webpackChunkclub"]||[]).push([[443],{6260:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return U}});var i=l(3396);const a={class:"about"},u=(0,i._)("h1",null,"This is site built with vue for Club Del Cielo",-1),n=(0,i._)("li",null,"open command prompt",-1),r=(0,i._)("li",null,"cd C:\\Users\\thambrick\\club",-1),s=(0,i._)("li",null,"npm run build and then npm run serve ",-1),o=(0,i._)("li",null,"git init",-1),m=(0,i._)("li",null,"git add .",-1),d=(0,i._)("li",null,'git commit -m "first commit123"',-1),c=(0,i._)("li",null,"git branch -M main",-1),v=(0,i._)("li",null,"git remote rm origin",-1),f=(0,i._)("li",null,"git remote add origin https://github.com/treyhambrick/club.git",-1),g=(0,i._)("li",null,"On a Mac: git remote add origin git@github.com:treyhambrick/club.git",-1),p=(0,i._)("li",null,"git push -u origin main",-1),h=(0,i._)("li",null,'git add dist && git commit -m "Initial dist subtree commit"',-1),b=(0,i._)("li",null,"git subtree push --prefix dist origin gh-pages",-1),_=(0,i._)("li",null,"wait 7 minutes the goto: https://treyhambrick.github.io/club/ (refresh page to see changes). deployed from a Mac Mini ",-1);function y(e,t){const l=(0,i.up)("B"),y=(0,i.up)("U");return(0,i.wg)(),(0,i.iD)("div",a,[u,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Execution Steps:")])),_:1})]),n,r,s,(0,i._)("li",null,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" upload to GitHub: run.bat to execute the commands below")])),_:1})]),o,m,d,c,v,f,g,p,(0,i._)("li",null,[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Note:")])),_:1}),(0,i.Uk)(" Remove the dist directory from the project’s .gitignore file")]),h,b,_])])}var w=l(89);const k={},D=(0,w.Z)(k,[["render",y]]);var U=D},3611:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var i=l(3396),a=l(9242),u=l(7139);const n={class:"picker"},r=(0,i._)("h1",null,"Pick your dates ",-1),s=(0,i._)("button",{type:"submit"}," Submit Reservation Request ",-1),o=(0,i._)("iframe",{name:"output_frame",src:"",id:"output_frame",width:"0",height:"0",style:{visibility:"hidden"}},null,-1);function m(e,t,l,m,d,c){const v=(0,i.up)("VueDatePicker"),f=(0,i.up)("BR"),g=(0,i.up)("P");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",n,[(0,i.Wm)(g,{ref:"p"},{default:(0,i.w5)((()=>[r,(0,i._)("form",{onSubmit:t[3]||(t[3]=(...e)=>m.sendReservation&&m.sendReservation(...e)),class:"form",action:"https://formspree.io/f/xayglnld",method:"POST",target:"output_frame"},[(0,i.Wm)(v,{modelValue:m.date,"onUpdate:modelValue":t[0]||(t[0]=e=>m.date=e),range:"",format:"MM/dd/yyyy","value-format":"MM-dd-yyyy"},null,8,["modelValue"]),(0,i.Wm)(f),(0,i.Uk)(" Your email: "),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>m.email=e),name:"email"},null,512),[[a.nr,m.email]]),(0,i.Wm)(f),(0,i.Wm)(f),s,(0,i.Uk)(),(0,i.Wm)(f),(0,i.Wm)(f),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>m.message=e),style:{visibility:"hidden"},name:"message"},null,512),[[a.nr,m.message]]),(0,i.Uk)(" "+(0,u.zw)(m.status)+" ",1),o],32)])),_:1},512)])])}var d=l(4870),c={saveFile:function(){const e=JSON.stringify(this.arr),t=l(5775);try{t.writeFileSync("myfile.txt",e,"utf-8")}catch(i){alert("Failed to save the file !")}},setup(){const e=(0,d.iH)(),t=(0,d.iH)();let l=(0,d.iH)(0);const i=(0,d.iH)(),a=(0,d.iH)(),u=(0,d.iH)(),n=(0,d.iH)(),r=new Date,s=new Date((new Date).setDate(r.getDate()+7));t.value=[r,s];const o=o=>{i.value="",a.value&&null!=t.value?l.value>2?(alert("Limit of 3 requests"),o.preventDefault()):t.value==n.value?(alert("Select a diffrent date range"),o.preventDefault()):(a.value==u.value?l.value++:l.value=0,r.value=""+r,s.value=""+s,e.value="Submitted Reservation from email = "+a.value+" for dates: "+r.value.substring(0,15)+" to "+s.value.substring(0,15),e.value=e.value.replace("GMT-0400 (Eastern Daylight Time)",""),e.value=e.value.replace("GMT-0400 (Eastern Daylight Time)",""),u.value=a.value,n.value=t.value,o.submit,i.value=e.value):null==t.value?(alert("Please enter a date range"),o.preventDefault()):(alert("Please enter an email"),o.preventDefault())};return{date:t,email:a,startDate:r,endDate:s,sendReservation:o,count:l,status:i,message:e}}},v=l(89);const f=(0,v.Z)(c,[["render",m]]);var g=f},5775:function(){}}]);
//# sourceMappingURL=about.3b164103.js.map