"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[173],{1173:(K,d,e)=>{e.r(d),e.d(d,{AppointmentsModule:()=>P});var u=e(3676),g=e(655),h=e(101),v=e(3995),A=e(4942),C=e(1665),M=e(2448),y=e(5786),Z=e(1764),c=e.n(Z),t=e(2223),T=e(3994),x=e(6519),J=e(8278),N=e(862),r=e(9401),s=e(4755),S=e(430),U=e(8097),f=e(9114),O=e(787),Y=e(1217),Q=e(1728),l=e(8280),I=e(3065),R=e(743),E=e(9190),F=e(4328);const H=function(o,a){return{"bg-black text-white pointer-events-none":o,"text-gray-500 md:hover:bg-gray-50":a}};function D(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){const L=t.CHM(n).$implicit,B=t.oxw();return t.KtG(B.currentRHU=L)}),t._uU(1),t.qZA()}if(2&o){const n=a.$implicit,i=t.oxw();t.Q6J("ngClass",t.WLB(2,H,i.currentRHU===n,i.currentRHU!==n)),t.xp6(1),t.hij(" ",n," ")}}function $(o,a){if(1&o&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n)}}function b(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.patientName="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}class m{constructor(a,n){this._store=a,this._addAppointmentModal=n,this.addAppointmentModalOpened$=this._addAppointmentModal.opened$,this.RHU=Object.values(A.V),this.SERVICES=Object.values(v.S),this.currentRHU=this.RHU[0],this.currentService=void 0,this.patientName="",this.startAt=c()().startOf("month").format("YYYY-MM-DD"),this.endAt=c()().endOf("month").format("YYYY-MM-DD")}ngOnInit(){setTimeout(()=>{this._store.dispatch(y.S.APPOINTMENTS.load.request({isToday:!1}))},1500)}}m.\u0275fac=function(a){return new(a||m)(t.Y36(T.yh),t.Y36(x.c))},m.\u0275cmp=t.Xpm({type:m,selectors:[["appointments"]],decls:31,vars:26,consts:[[1,"flex","flex-col","w-full"],["pageTitle","Appointments","subtitle","You can see the list of all appointments here","icon","feather:calendar",1,"w-full"],[1,"flex","items-center","w-full","p-3","bg-white"],["class","px-5 py-2 mr-3 active:opacity-25",3,"ngClass","click",4,"ngFor","ngForOf"],["appearance","fill",1,"mb-0","ml-auto","translate-y-2","min-w-64"],["placeholder","Type of Service",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["matSuffix","","svgIcon","feather:chevron-down"],["appearance","fill",1,"mx-3","mb-0","translate-y-2","min-w-64"],[3,"rangePicker"],["matStartDate","","placeholder","Start date",3,"ngModel","ngModelChange"],["matEndDate","","placeholder","End date",3,"ngModel","ngModelChange"],["matIconSuffix","",3,"for"],["picker",""],[1,"mx-3","mb-0","translate-y-2","min-w-64"],["svgIcon","feather:search",1,"mr-3"],["matInput","","placeholder","Search Patient",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","",3,"click",4,"ngIf"],[1,"flex","items-center","px-5","py-3","mx-3","text-white","rounded-sm","bg-emerald-500",3,"click"],["svgIcon","feather:plus",1,"mr-3","text-white"],[3,"appointments"],[1,"px-5","py-2","mr-3","active:opacity-25",3,"ngClass","click"],["matSuffix","","mat-icon-button","",3,"click"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0),t._UZ(1,"route-header",1)(2,"div",2),t.TgZ(3,"div",2),t.YNc(4,D,2,5,"button",3),t.TgZ(5,"mat-form-field",4)(6,"mat-select",5),t.NdJ("ngModelChange",function(p){return n.currentService=p}),t.TgZ(7,"mat-option",6),t._uU(8,"All"),t.qZA(),t.YNc(9,$,2,2,"mat-option",7),t.qZA(),t._UZ(10,"mat-icon",8),t.qZA(),t.TgZ(11,"mat-form-field",9)(12,"mat-date-range-input",10)(13,"input",11),t.NdJ("ngModelChange",function(p){return n.startAt=p}),t.qZA(),t.TgZ(14,"input",12),t.NdJ("ngModelChange",function(p){return n.endAt=p}),t.qZA()(),t._UZ(15,"mat-datepicker-toggle",13)(16,"mat-date-range-picker",null,14),t.qZA(),t.TgZ(18,"mat-form-field",15),t._UZ(19,"mat-icon",16),t.TgZ(20,"input",17),t.NdJ("ngModelChange",function(p){return n.patientName=p}),t.qZA(),t.YNc(21,b,3,0,"button",18),t.qZA(),t.TgZ(22,"button",19),t.NdJ("click",function(){return n.addAppointmentModalOpened$.next(!0)}),t._UZ(23,"mat-icon",20),t._uU(24," Walk-in "),t.qZA()(),t._UZ(25,"appointment-list",21),t.ALo(26,"filter_appointment_by_date_range"),t.ALo(27,"filter_appointment_by_patient_name"),t.ALo(28,"filter_appointment_by_type"),t.ALo(29,"filter_appointment_by_rhu"),t.ALo(30,"async"),t.qZA()),2&a){const i=t.MAs(17);t.xp6(4),t.Q6J("ngForOf",n.RHU),t.xp6(2),t.Q6J("ngModel",n.currentService),t.xp6(1),t.Q6J("value",void 0),t.xp6(2),t.Q6J("ngForOf",n.SERVICES),t.xp6(3),t.Q6J("rangePicker",i),t.xp6(1),t.Q6J("ngModel",n.startAt),t.xp6(1),t.Q6J("ngModel",n.endAt),t.xp6(1),t.Q6J("for",i),t.xp6(5),t.Q6J("ngModel",n.patientName),t.xp6(1),t.Q6J("ngIf",n.patientName),t.xp6(4),t.Q6J("appointments",t.Dn7(26,11,t.xi3(27,15,t.xi3(28,18,t.xi3(29,21,t.lcZ(30,24,n.appointments$),n.currentRHU),n.currentService),n.patientName),n.startAt,n.endAt))}},dependencies:[J.t,N.z,r.Fj,r.JJ,r.On,s.mk,s.sg,s.O5,S.Hw,U.Nt,f.KE,f.R9,O.gD,Y.ey,Q.RK,l.nW,l.wx,l.zY,l.By,l._g,I.a,R.v,E.n,F.T,s.Ov],encapsulation:2,data:{animation:[...h.x]}}),(0,g.gn)([(0,M.Z)({selector:C.f.APPOINTMENTS,type:"array"})],m.prototype,"appointments$",void 0);var j=e(9964);let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[j.m,u.Bz.forChild([{path:"",component:m}])]}),o})()}}]);