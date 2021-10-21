(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});const Application_1=require("./components/Application");window["VgdbWebApp"]=new Application_1.Application;window["VgdbWebApp"].init();console.log("app.js (compiled from TypeScript) is loading properly.")},{"./components/Application":2}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Application=void 0;const Component_1=require("./Component");const Device_1=require("./Device");class Application extends Component_1.Component{constructor(){super();this.name="VGDB";this.baseUrl="/";this.addComponent(Device_1.Device);console.log("Created a new "+this.constructor.name)}setConfigs(configs){for(const config in configs){if(config==="baseUrl"){this.setBaseUrl(configs[config])}}}setBaseUrl(baseUrl){this.baseUrl=baseUrl}getBaseUrl(){return this.baseUrl}init(){console.log("The application has been initialized.")}}exports.Application=Application},{"./Component":3,"./Device":4}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Component=void 0;class Component{constructor(){this.components={}}addComponent(component){}removeComponent(component_name){for(let component of this.components){if(component.getName()===component_name){}}}getComponents(){return this.components}getComponent(name){this.components.forEach(component=>{if(component.getName()===name){return component}});return null}}exports.Component=Component},{}],4:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Device=void 0;const Component_1=require("./Component");class Device extends Component_1.Component{constructor(){super();this.name="Device"}init(){}isMobile(){return navigator["userAgentData"].mobile}isDesktop(){}}exports.Device=Device},{"./Component":3}]},{},[1]);
