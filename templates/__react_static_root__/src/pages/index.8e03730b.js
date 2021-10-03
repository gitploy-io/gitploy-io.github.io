(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(305),c=t(302),o=t(303),m=t(346),s=t(301),p=t(343),i=t(327),y=t.n(i);function E(){var e=[n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"envs: ")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"- name: "),n.a.createElement("span",{className:"gitploy-yaml-code-value"}," prod")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"   auto_merge: "),n.a.createElement("span",{className:"gitploy-yaml-code-value"}," false")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"   required_contexts: "),n.a.createElement("span",{className:"gitploy-yaml-code-value"}," ['lint', 'test']")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"   approval: ")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"   - enabled: ")," ",n.a.createElement("span",{className:"gitploy-yaml-code-value"}," true")),n.a.createElement("p",{className:"gitploy-yaml-code"},n.a.createElement("span",{className:"gitploy-yaml-code-key"},"      required_count: ")," ",n.a.createElement("span",{className:"gitploy-yaml-code-value"}," 1"))];return n.a.createElement("div",{className:"gitploy-yaml-block"},n.a.createElement(c.a,null,n.a.createElement(o.a,{className:"gitploy-yaml-divider",span:1},e.map((function(e,a){return n.a.createElement("p",{key:a,className:"gitploy-yaml-line-number"},a+1)}))),n.a.createElement(o.a,{span:22},e.map((function(e,a){return n.a.createElement("div",{key:a},e)})))))}var d=t(40),u=t.n(d),g=t(151),f=t(344),b=t(345),v=t(323),h=t(324),k=r.a.Text;function N(){var e=Object(l.useState)(""),a=u()(e,2),t=a[0],r=a[1];return n.a.createElement(f.a,{hoverable:!0},n.a.createElement(b.a,{name:"form",style:{marginTop:"20px"},onFinish:function(){g.b.info(n.a.createElement("span",null,"Let's build your first deployment pipeline! ",n.a.createElement("a",{href:"https://docs.gitploy.io/"},"#1")," "))}},n.a.createElement(b.a.Item,{labelCol:{span:8},wrapperCol:{span:10},rules:[{required:!0}],label:"Environment",name:"Environment"},n.a.createElement(v.a,{size:"large",placeholder:"Select target environment"},n.a.createElement(v.a.Option,{key:0},"dev"),n.a.createElement(v.a.Option,{key:1},"staging"),n.a.createElement(v.a.Option,{key:2},"production"))),n.a.createElement(b.a.Item,{labelCol:{span:8},wrapperCol:{span:12},rules:[{required:!0}],label:"Type",name:"Type"},n.a.createElement(h.a.Group,{size:"large",onChange:function(e){r(e.target.value)}},n.a.createElement(h.a.Button,{value:"commit"},"Commit"),n.a.createElement(h.a.Button,{value:"branch"},"Branch"),n.a.createElement(h.a.Button,{value:"tag"},"Tag"))),["commit","branch"].includes(t)?n.a.createElement(b.a.Item,{labelCol:{span:8},wrapperCol:{span:10},rules:[{required:!0}],label:"Branch",name:"Branch"},n.a.createElement(v.a,{size:"large",placeholder:"Select branch"},n.a.createElement(v.a.Option,{key:0},n.a.createElement(k,{code:!0,className:"gitploy-code"},"main")),n.a.createElement(v.a.Option,{key:1},n.a.createElement(k,{code:!0,className:"gitploy-code"},"new-feature")))):null,["commit"].includes(t)?n.a.createElement(b.a.Item,{labelCol:{span:8},wrapperCol:{span:16},rules:[{required:!0}],label:"Commit",name:"Commit"},n.a.createElement(v.a,{size:"large",placeholder:"Select commit"},n.a.createElement(v.a.Option,{key:0},n.a.createElement(k,{code:!0,className:"gitploy-code"},"3fa3dbb")," - Evaluate the env field"),n.a.createElement(v.a.Option,{key:1},n.a.createElement(k,{code:!0,className:"gitploy-code"},"7b35d8c")," - Remove the rollback method"),n.a.createElement(v.a.Option,{key:2},n.a.createElement(k,{code:!0,className:"gitploy-code"},"77bb4b7")," - Fix the bug of rollback URL"),n.a.createElement(v.a.Option,{key:3},n.a.createElement(k,{code:!0,className:"gitploy-code"},"ac866c4")," - Add installation documentation"))):null,["tag"].includes(t)?n.a.createElement(b.a.Item,{labelCol:{span:8},wrapperCol:{span:10},rules:[{required:!0}],label:"Tag",name:"Tag"},n.a.createElement(v.a,{size:"large",placeholder:"Select tag"},n.a.createElement(v.a.Option,{key:0},n.a.createElement(k,{code:!0,className:"gitploy-code"},"v0.4.1")),n.a.createElement(v.a.Option,{key:1},n.a.createElement(k,{code:!0,className:"gitploy-code"},"v0.4.0")),n.a.createElement(v.a.Option,{key:2},n.a.createElement(k,{code:!0,className:"gitploy-code"},"v0.3.2")),n.a.createElement(v.a.Option,{key:3},n.a.createElement(k,{code:!0,className:"gitploy-code"},"v0.3.1")),n.a.createElement(v.a.Option,{key:4},n.a.createElement(k,{code:!0,className:"gitploy-code"},"v0.3.0")))):null,n.a.createElement(b.a.Item,{wrapperCol:{offset:8,span:10}},n.a.createElement(s.a,{size:"large",type:"primary",htmlType:"submit"},"Submit"))))}var x=r.a.Title,w=r.a.Text,T=r.a.Paragraph;a.default=function(){return n.a.createElement("div",null,n.a.createElement("div",{style:{marginTop:"120px"}},n.a.createElement(c.a,null,n.a.createElement(o.a,{span:24,md:{span:12,offset:6},style:{textAlign:"center"}},n.a.createElement(x,{style:{color:"#120338"},level:1},"Builds your deployment system around GitHub."))),n.a.createElement(c.a,null,n.a.createElement(o.a,{span:18,offset:3,md:{span:6,offset:9},style:{textAlign:"center"}},n.a.createElement(x,{type:"secondary",level:5},"Gitploy is the easiest way to build an advanced deployment system around Github deployment API."))),n.a.createElement(c.a,{style:{marginTop:"20px"}},n.a.createElement(o.a,{span:24,style:{textAlign:"center"}},n.a.createElement(m.b,null,n.a.createElement(s.a,{size:"large",type:"primary"},n.a.createElement("a",{href:"https://docs.gitploy.io/",target:"_blank"},"Start Building")),n.a.createElement(s.a,{size:"large",type:"text"},n.a.createElement("a",{href:"https://docs.gitploy.io/",target:"_blank"},"Read Docs"))))),n.a.createElement(c.a,{style:{marginTop:"100px"}},n.a.createElement(o.a,{span:22,offset:1,md:{span:16,offset:4},lg:{span:12,offset:6}},n.a.createElement(T,{style:{textAlign:"center"}},n.a.createElement(w,{type:"secondary"},"↓ Actual Deploy Demo ↓")),n.a.createElement(N,null)))),n.a.createElement(c.a,{style:{marginTop:"200px"}},n.a.createElement(o.a,{offset:1,span:22,lg:{span:16,offset:4}},n.a.createElement(c.a,null,n.a.createElement(o.a,{span:24,md:{span:11},style:{paddingTop:"30px"}},n.a.createElement(x,{style:{color:"#120338"},level:3},"Powered By GitHub"),n.a.createElement(T,null,n.a.createElement(w,{type:"secondary",strong:!0},"Gitploy enable teams or organizations to build loosely coupled tooling around GitHub deployment API.")),n.a.createElement(T,null,n.a.createElement(w,{type:"secondary",strong:!0},"Do not worry about the implementation details of deploying different types of applications."))),n.a.createElement(o.a,{span:24,md:{span:11,offset:2}},n.a.createElement(p.a,{src:y.a,preview:!1}))))),n.a.createElement(c.a,{style:{marginTop:"100px"}},n.a.createElement(o.a,{offset:1,span:22,lg:{span:16,offset:4}},n.a.createElement(c.a,null,n.a.createElement(o.a,{span:0,md:{span:11}},n.a.createElement(E,null)),n.a.createElement(o.a,{span:24,md:{span:11,offset:2}},n.a.createElement(x,{style:{color:"#120338"},level:3},"Configuration as code"),n.a.createElement(T,null,n.a.createElement(w,{type:"secondary",strong:!0},"Pipeline is configured with a simple, easy‑to‑read file that you commit to your git repository.")),n.a.createElement(T,null,n.a.createElement(w,{type:"secondary",strong:!0},"Build an advanced deployment pipeline from scratch in minutes."))),n.a.createElement(o.a,{span:24,md:0},n.a.createElement(E,null))))),n.a.createElement("div",{style:{marginTop:"200px"}},n.a.createElement(c.a,null,n.a.createElement(o.a,{span:24,md:{span:12,offset:6},style:{textAlign:"center"}},n.a.createElement(T,null,n.a.createElement(x,{style:{color:"#120338"},level:2},"Install Gitploy in Minutes")))),n.a.createElement(c.a,null,n.a.createElement(o.a,{span:18,offset:3,md:{span:8,offset:8},style:{textAlign:"center"}},n.a.createElement(T,null,n.a.createElement(x,{type:"secondary",level:5},"Download our official Docker image or build from source. ",n.a.createElement("br",null)," No need to talk with sales or request a trial license.")))),n.a.createElement(c.a,{style:{marginTop:"20px"}},n.a.createElement(o.a,{span:24,style:{textAlign:"center"}},n.a.createElement(m.b,null,n.a.createElement(s.a,{size:"large",type:"primary"},n.a.createElement("a",{href:"https://docs.gitploy.io/",target:"_blank"},"Install Gitploy")),n.a.createElement(s.a,{size:"large",type:"text"},n.a.createElement("a",{href:"https://cloud.gitploy.io/",target:"_blank"},"Try free cloud offering")))))))}},327:function(e,a,t){e.exports=t.p+"static/github.a7b6643b.jpeg"}}]);