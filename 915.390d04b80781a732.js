"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[915],{4268:($,c,e)=>{e.r(c),e.d(c,{SymptomsModule:()=>B});var f=e(655),S=e(2448),y=e(3622),A=e(1665),C=e(1764),g=e.n(C),T=e(5698),u=e(574),Z=e(4327),t=e(2223),h=e(3130),M=e(8278),d=e(9401),Y=e(430),v=e(9114),l=e(8280),J=e(670),O=e(6758),U=e(4137);const N=(0,h.P1)(o=>o.symptoms,o=>(0,O.E)(o));U.r.getSelectors();var P=e(101),i=e(4755);function Q(o,n){if(1&o&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2),t.qZA(),t.TgZ(3,"td",9),t._uU(4),t.qZA()()),2&o){const s=n.$implicit;t.xp6(2),t.Oqu(s.name),t.xp6(2),t.Oqu(s.count)}}function D(o,n){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2)(2,"table",3)(3,"thead",4)(4,"tr",5)(5,"th",6),t._uU(6," Symptoms Category "),t.qZA(),t.TgZ(7,"th",6),t._uU(8,"Count"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,Q,5,2,"tr",7),t.qZA()()()()),2&o){const s=t.oxw();t.xp6(9),t.Q6J("@listAnimation",s.symptoms.length),t.xp6(1),t.Q6J("ngForOf",s.symptoms)}}class m{constructor(){this.ready=!1}}m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["symptoms-list"]],inputs:{symptoms:"symptoms",ready:"ready"},decls:1,vars:1,consts:[["class","flex flex-col flex-auto p-6 px-5 mb-5 overflow-hidden sm:col-span-6 bg-card",4,"ngIf"],[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","sm:col-span-6","bg-card"],[1,"flex","flex-col","flex-auto","h-full","mt-5","overflow-x-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-right","uppercase"],[1,"bg-gray-100"],[1,"px-4","text-left","text-gray-700"],["class","border-t border-gray-100",4,"ngFor","ngForOf"],[1,"border-t","border-gray-100"],[1,"p-4"]],template:function(n,s){1&n&&t.YNc(0,D,11,2,"div",0),2&n&&t.Q6J("ngIf",s.ready)},dependencies:[i.sg,i.O5],encapsulation:2,data:{animation:[...P.x]}}),(0,f.gn)([(0,J.n)(N)],m.prototype,"loader$",void 0);class r{constructor(n){this._store=n,this.startAt=g()().startOf("month").format("YYYY-MM-DD"),this.endAt=g()().endOf("month").format("YYYY-MM-DD"),this.ready=!1}ngOnInit(){setTimeout(()=>{this._store.dispatch(y.S.APPOINTMENTS.load.request({isToday:!1})),this.ready=!0,this.filter()},1500)}filter(){this._store.dispatch(y.S.SYMPTOMS.load.request({param:{startAt:this.startAt,endAt:this.endAt}}))}generateExcel(){this.symptoms$.pipe((0,T.q)(1)).subscribe(n=>{const a={Sheets:{data:u.P6.json_to_sheet(n.map(x=>({count:x.count,name:x.name})))},SheetNames:["data"]},p=u.cW(a,{bookType:"xlsx",type:"array"}),I=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Z.saveAs(I,`generated-symptoms-${Date.now().toString()}.xlsx`)})}}r.\u0275fac=function(n){return new(n||r)(t.Y36(h.yh))},r.\u0275cmp=t.Xpm({type:r,selectors:[["symptoms"]],decls:15,vars:8,consts:[[1,"flex","flex-col","w-full"],["pageTitle","Symptoms","subtitle","You can view the symptoms analytics here","icon","feather:alert-triangle",1,"w-full"],[1,"flex","items-center","w-full","p-3","bg-white"],["appearance","fill",1,"mx-3","mb-0","ml-auto","translate-y-2","min-w-64"],[3,"rangePicker"],["matStartDate","","placeholder","Start date",3,"ngModel","ngModelChange"],["matEndDate","","placeholder","End date",3,"ngModel","dateChange","ngModelChange"],["matIconSuffix","",3,"for"],["picker",""],[1,"flex","items-center","px-5","py-3","text-white","bg-black","rounded-sm",3,"click"],["svgIcon","feather:plus",1,"mr-3","text-white"],[3,"ready","symptoms"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0),t._UZ(1,"route-header",1),t.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-date-range-input",4)(5,"input",5),t.NdJ("ngModelChange",function(p){return s.startAt=p}),t.qZA(),t.TgZ(6,"input",6),t.NdJ("dateChange",function(){return s.filter()})("ngModelChange",function(p){return s.endAt=p}),t.qZA()(),t._UZ(7,"mat-datepicker-toggle",7)(8,"mat-date-range-picker",null,8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return s.generateExcel()}),t._UZ(11,"mat-icon",10),t._uU(12," Generate Report "),t.qZA()(),t._UZ(13,"symptoms-list",11),t.ALo(14,"async"),t.qZA()),2&n){const a=t.MAs(9);t.xp6(4),t.Q6J("rangePicker",a),t.xp6(1),t.Q6J("ngModel",s.startAt),t.xp6(1),t.Q6J("ngModel",s.endAt),t.xp6(1),t.Q6J("for",a),t.xp6(6),t.Q6J("ready",s.ready)("symptoms",t.lcZ(14,6,s.symptoms$))}},dependencies:[M.t,d.Fj,d.JJ,d.On,Y.Hw,v.KE,v.R9,l.nW,l.wx,l.zY,l.By,l._g,m,i.Ov],encapsulation:2}),(0,f.gn)([(0,S.Z)({selector:A.f.SYMPTOMS,type:"array"})],r.prototype,"symptoms$",void 0);var E=e(3117),L=e(3676);let B=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[E.m,L.Bz.forChild([{path:"",component:r}])]}),o})()}}]);