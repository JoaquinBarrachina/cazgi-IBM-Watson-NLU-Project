(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(2),o=n.n(i),a=n(18),r=n.n(a),c=(n(24),n(3)),l=n(4),u=n(6),d=n(5),b=(n(9),n(25),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=Object.keys(this.props.emotions);return Object(s.jsxs)("div",{children:[console.log(Object.keys(this.props.emotions)),Object(s.jsx)("table",{className:"table table-bordered",children:Object(s.jsx)("tbody",{children:e.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e}),Object(s.jsx)("td",{children:t.props.emotions[e]})]},e)}))})})]})}}]),n}(o.a.Component)),m=n(8),j=n.n(m),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput",placeholder:"You should be really happy right now"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"1",cols:"50",id:"textinput",placeholder:"https://en.wikipedia.org/wiki/Happiness"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e="http://localhost:8080";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,j.a.get(e).then((function(e){console.log(e),t.setState({sentimentOutput:e.data.label});var n=e.data.label;n="positive"===e.data.label?Object(s.jsx)("div",{style:{color:"green",fontSize:20},children:e.data.label}):"negative"===e.data.label?Object(s.jsx)("div",{style:{color:"red",fontSize:20},children:e.data.label}):Object(s.jsx)("div",{style:{color:"yellow",fontSize:20},children:e.data.label}),"Error"===e.data&&(n=Object(s.jsx)("div",{style:{color:"#ff2222"},children:"Error insert a valid text or URL as shown in the placeholder"})),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e="http://localhost:8080";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,j.a.get(e).then((function(e){console.log(e),t.setState({sentimentOutput:Object(s.jsx)(b,{emotions:e.data})})}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(s.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.innercomp,Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(s.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(o.a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),o(t),a(t)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),x()},9:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.63b6e201.chunk.js.map