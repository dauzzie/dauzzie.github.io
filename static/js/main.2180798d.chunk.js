(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),s=t.n(r),c=(t(15),t(1)),m=t(2),i=t(4),o=t(3),u=t(6),d=t(9),p=t.n(d),E=(t(18),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,l=this.props.data.address.city,r=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://dauzzie.github.io/dausie_blog/"},"Blog")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://dauzzie.github.io/old_dauzzie/"},"Old")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),n.a.createElement("h3",null,"I'm a ",l," based ",n.a.createElement("span",null,a),". ",t,"."),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},r))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(l.Component)),h=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),n.a.createElement("li",null,"Design by ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(l.Component),v=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,l=this.props.data.address.street,r=this.props.data.address.city,s=this.props.data.address.state,c=this.props.data.address.zip,m=this.props.data.phone,i=this.props.data.email,o=this.props.data.resumedownload;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,t),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e),n.a.createElement("br",null),n.a.createElement("span",null,l,n.a.createElement("br",null),r," ",s,", ",c),n.a.createElement("br",null),n.a.createElement("span",null,m),n.a.createElement("br",null),n.a.createElement("span",null,i))),n.a.createElement("div",{className:"columns download"},n.a.createElement("p",null,n.a.createElement("a",{href:o,className:"button"},n.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(l.Component),f=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return n.a.createElement("div",{key:e.school},n.a.createElement("h3",null,e.school),n.a.createElement("p",{className:"info"},e.degree," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.graduated)),n.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return n.a.createElement("div",{key:e.company},n.a.createElement("h3",null,e.company),n.a.createElement("p",{className:"info"},e.title,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.years)),n.a.createElement("p",null,e.description))})),l=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return n.a.createElement("li",{key:e.name},n.a.createElement("span",{style:{width:e.level},className:a}),n.a.createElement("em",null,e.name))}));return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},a)))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},t)),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,e),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},l)))))}}]),t}(l.Component),N=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,l=this.props.data.address.state,r=this.props.data.address.zip,s=this.props.data.phone,c=(this.props.data.email,this.props.data.contactmessage);return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Get In Touch."))),n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},c))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"eight columns"},n.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},n.a.createElement("fieldset",null,n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactName"},"Name ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactEmail"},"Email ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),n.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactMessage"},"Message ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),n.a.createElement("div",null,n.a.createElement("button",{className:"submit"},"Submit"),n.a.createElement("span",{id:"image-loader"},n.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),n.a.createElement("div",{id:"message-warning"}," Error boy"),n.a.createElement("div",{id:"message-success"},n.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",n.a.createElement("br",null))),n.a.createElement("aside",{className:"four columns footer-widgets"},n.a.createElement("div",{className:"widget widget_contact"},n.a.createElement("h4",null,"Address and Phone"),n.a.createElement("p",{className:"address"},e,n.a.createElement("br",null),a," ",n.a.createElement("br",null),t,", ",l," ",r,n.a.createElement("br",null),n.a.createElement("span",null,s))),n.a.createElement("div",{className:"widget widget_tweets"},n.a.createElement("h4",{className:"widget-title"},"Latest Tweets"),n.a.createElement("ul",{id:"twitter"},n.a.createElement("li",null,n.a.createElement("span",null,"This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",n.a.createElement("a",{href:"#"},"http://t.co/CGIrdxIlI3")),n.a.createElement("b",null,n.a.createElement("a",{href:"#"},"2 Days Ago"))),n.a.createElement("li",null,n.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",n.a.createElement("a",{href:"#"},"http://t.co/CGIrdxIlI3")),n.a.createElement("b",null,n.a.createElement("a",{href:"#"},"3 Days Ago"))))))))}}]),t}(l.Component),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return n.a.createElement("li",{key:e.user},n.a.createElement("blockquote",null,n.a.createElement("p",null,e.text),n.a.createElement("cite",null,e.user)))}));return n.a.createElement("section",{id:"testimonials"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Client Testimonials"))),n.a.createElement("div",{className:"ten columns flex-container"},n.a.createElement("ul",{className:"slides"},e)))))}}]),t}(l.Component),w=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return n.a.createElement("div",{key:e.title,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.url,title:e.title},n.a.createElement("img",{alt:e.title,src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Works."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(l.Component),g=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),l}return Object(m.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,{data:this.state.resumeData.main}),n.a.createElement(v,{data:this.state.resumeData.main}),n.a.createElement(f,{data:this.state.resumeData.resume}),n.a.createElement(w,{data:this.state.resumeData.portfolio}),n.a.createElement(b,{data:this.state.resumeData.testimonials}),n.a.createElement(N,{data:this.state.resumeData.main}),n.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2180798d.chunk.js.map