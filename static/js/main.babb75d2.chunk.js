(window.webpackJsonpironbeers=window.webpackJsonpironbeers||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),i=(a(39),a(33)),l=a(2),c=a(3),u=a(5),m=a(4),h=a(6),d=(a(40),a(10)),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).showParks=function(){return a.props.listOfParks.map((function(e,t){return r.a.createElement("div",{className:"container d-flex flex-row",key:t},r.a.createElement("div",{className:"col-8"},r.a.createElement(d.b,{to:"/singlepark/"+e.attributes.ID},r.a.createElement("h4",{className:"name"},e.attributes.NAME)),"Address: ",e.attributes.ADDRESS,r.a.createElement("p",{className:"contributor"},"Phone: ",e.attributes.PHONE)))}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.listOfParks?r.a.createElement("div",null,r.a.createElement("h1",null,"List of Parks"),this.showParks()):r.a.createElement("div",null,"loading...")}}]),t}(n.Component),f=a(13),v=a.n(f),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).deleteEvent=function(e){var t=e.target.name;v.a.delete("https://ironrest.herokuapp.com/avrahm/"+t).then((function(e){console.log("deleted")})).catch((function(e){console.log(e)}))},e.showEvents=function(){return e.props.listOfEvents.map((function(t,a){return r.a.createElement("div",{className:"container d-flex flex-row",key:a},r.a.createElement("div",{className:"col-8"},r.a.createElement(d.b,{to:"/singleevent/"+t._id},r.a.createElement("h4",{className:"name"},t.event.name)),r.a.createElement("button",{name:t._id,onClick:e.deleteEvent},"delete")))}))},e.state={},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.ready?r.a.createElement("div",null,r.a.createElement("h1",null,"List of Events"),this.showEvents()):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.listOfParks){var t=this.props.listOfParks.find((function(t){return t.attributes.ID===e.props.match.params.id}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container d-flex flex-column"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("h1",null,t.attributes.NAME),r.a.createElement("h3",{className:"tagline"},"Address: ",t.attributes.ADDRESS),r.a.createElement("p",null,"Phone: ",t.attributes.PHONE),r.a.createElement("p",null,"Latitude: ",t.attributes.LAT),r.a.createElement("p",null,"Longitude: ",t.attributes.LON))))}return r.a.createElement("h1",null,"Loading....")}}]),t}(r.a.Component),g=a(32),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.state={name:"",address:"",description:"",sport:"",date:"",time:"",user:"",message:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.props.message),r.a.createElement("form",{className:"container",onSubmit:function(t){e.props.submitEventFunction(t,e.state.name,e.state.address,e.state.description,e.state.sport,e.state.date,e.state.time,e.state.user)}},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"name",onChange:this.handleInput,value:this.state.name}),r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{className:"form-control",type:"text",name:"address",onChange:this.handleInput,value:this.state.address}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"form-control",type:"text",name:"description",height:"100px",onChange:this.handleInput,value:this.state.description}),r.a.createElement("label",{htmlFor:"sport"},"Sport"),r.a.createElement("input",{className:"form-control",type:"text",name:"sport",onChange:this.handleInput,value:this.state.sport}),r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{className:"form-control",type:"text",name:"date",onChange:this.handleInput,value:this.state.date}),r.a.createElement("label",{htmlFor:"time"},"Time"),r.a.createElement("input",{className:"form-control",type:"text",name:"time",onChange:this.handleInput,value:this.state.time}),r.a.createElement("label",{htmlFor:"user"},"User"),r.a.createElement("input",{className:"form-control",type:"text",name:"user",onChange:this.handleInput,value:this.state.user}),r.a.createElement("button",{className:"button btn-lg"},"Submit")))}}]),t}(n.Component),j=a(12),y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/listevent/",className:"btn btn-lg btn-outline-danger"},r.a.createElement("h3",null,"List of Events")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/listpark/",className:"btn btn-lg btn-outline-success"},r.a.createElement("h3",null,"List of Parks")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/new/",className:"btn btn-lg btn-outline-success"},r.a.createElement("h3",null,"Add a Event")),r.a.createElement("br",null))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.listOfEvents){var t=this.props.listOfEvents.find((function(t){return t._id===e.props.match.params.id}));return r.a.createElement("div",{className:"App"},"SingleEvent",t._id)}return r.a.createElement("h1",null,"Loading....")}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={theParksFromMiamiDade:null,theEventsFromIronrest:null,ready:!1,message:""},a.submitNewEvent=function(e,t,n,r,s,o,l,c){e.preventDefault();var u={name:t,address:n,description:r,sport:s,date:o,time:l,user:c};v.a.post("https://ironrest.herokuapp.com/avrahm",{event:u}).then((function(e){var t=Object(i.a)(a.state.theEventsFromIronrest);console.log(e),t.push(e.data.ops[0]),a.setState({message:"Posted Successfully",theEventsFromIronrest:t},(function(){return setTimeout((function(){a.setState({message:""}),a.props.history.push("/singleevent/"+e.data.ops[0]._id)}),1e4)}))})).catch((function(e){a.setState({message:"Error!"})}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://gisweb.miamidade.gov/arcgis/rest/services/Parks/MD_Parks305/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json").then((function(t){var a=t.data.features;e.setState({theParksFromMiamiDade:a,ready:!0})})).catch((function(e){console.log(e)})),v.a.get("https://ironrest.herokuapp.com/avrahm").then((function(t){var a=t.data;console.log(a),e.setState({theEventsFromIronrest:a,ready:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.props),this.state.ready?r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/listpark/",render:function(t){return r.a.createElement(p,Object.assign({},t,{listOfParks:e.state.theParksFromMiamiDade,ready:e.state.ready}))}}),r.a.createElement(j.a,{exact:!0,path:"/singlepark/:id",render:function(t){return r.a.createElement(b,Object.assign({},t,{listOfParks:e.state.theParksFromMiamiDade,ready:e.state.ready}))}}),r.a.createElement(j.a,{exact:!0,path:"/listevent/",render:function(t){return r.a.createElement(E,Object.assign({},t,{listOfEvents:e.state.theEventsFromIronrest,ready:e.state.ready}))}}),r.a.createElement(j.a,{exact:!0,path:"/singleevent/:id",render:function(t){return r.a.createElement(k,Object.assign({},t,{listOfEvents:e.state.theEventsFromIronrest,ready:e.state.ready,message:e.state.message}))}}),r.a.createElement(j.a,{exact:!0,path:"/new/",render:function(t){return r.a.createElement(O,Object.assign({},t,{message:e.state.message,submitEventFunction:e.submitNewEvent}))}}))):r.a.createElement("h1",null,"Loading....")}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(63);o.a.render(r.a.createElement(d.a,null,r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/project-2-TBD",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/project-2-TBD","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):x(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.babb75d2.chunk.js.map