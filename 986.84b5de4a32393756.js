"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[986],{986:(M,i,s)=>{s.r(i),s.d(i,{RhuUserModule:()=>A});var h=s(655),p=s(2448),c=s(1457),f=s(1665),t=s(2223),d=s(3130),v=s(9058),U=s(8278),m=s(430),l=s(4755),a=s(7406),g=s(1728);function x(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr",6)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td")(9,"div",7)(10,"button",8),t._UZ(11,"mat-icon",9),t.qZA(),t.TgZ(12,"mat-menu",null,10)(14,"button",11),t.NdJ("click",function(){const T=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.remove(T))}),t._uU(15," Remove "),t.qZA()()()()()}if(2&o){const e=r.$implicit,u=t.MAs(13);t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.type),t.xp6(2),t.Oqu(t.xi3(7,4,e.createdAt,"MMMM dd YYYY")),t.xp6(4),t.Q6J("matMenuTriggerFor",u)}}let Z=(()=>{class o{constructor(e){this._store=e}remove(e){this._store.dispatch(c.S.USERS.remove.request({id:e.id}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["rhu-user-list"]],inputs:{users:"users"},decls:14,vars:1,consts:[[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","sm:col-span-6","bg-card"],[1,"flex","flex-col","flex-auto","h-full","mt-5","overflow-x-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-right","uppercase"],[1,"text-left","text-gray-700"],["class","border-t border-gray-100 hover:bg-slate-100",4,"ngFor","ngForOf"],[1,"border-t","border-gray-100","hover:bg-slate-100"],[1,"flex","justify-center"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","feather:chevron-down",1,"text-gray-400","icon-size-5"],["userListOption","matMenu"],["mat-menu-item","",1,"hover:bg-brand-color","hover:text-white",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Email"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Type"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Created"),t.qZA(),t._UZ(11,"th"),t.qZA()(),t.TgZ(12,"tbody"),t.YNc(13,x,16,7,"tr",5),t.qZA()()()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",u.users))},dependencies:[l.sg,m.Hw,a.VK,a.OP,a.p6,g.RK,l.uU],encapsulation:2}),o})();class n{constructor(r,e){this._store=r,this._RHUUserAddModal=e}ngOnInit(){this._store.dispatch(c.S.USERS.load.request())}addUser(){this._RHUUserAddModal.opened$.next(!0)}}n.\u0275fac=function(r){return new(r||n)(t.Y36(d.yh),t.Y36(v.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["rhu-user"]],decls:8,vars:3,consts:[[1,"flex","flex-col","w-full"],["pageTitle","Users","subtitle","You can manage the users of the admin panel here","icon","feather:user",1,"w-full"],[1,"flex","items-center","bg-white"],[1,"flex","items-center","px-5","py-3","ml-auto","mr-5","text-white","bg-black","rounded-sm",3,"click"],["svgIcon","feather:plus",1,"mr-3","text-white"],[3,"users"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"route-header",1),t.TgZ(2,"div",2)(3,"button",3),t.NdJ("click",function(){return e.addUser()}),t._UZ(4,"mat-icon",4),t._uU(5," Add User "),t.qZA()(),t._UZ(6,"rhu-user-list",5),t.ALo(7,"async"),t.qZA()),2&r&&(t.xp6(6),t.Q6J("users",t.lcZ(7,1,e.users$)))},dependencies:[U.t,m.Hw,Z,l.Ov],encapsulation:2}),(0,h.gn)([(0,p.Z)({selector:f.f.USERS,type:"array"})],n.prototype,"users$",void 0);var y=s(7351),R=s(3676);let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[y.m,R.Bz.forChild([{path:"",component:n}])]}),o})()}}]);