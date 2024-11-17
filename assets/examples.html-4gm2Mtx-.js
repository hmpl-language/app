import{c as m,h as i,r as t,a as r,d as s,g as B,i as H,b as C,e as P,f as y,v as b,F as k,j as V,o,t as R}from"./app-CB1WPD1h.js";import{_ as O}from"./plugin-vue_export-helper-DlAUqK2U.js";const Q={__name:"examples.html",setup(U,{expose:n}){n();const p=[m("hmpl0"),i("div","Loading..."),i("div","HTML from server")],l=(e,v)=>p[0],F=(e,v)=>p[1],g=(e,v)=>p[2],a=t(l),q=()=>{a.value===l&&(a.value=F,setTimeout(()=>{a.value=g},300))},A=t(""),j=t(""),f=[m("hmpl1"),i("div","Loading...")],h=(e,v)=>f[0],L=(e,v)=>f[1],c=t(h),N=()=>{c.value===h&&(c.value=L,setTimeout(()=>{c.value=i("span",`Hello, ${A.value}!`),A.value="",j.value=""},300))};let d=2;const D=t([1]),x=[{id:0,name:"Coca Cola",quantity:10},{id:1,name:"Lays",quantity:4}],u=t([...x]),E=t(""),w=t(""),S={id:-1,name:"Loading...",quantity:"Loading..."},T=t(m("hmpl2")),M={els:p,Comment:l,Loading:F,HTMLFromServer:g,currentComponent:a,switchComponent:q,login:A,password:j,els1:f,Comment1:h,Loading1:L,currentComponent1:c,switchComponent1:N,get id(){return d},set id(e){d=e},items:D,defaultValue:x,products:u,product:E,quantity:w,loading:S,currentComponent2:T,switchComponent2:()=>{T.value=null,D.value.length&&(D.value=[]);const e=[...u.value];u.value=[...x,S],setTimeout(()=>{e.push({id:d,name:E.value,quantity:w.value}),u.value=e,E.value="",w.value="",d++},300)},createCommentVNode:m,h:i,ref:t};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}},I={id:"wrapper"},G={id:"wrapper"},W={class:"form-example"},J={class:"form-example"};function z(U,n,p,l,F,g){return o(),r("div",null,[n[14]||(n[14]=s("h1",{id:"examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#examples"},[s("span",null,"Examples")])],-1)),n[15]||(n[15]=s("h2",{id:"main-example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#main-example"},[s("span",null,"Main example")])],-1)),s("div",I,[s("div",null,[s("button",{onClick:l.switchComponent,class:"getHTML"},"Get HTML!"),(o(),B(H(l.currentComponent)))])]),n[16]||(n[16]=C(`<h3 id="source" tabindex="-1"><a class="header-anchor" href="#source"><span>Source</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">import</span><span style="color:#24292EFF;"> { compile } </span><span style="color:#D32F2F;">from</span><span style="color:#22863A;"> &quot;hmpl-js&quot;</span><span style="color:#24292EFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> compile</span><span style="color:#24292EFF;">(</span></span>
<span class="line"><span style="color:#22863A;">  \`&lt;div&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;button class=&quot;getHTML&quot;&gt;Get HTML!&lt;/button&gt;</span></span>
<span class="line"><span style="color:#22863A;">    { </span></span>
<span class="line"><span style="color:#22863A;">      {</span></span>
<span class="line"><span style="color:#22863A;">        &quot;src&quot;:&quot;/api/test&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;after&quot;:&quot;click:.getHTML&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;repeat&quot;:false,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;indicators&quot;: [</span></span>
<span class="line"><span style="color:#22863A;">           {</span></span>
<span class="line"><span style="color:#22863A;">             &quot;trigger&quot;: &quot;pending&quot;,</span></span>
<span class="line"><span style="color:#22863A;">             &quot;content&quot;: &quot;&lt;div&gt;Loading...&lt;/div&gt;&quot;</span></span>
<span class="line"><span style="color:#22863A;">           }</span></span>
<span class="line"><span style="color:#22863A;">        ]</span></span>
<span class="line"><span style="color:#22863A;">      } </span></span>
<span class="line"><span style="color:#22863A;">    }</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> wrapper</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> document</span><span style="color:#6F42C1;">.getElementById</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;wrapper&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> elementObj</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1976D2;">wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">elementObj</span><span style="color:#24292EFF;">.response);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="registration-form" tabindex="-1"><a class="header-anchor" href="#registration-form"><span>Registration form</span></a></h2>`,3)),s("div",G,[s("div",null,[s("div",null,[s("form",{onSubmit:P(l.switchComponent1,["prevent"]),id:"form"},[s("div",W,[n[4]||(n[4]=s("label",{for:"login"},"Login: ",-1)),y(s("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>l.login=a),type:"text",name:"login",id:"login",required:""},null,512),[[b,l.login]]),n[5]||(n[5]=s("br",null,null,-1)),n[6]||(n[6]=s("label",{for:"password"},"Password: ",-1)),y(s("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>l.password=a),type:"password",name:"password",id:"password",required:""},null,512),[[b,l.password]])]),n[7]||(n[7]=s("div",{class:"form-example"},[s("input",{type:"submit",value:"Register!"})],-1))],32),s("p",null,[(o(),B(H(l.currentComponent1)))])])])]),n[17]||(n[17]=C(`<h3 id="source-1" tabindex="-1"><a class="header-anchor" href="#source-1"><span>Source</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">import</span><span style="color:#24292EFF;"> { compile } </span><span style="color:#D32F2F;">from</span><span style="color:#22863A;"> &quot;hmpl-js&quot;</span><span style="color:#24292EFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> compile</span><span style="color:#24292EFF;">(</span></span>
<span class="line"><span style="color:#22863A;">  \`&lt;div&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;form onsubmit=&quot;function prevent(e){e.preventDefault();};return prevent(event);&quot; id=&quot;form&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;div class=&quot;form-example&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;label for=&quot;login&quot;&gt;Login: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;text&quot; name=&quot;login&quot; id=&quot;login&quot; required /&gt;&lt;br/&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;label for=&quot;password&quot;&gt;Password: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;password&quot; name=&quot;password&quot; id=&quot;password&quot; required /&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;div class=&quot;form-example&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;submit&quot; value=&quot;Register!&quot; /&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#22863A;">    {</span></span>
<span class="line"><span style="color:#22863A;">      {</span></span>
<span class="line"><span style="color:#22863A;">        &quot;src&quot;:&quot;/api/register&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;after&quot;:&quot;submit:#form&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;repeat&quot;:false,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;indicators&quot;: [</span></span>
<span class="line"><span style="color:#22863A;">          {</span></span>
<span class="line"><span style="color:#22863A;">            &quot;trigger&quot;: &quot;pending&quot;,</span></span>
<span class="line"><span style="color:#22863A;">            &quot;content&quot;: &quot;&lt;p&gt;Loading...&lt;/p&gt;&quot;</span></span>
<span class="line"><span style="color:#22863A;">          }</span></span>
<span class="line"><span style="color:#22863A;">        ]</span></span>
<span class="line"><span style="color:#22863A;">      }</span></span>
<span class="line"><span style="color:#22863A;">    }</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#22863A;">&lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292EFF;">);</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#6F42C1;"> initFn</span><span style="color:#D32F2F;"> =</span><span style="color:#24292EFF;"> (ctx) </span><span style="color:#D32F2F;">=&gt;</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#D32F2F;">  const</span><span style="color:#1976D2;"> event</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> ctx</span><span style="color:#24292EFF;">.</span><span style="color:#1976D2;">request</span><span style="color:#24292EFF;">.event;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">  return</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#24292EFF;">    body</span><span style="color:#D32F2F;">:</span><span style="color:#D32F2F;"> new</span><span style="color:#6F42C1;"> FormData</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">event</span><span style="color:#24292EFF;">.target</span><span style="color:#212121;">,</span><span style="color:#1976D2;"> event</span><span style="color:#24292EFF;">.submitter)</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    credentials</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;same-origin&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  };</span></span>
<span class="line"><span style="color:#24292EFF;">};</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> obj</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">(initFn);</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> wrapper</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> document</span><span style="color:#6F42C1;">.getElementById</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;wrapper&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"><span style="color:#1976D2;">wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">obj</span><span style="color:#24292EFF;">.response);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="working-with-a-table" tabindex="-1"><a class="header-anchor" href="#working-with-a-table"><span>Working with a table</span></a></h2>`,3)),s("div",null,[s("table",null,[n[8]||(n[8]=s("caption",null," List of products in the store ",-1)),n[9]||(n[9]=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"Product name"),s("th",{scope:"col"},"Quantity")])],-1)),s("tbody",null,[(o(!0),r(k,null,V(l.products,({name:a,quantity:q})=>(o(),r("tr",null,[s("td",null,R(a),1),s("td",null,R(q),1)]))),256)),(o(!0),r(k,null,V(l.items,a=>(o(),r(k,null,[],64))),256))])]),s("form",{onSubmit:P(l.switchComponent2,["prevent"]),id:"form"},[s("div",J,[n[10]||(n[10]=s("label",{for:"product"},"Product name: ",-1)),y(s("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>l.product=a),type:"text",name:"product",id:"product",required:""},null,512),[[b,l.product]]),n[11]||(n[11]=s("br",null,null,-1)),n[12]||(n[12]=s("label",{for:"quantity"},"Quantity: ",-1)),y(s("input",{"onUpdate:modelValue":n[3]||(n[3]=a=>l.quantity=a),type:"number",name:"quantity",id:"quantity",required:""},null,512),[[b,l.quantity]])]),n[13]||(n[13]=s("div",{class:"form-example"},[s("input",{type:"submit",value:"Add product"})],-1))],32)]),n[18]||(n[18]=C(`<h2 id="source-2" tabindex="-1"><a class="header-anchor" href="#source-2"><span>Source</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">import</span><span style="color:#24292EFF;"> { compile } </span><span style="color:#D32F2F;">from</span><span style="color:#22863A;"> &quot;hmpl-js&quot;</span><span style="color:#24292EFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> compile</span><span style="color:#24292EFF;">(</span></span>
<span class="line"><span style="color:#22863A;">  \`&lt;div&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;caption&gt;</span></span>
<span class="line"><span style="color:#22863A;">      List of products in the store</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/caption&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;thead&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;th scope=&quot;col&quot;&gt;Product name&lt;/th&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;th scope=&quot;col&quot;&gt;Quantity&lt;/th&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;td&gt;Coca Cola&lt;/td&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;td&gt;10&lt;/td&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;td&gt;Lays&lt;/td&gt;</span></span>
<span class="line"><span style="color:#22863A;">        &lt;td&gt;4&lt;/td&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#22863A;">      {</span></span>
<span class="line"><span style="color:#22863A;">        {</span></span>
<span class="line"><span style="color:#22863A;">          &quot;src&quot;:&quot;/api/products&quot;,</span></span>
<span class="line"><span style="color:#22863A;">          &quot;after&quot;:&quot;submit:#form&quot;,</span></span>
<span class="line"><span style="color:#22863A;">          &quot;autoBody&quot;:true,</span></span>
<span class="line"><span style="color:#22863A;">          &quot;indicators&quot;: [</span></span>
<span class="line"><span style="color:#22863A;">            {</span></span>
<span class="line"><span style="color:#22863A;">              &quot;trigger&quot;: &quot;pending&quot;,</span></span>
<span class="line"><span style="color:#22863A;">              &quot;content&quot;: &quot;&lt;tr&gt;&lt;td&gt;Loading...&lt;/td&gt;&lt;td&gt;Loading...&lt;/td&gt;&lt;/tr&gt;&quot;</span></span>
<span class="line"><span style="color:#22863A;">            }</span></span>
<span class="line"><span style="color:#22863A;">          ]</span></span>
<span class="line"><span style="color:#22863A;">        }</span></span>
<span class="line"><span style="color:#22863A;">      }</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;form id=&quot;form&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;div class=&quot;form-example&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;label&gt;Product name: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;text&quot; name=&quot;product&quot; id=&quot;product&quot; required /&gt;&lt;br/&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;label&gt;Quantity: &lt;/label&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;number&quot; name=&quot;quantity&quot; id=&quot;quantity&quot; required /&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;div class=&quot;form-example&quot;&gt;</span></span>
<span class="line"><span style="color:#22863A;">      &lt;input type=&quot;submit&quot; value=&quot;Add product&quot; /&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/form&gt;</span></span>
<span class="line"><span style="color:#22863A;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#22863A;">  \`</span></span>
<span class="line"><span style="color:#24292EFF;">);</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> obj</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">({ credentials</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;same-origin&quot;</span><span style="color:#24292EFF;"> });</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> wrapper</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> document</span><span style="color:#6F42C1;">.getElementById</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;wrapper&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"><span style="color:#1976D2;">wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">obj</span><span style="color:#24292EFF;">.response);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-repository-of-simple-projects-examples-on-hmpl" tabindex="-1"><a class="header-anchor" href="#a-repository-of-simple-projects-examples-on-hmpl"><span>A repository of simple projects examples on hmpl</span></a></h2><p><a href="https://github.com/hmpl-language/examples" target="_blank" rel="noopener noreferrer">Examples</a></p>`,4))])}const Z=O(Q,[["render",z],["__file","examples.html.vue"]]),_=JSON.parse('{"path":"/examples.html","title":"Examples","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Main example","slug":"main-example","link":"#main-example","children":[{"level":3,"title":"Source","slug":"source","link":"#source","children":[]}]},{"level":2,"title":"Registration form","slug":"registration-form","link":"#registration-form","children":[{"level":3,"title":"Source","slug":"source-1","link":"#source-1","children":[]}]},{"level":2,"title":"Working with a table","slug":"working-with-a-table","link":"#working-with-a-table","children":[]},{"level":2,"title":"Source","slug":"source-2","link":"#source-2","children":[]},{"level":2,"title":"A repository of simple projects examples on hmpl","slug":"a-repository-of-simple-projects-examples-on-hmpl","link":"#a-repository-of-simple-projects-examples-on-hmpl","children":[]}],"git":{},"readingTime":{"minutes":2.36,"words":707},"filePathRelative":"examples.md"}');export{Z as comp,_ as data};
