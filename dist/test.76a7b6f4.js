// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before,.skin *::after{box-sizing: border-box;}\n\n.skin{\n    position: relative;\n    background: #ffe600;\n    min-height: 50vh;\n}\n.nose{\nposition: relative;\nborder: 10px solid black;\nborder-color:black transparent yellow transparent;\nborder-bottom: none;\nwidth: 0px;\nheight: 0px;\nleft: 50%;\ntop: 145px;\nmargin-left: -10px;\nz-index: 10;\n}\n@keyframes wave{\n    0%{ transform: rotate(0deg);}\n    33%{transform: rotate(15deg);}\n    66%{transform: rotate(-15deg);}\n    100%{transform: rotate(0deg);}\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 0.3s infinite linear\n}\n.yuan{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 14px 14px 0 0;\n    background-color:black\n}\n.eye{\n    position: absolute;\n    border:2px solid #000;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    border-radius: 50%;\n    background: #2e2e2e;\n}\n.eye::before{\n    content: '';\n    display: block;\n    width: 26px;\n    height: 26px;\n    position: relative;\n    border: 2px solid #000;\n    background: #ffffff;\n    border-radius: 50%;\n    position: relative;\n    left: 10px;\n    top: 2px;\n}\n.eye.right{\n    transform: translateX(-100px);\n}\n.eye.left{\n    transform: translateX(100px);\n}\n.mouth{\nposition:absolute;\nwidth: 200px;\nheight: 200px;\nleft: 50%;\ntop: 170px;\nmargin-left: -100px;\n}\n.mouth .up{\n   position: relative;\n    top: -20px;\n    z-index: 1;\n}\n.mouth .up .lip.left{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-radius: 0 0 0 50px;\n    position: relative;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    transform: rotate(-15deg) translateX(-53px);\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n}\n.mouth .up .lip.right{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-radius: 0 0 50px 0;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    transform: rotate(15deg) translateX(53px);\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n}\n.mouth .up .lip.left::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    right: -6px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n}\n.mouth .up .lip.right::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    left: -6px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n}\n.mouth .down{    \n    height: 160px;\n    width: 100%;\n    position: absolute;\n    top: 5px;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 1px solid black;\n    height: 1000px;\n    width: 150px;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    border-radius:  0px 0 100px 100px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    border: 1px solid #ff485f;\n    height: 280px;\n    width: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    bottom: -155px;\n    background: #ff485f;\n    border-radius: 150px;\n}\n.face{\n    position: absolute;\n    height: 88px;\n    width: 88px;\n    border: 1px solid red;\n    left: 50%;\n    top: 200px;\n    z-index: 3;\n    margin-left: -44px;\n}\n.face >img {\n    position: absolute;\n    top: 50%;   \n    left: 50%;\n}\n.face.left >img{\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n.face.left{\n    transform: translateX(-170px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(170px);\n    background: #ff0000;\n    border-radius: 50%;\n\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.76a7b6f4.js.map