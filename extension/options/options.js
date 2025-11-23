/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/couli/dist/couli.js":
/*!******************************************!*\
  !*** ./node_modules/couli/dist/couli.js ***!
  \******************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_533__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_533__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_533__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_533__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_533__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_533__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_533__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_533__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_533__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_533__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_533__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_533__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_533__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_533__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_533__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_533__(__nested_webpack_require_533__.s = "./src/Component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_4163__) {

"use strict";


var _attributes = __nested_webpack_require_4163__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _index = __nested_webpack_require_4163__(/*! ./values/index */ "./src/values/index.js");

var _dom = __nested_webpack_require_4163__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _object = __nested_webpack_require_4163__(/*! ./helpers/object */ "./src/helpers/object.js");

var _copy = __nested_webpack_require_4163__(/*! ./helpers/copy */ "./src/helpers/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _checkers = __nested_webpack_require_4163__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _EventHandler = __nested_webpack_require_4163__(/*! ./EventHandler */ "./src/EventHandler.js");

var _State = __nested_webpack_require_4163__(/*! ./State */ "./src/State.js");

var _StateSetup = __nested_webpack_require_4163__(/*! ./StateSetup */ "./src/StateSetup.js");

var _View = __nested_webpack_require_4163__(/*! ./View */ "./src/View.js");

var _prepareSettings = __nested_webpack_require_4163__(/*! ./prepareSettings */ "./src/prepareSettings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-undef
module.exports = {
  define: defineComponent,
  change: changeComponent,
  apply: applyComponent,
  extract: extractComponent
};

var COMPONENT_PREFIX = 'c';
var COMPONENT_COUNTER = 0;

function defineComponent(markup) {
  var bindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var subComponents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


  if ((0, _checkers.isObject)(markup)) {
    return defineComponent(bindings, styles, subComponents, markup);
  }

  var name = COMPONENT_PREFIX + COMPONENT_COUNTER++;

  var componentHTMLMarkup = (0, _dom.cloneHTMLMarkup)(markup);
  componentHTMLMarkup.classList.add(name);

  var component = {
    name: name,
    bindings: _defineProperty({}, _attributes2.default.SELF, {}),
    stateId: name,
    statePath: [name],
    stateNames: {},
    markup: componentHTMLMarkup,
    evaluate: {},
    links: {},
    isComponent: true,
    outerNames: {},
    _links: {},
    subComponents: subComponents
  };

  (0, _StateSetup.gatherBindingsFromMarkup)(componentHTMLMarkup, component, true);

  var normalizedOptions = (0, _prepareSettings.prepareBindingsSettings)(bindings);
  (0, _copy2.default)(component, normalizedOptions);

  component.styles = (0, _prepareSettings.prepareStyles)(styles, component);
  (0, _StateSetup.prepareBindings)(component, component.stateId, { statePath: [], styles: component.styles, links: {}, stateNames: component.stateNames });

  return component;
}

function changeComponent(component, changes) {
  var newComponent = (0, _copy2.default)({}, component);

  (0, _object.forEach)(changes, function (bindingChanges, bindingName) {
    (0, _object.forEach)((0, _prepareSettings.prepareBindingSettings)(bindingChanges), function (newFn, type) {

      if (_index.BEHAVIOUR_TYPES.includes(type)) {
        (0, _object.forEach)(newFn, function (newEventFn, eventName) {
          var prevFn = newComponent.bindings[bindingName][type][eventName];
          newComponent.bindings[bindingName][type][eventName] = function (e, accessor) {
            return newEventFn.call(null, e, accessor, prevFn);
          };
        });

        return;
      }

      var prevFn = newComponent.bindings[bindingName][type];
      newComponent.bindings[bindingName][type] = function (vals, accessor) {
        return newFn.call(null, vals, accessor, prevFn);
      };
    });
  });

  return newComponent;
}

function applyComponent(containerEl, component) {
  var element = (0, _State.createElement)(component);
  (0, _View.createAndAppendStyles)(component.styles);
  (0, _EventHandler.setupEventHandlers)(element);
  containerEl.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.BASE);
  element.el.setAttribute(_attributes2.default.COMPONENT_ID, element.id);
  containerEl.appendChild(element.el);
  return element.ci;
}

function extractComponent(node) {
  var componentNode = (0, _dom.walkUpNodes)(node, function (el) {
    return el.getAttribute(_attributes2.default.COMPONENT_TYPE);
  });
  var rootNode = (0, _dom.walkUpNodes)(componentNode, function (el) {
    return el.getAttribute(_attributes2.default.COMPONENT_TYPE) == _attributes2.default.BASE;
  });
  var componentId = rootNode.firstElementChild.getAttribute(_attributes2.default.COMPONENT_ID);
  var statePath = (0, _State.getStatePathFromNode)(componentNode);
  return (0, _State.createAccessor)([componentId].concat(statePath));
}

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_9307__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupEventHandlers = undefined;

var _attributes = __nested_webpack_require_9307__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __nested_webpack_require_9307__(/*! ./helpers/object */ "./src/helpers/object.js");

var _dom = __nested_webpack_require_9307__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _State = __nested_webpack_require_9307__(/*! ./State */ "./src/State.js");

var _StateChange = __nested_webpack_require_9307__(/*! ./StateChange */ "./src/StateChange.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setupEventHandlers = setupEventHandlers;


function setupEventHandlers(element) {
  var eventHandlers = {};
  gatherAllEventHandlers(element, eventHandlers);

  var markup = element.el;

  var _loop = function _loop(eventName) {
    markup.addEventListener(eventName, function (e) {
      return executeAllCallbacksInList(e, eventHandlers[eventName]);
    });
  };

  for (var eventName in eventHandlers) {
    _loop(eventName);
  }
}

function gatherAllEventHandlers(component, gatheredHandlers) {
  gatherEventHandlers(component, gatheredHandlers);

  if (component.bindings) {
    (0, _object.forEach)(component.bindings, function (binding) {
      return gatherAllEventHandlers(binding, gatheredHandlers);
    });
  }

  if (component.listItem) {
    gatherAllEventHandlers(component.listItem, gatheredHandlers);
  }
}

function gatherEventHandlers(binding, gatheredHandlers) {
  if (!binding.events) {
    return;
  }

  for (var eventName in binding.events) {
    if (!gatheredHandlers[eventName]) {
      gatheredHandlers[eventName] = {};
    }

    gatheredHandlers[eventName][binding.shortId] = binding.events[eventName];
  }
}

function executeAllCallbacksInList(e, eventHandlers) {
  decorateEvent(e);
  (0, _StateChange.startTransaction)();

  var handlers = [];
  var rootNode = (0, _dom.walkUpNodes)(e.target, function (el) {
    return el.getAttribute(_attributes2.default.COMPONENT_TYPE) == _attributes2.default.BASE;
  }, function (el) {
    var bindingId = el.getAttribute(_attributes2.default.BINDING_ID);
    var eventHandler = eventHandlers[bindingId];

    if (eventHandler) {
      handlers.push({ fn: eventHandler, path: (0, _State.getStatePathFromNode)(el) });
    }
  });

  var componentId = rootNode.firstElementChild.getAttribute(_attributes2.default.COMPONENT_ID);

  for (var i = 0; i < handlers.length; i++) {
    var _handlers$i = handlers[i],
        fn = _handlers$i.fn,
        path = _handlers$i.path;

    fn.call(this, e, (0, _State.createAccessor)([componentId].concat(path)));

    if (e.propagationStopped) {
      break;
    }
  }

  (0, _StateChange.applyChanges)();
}

function decorateEvent(e) {
  var stopPropagation = e.stopPropagation.bind(e);
  e.stopPropagation = function () {
    e.propagationStopped = true;
    stopPropagation();
  };
}

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_12506__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatePathFromNode = exports.prepareChangeObject = exports.setState = exports.getComponent = exports.createAccessor = exports.createElement = exports.modifyToListBinding = exports.createBinding = undefined;

var _attributes = __nested_webpack_require_12506__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __nested_webpack_require_12506__(/*! ./helpers/object */ "./src/helpers/object.js");

var _common = __nested_webpack_require_12506__(/*! ./helpers/common */ "./src/helpers/common.js");

var _index = __nested_webpack_require_12506__(/*! ./values/index */ "./src/values/index.js");

var _dom = __nested_webpack_require_12506__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _ComponentLookupError = __nested_webpack_require_12506__(/*! ./errors/ComponentLookupError */ "./src/errors/ComponentLookupError.js");

var _ComponentLookupError2 = _interopRequireDefault(_ComponentLookupError);

var _ForbiddenBindingNameError = __nested_webpack_require_12506__(/*! ./errors/ForbiddenBindingNameError */ "./src/errors/ForbiddenBindingNameError.js");

var _ForbiddenBindingNameError2 = _interopRequireDefault(_ForbiddenBindingNameError);

var _StateChange = __nested_webpack_require_12506__(/*! ./StateChange */ "./src/StateChange.js");

var _checkers = __nested_webpack_require_12506__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.createBinding = createBinding;
exports.modifyToListBinding = modifyToListBinding;
exports.createElement = createElement;
exports.createAccessor = createAccessor;
exports.getComponent = getComponent;
exports.setState = setState;
exports.prepareChangeObject = prepareChangeObject;
exports.getStatePathFromNode = getStatePathFromNode;


var COMPONENTS = {};
var STATE = {};
var ELEMENT_COUNTER = 1;

function setState(path, value) {
  (0, _object.set)(STATE, path, value);
}

function getState(path) {
  return (0, _object.get)(STATE, path);
}

function createElement(component) {
  var id = ELEMENT_COUNTER++;
  var name = component.name;

  var element = COMPONENTS[id] = {
    id: id,
    bindings: _defineProperty({}, name, component)
  };

  STATE[id] = {};

  (0, _StateChange.createStateNodes)([id, name]);

  (0, _StateChange.sendToRenderQueue)([id], _defineProperty({}, name, false));
  (0, _StateChange.applyChanges)();
  element.el = STATE[id][name][_attributes2.default.SELF].el;
  element.ci = createAccessor([id, name]);

  return element;
}

function createAccessor(path) {
  var values = getState(path);
  var component = getComponent(path);

  var accessor = {
    component: component,
    values: values,
    path: path,
    index: +path[path.length - 2],
    startTransaction: _StateChange.startTransaction,
    applyChanges: _StateChange.applyChanges,
    up: function up(level) {
      return moveUpStatePath(level, path.slice());
    },
    down: function down(additionalPath) {
      return createAccessor(path.concat(additionalPath));
    },
    set: function set(changeObj) {
      return (0, _StateChange.setValues)(prepareChangeObject(changeObj), path);
    },
    get: function get(key) {
      return getValues(accessor, key, path);
    },
    markup: function markup(key) {
      return key ? accessor.values[key].el : accessor.values[_attributes2.default.SELF].el;
    }
  };

  if ((0, _checkers.isArray)(values)) {
    modifyToArrayAccessor(accessor);
  }

  return accessor;
}

function prepareChangeObject(changeObj) {
  return (0, _object.map)(changeObj, function (v) {
    var forced = (0, _checkers.isObject)(v) && Object.keys(v)[0] === 'force';

    return {
      value: forced ? v['force'] : v,
      type: 'value',
      force: forced
    };
  });
}

function getComponent(path) {
  var component = COMPONENTS[path[0]];

  for (var i = 1; i < path.length; i++) {
    component = component.bindings[path[i]];

    if (component.isList && i !== path.length - 1) {
      component = component.listItem;
      i += 2;
    }
  }

  return component;
}

function getValues(accessor, key, statePath) {
  var values = accessor.values;
  var component = accessor.component;

  if (!key) {
    return getValuesTree(values, component, {});
  }

  var binding = component.bindings[key];
  if (binding.isList || binding.isComponent) {
    return createAccessor(statePath.concat(key));
  }

  return values[key].value;
}

function getValuesTree(values, component, valuesTree) {
  (0, _object.forEach)(values, function (vals, bindingName) {
    if ((0, _common.has)(_index.RESERVED_BINDING_NAMES, bindingName)) {
      return;
    }

    var binding = component.bindings[bindingName];

    if (binding.isList) {
      valuesTree[bindingName] = [];
      values[bindingName].forEach(function (el, i) {
        var itemValues = valuesTree[bindingName][i] = {};
        getValuesTree(values[bindingName][i][binding.listItem.name], binding.listItem, itemValues);
      });
      return;
    }

    if (binding.isComponent) {
      var componentValues = valuesTree[bindingName] = {};
      getValuesTree(values[bindingName], binding, componentValues);
    }

    valuesTree[component._links[bindingName] || bindingName] = vals.value;
  });

  return valuesTree;
}

function moveUpStatePath(level, statePath) {
  var lastIdx = statePath.length;

  if (level === '' || level === ' ') {
    return createAccessor(statePath.slice(0, 2));
  }

  if ((0, _checkers.isString)(level)) {
    while (lastIdx--) {
      if (statePath[lastIdx] === level) {
        break;
      }
    }
  } else {
    level = level || 1;
    while (lastIdx-- && level--) {
      if ((0, _checkers.isNumber)(+statePath[lastIdx - 1])) {
        lastIdx--;
      }
    }
  }

  if (lastIdx < 1) {
    throw new _ComponentLookupError2.default(level, statePath);
  }

  return createAccessor(statePath.slice(0, lastIdx + 1));
}

function modifyToArrayAccessor(accessor) {
  Object.assign(accessor, {
    get: function get(num) {
      return createAccessor(accessor.path.concat(num, accessor.component.listItem.name));
    },

    push: function push(els) {
      return (0, _StateChange.modifyList)('add', { start: accessor.values.length, els: els }, accessor);
    },
    unshift: function unshift(els) {
      return (0, _StateChange.modifyList)('add', { start: 0, els: els }, accessor);
    },
    add: function add(start, els) {
      return (0, _StateChange.modifyList)('add', { start: start, els: els }, accessor);
    },

    pop: function pop(num) {
      return (0, _StateChange.modifyList)('remove', { start: accessor.values.length - (num || 1), num: num }, accessor);
    },
    shift: function shift(num) {
      return (0, _StateChange.modifyList)('remove', { start: 0, num: num }, accessor);
    },
    remove: function remove(start, num) {
      return (0, _StateChange.modifyList)('remove', { start: start, num: num }, accessor);
    },

    length: function length() {
      return accessor.values.length;
    },
    value: function value() {
      return mapList(accessor);
    },
    forEach: function forEach(cb) {
      return iterateListValues(accessor, cb);
    },
    filter: function filter(cb) {
      return filterList(accessor, cb);
    },
    map: function map(cb) {
      return mapList(accessor, cb);
    }
  });
}

function iterateListValues(accessor, cb) {
  accessor.values.forEach(function (el, i) {
    return cb(getValuesTree(el[accessor.component.listItem.name], accessor.component.listItem, {}), i);
  });
}

function filterList(accessor, cb) {
  var newList = [];

  iterateListValues(accessor, function (el, i) {
    if (cb(el, i)) {
      newList.push(el);
    }
  });

  return newList;
}

function mapList(accessor, cb) {
  var newList = [];
  iterateListValues(accessor, function (el, i) {
    return newList.push(cb ? cb(el, i) : el);
  });
  return newList;
}

function createBinding(name, component, el) {
  if (_index.VALUE_TYPES.includes(name)) {
    throw new _ForbiddenBindingNameError2.default(name);
  }

  var componentOpts = component ? {
    id: component.stateId + _attributes2.default.STATE_DELIMITER + name,
    statePath: component.statePath,
    stateNames: component.stateNames,
    isListItem: component.isList,
    stateId: name
  } : {};

  var elOpts = el ? {
    initValue: el.value || el.innerHTML
  } : {};

  return Object.assign({
    name: name,
    listeners: [],
    markup: el,
    dependants: {},
    events: {},
    evaluate: {},
    links: {},
    bindings: _defineProperty({}, _attributes2.default.SELF, {}),
    outerNames: {},
    _links: {},
    styles: {}
  }, componentOpts, elOpts);
}

function modifyToListBinding(binding, itemMarkup) {
  binding.isList = true;

  return Object.assign(binding, {
    markup: itemMarkup,
    listItem: createBinding(itemMarkup.tagName, binding, itemMarkup)
  });
}

function getStatePathFromNode(el) {
  var indexlessStatePath = el.getAttribute(_attributes2.default.BINDING_ID).split(_attributes2.default.STATE_DELIMITER);
  indexlessStatePath.pop();

  var statePath = [];

  var elementName = void 0;
  while (elementName = (0, _common.getRealName)(indexlessStatePath.pop())) {

    if ((0, _common.has)(elementName, _attributes2.default.ITEM)) {
      elementName = elementName.slice(_attributes2.default.ITEM.length);
      el = (0, _dom.walkUpNodes)(el, function (el) {
        return el.getAttribute(_attributes2.default.ITEM_INDEX);
      });
      var idx = el.getAttribute(_attributes2.default.ITEM_INDEX);
      el = el.parentNode;
      statePath.unshift(idx, elementName);
      continue;
    }

    statePath.unshift(elementName);
  }

  return statePath;
}

/***/ }),

/***/ "./src/StateChange.js":
/*!****************************!*\
  !*** ./src/StateChange.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_22630__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendToRenderQueue = exports.applyChanges = exports.startTransaction = exports.modifyList = exports.createStateNodes = exports.setValues = undefined;

var _attributes = __nested_webpack_require_22630__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __nested_webpack_require_22630__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __nested_webpack_require_22630__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _equality = __nested_webpack_require_22630__(/*! ./helpers/equality */ "./src/helpers/equality.js");

var _equality2 = _interopRequireDefault(_equality);

var _common = __nested_webpack_require_22630__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __nested_webpack_require_22630__(/*! ./State */ "./src/State.js");

var _View = __nested_webpack_require_22630__(/*! ./View */ "./src/View.js");

var _index = __nested_webpack_require_22630__(/*! ./values/index */ "./src/values/index.js");

var _BindingNotExistsError = __nested_webpack_require_22630__(/*! ./errors/BindingNotExistsError */ "./src/errors/BindingNotExistsError.js");

var _BindingNotExistsError2 = _interopRequireDefault(_BindingNotExistsError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.setValues = setValues;
exports.createStateNodes = createStateNodes;
exports.modifyList = modifyList;
exports.startTransaction = startTransaction;
exports.applyChanges = applyChanges;
exports.sendToRenderQueue = sendToRenderQueue;


var CHANGES = { changes: {}, collecting: false };
var PROMISES_RESOLVES = [];
var LIFE_CYCLE_HANDLERS = { list: [] };

function startTransaction() {
  applyChanges();
  CHANGES.collecting = true;
}

function applyChanges() {
  var changes = CHANGES.changes;
  CHANGES.changes = {};
  (0, _View.renderChanges)(changes);
  return runLifeCycleHooks();
}

function runLifeCycleHooks() {
  var lifeCycleHandlers = LIFE_CYCLE_HANDLERS.list;
  LIFE_CYCLE_HANDLERS.list = [];
  lifeCycleHandlers.forEach(function (h) {
    return h();
  });

  if (!(0, _checkers.isEmpty)(CHANGES.changes)) {
    return applyChanges();
  }

  return finalizeTransaction();
}

function finalizeTransaction() {
  CHANGES.collecting = false;
  var resolvePromise = void 0;

  while (resolvePromise = PROMISES_RESOLVES.pop()) {
    resolvePromise(true);
  }

  return Promise.resolve(true);
}

function sendToRenderQueue(path, change) {
  (0, _object.set)(CHANGES.changes, path, change);
}

function isCollectingChanges() {
  return CHANGES.collecting;
}

function addLifeCycleHook(hookType, binding, values, accessor) {
  var hook = binding.hooks[hookType];

  LIFE_CYCLE_HANDLERS.list.push(function () {
    var name = binding.name || binding.statePath[binding.statePath.length - 1];
    var isComponent = !binding.name;
    var el = values[binding.name || _attributes2.default.SELF].el || values[_attributes2.default.SELF].el;
    var value = !binding.name ? accessor.get() : accessor.get(binding.name);
    hook({ el: el, value: value, name: name, isComponent: isComponent }, accessor);
  });
}

function createStateNodes(statePath) {
  var component = (0, _State.getComponent)(statePath);
  var valuesNode = createStateNode(component);
  (0, _State.setState)(statePath, valuesNode);

  (0, _object.forEach)(component.bindings, function (binding, bindingName) {
    if (binding.isComponent) {
      createStateNodes(statePath.concat(bindingName));
    }
  });

  var accessor = (0, _State.createAccessor)(statePath);
  addLifeCycleHook('mount', component.bindings[_attributes2.default.SELF], valuesNode, accessor, statePath.slice(-2)[0]);

  return valuesNode;
}

function createStateNode(component) {
  var valuesNodes = (0, _object.map)(component.bindings, function (binding) {
    var valueNode = binding.isList ? [] : {};

    return _index.VALUE_TYPES.reduce(function (a, key) {
      var value = void 0;

      switch (key) {
        case 'value':
        case 'html':
          value = binding.initValue || '';
          break;

        default:
          value = {};
      }

      a[key] = value;

      return a;
    }, valueNode);
  });

  return Object.assign(valuesNodes, _defineProperty({}, _attributes2.default.SELF, (0, _object.toObject)(_index.VALUE_TYPES, {})));
}

function setValues(changeValues, statePath, calledDependences) {
  calledDependences = calledDependences || [];
  var accessor = (0, _State.createAccessor)(statePath);

  if (!accessor.values) {
    accessor.values = createStateNodes(statePath);
    var start = +statePath.slice(-2)[0];
    sendToRenderQueue(statePath, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + 1 } }));
  }

  (0, _object.forEach)(changeValues, function (change, bindingName) {
    return setValue(bindingName, change, accessor, calledDependences);
  });

  addLifeCycleHook('update', accessor.component.bindings[_attributes2.default.SELF], accessor.values, accessor, statePath.slice(-2)[0]);

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function setValue(bindingName, change, accessor, calledDependences) {
  var statePath = accessor.path;
  var component = accessor.component;
  var values = accessor.values;
  var binding = component.bindings[bindingName];
  var outerBindingName = bindingName;

  if (!binding) {
    bindingName = component.outerNames[bindingName];
    binding = component.bindings[bindingName];
  }

  if (!binding) {
    throw new _BindingNotExistsError2.default(bindingName || outerBindingName, component.stateName, statePath);
  }

  if (change.type === 'value') {
    if (binding.isList) {
      setValueForList(binding, change, values[bindingName], accessor);
      updateDependants(binding.dependants, component, accessor, calledDependences);
      return;
    }

    if ((0, _checkers.isObject)(change.value) && binding.isComponent) {
      return setValueForComponent(binding, change, component, statePath);
    }
  }

  var equal = (0, _equality2.default)(values[bindingName][change.type], change.value);

  if (!equal || !(0, _checkers.isEmpty)(equal) || change.force) {
    values[bindingName][change.type] = change.value;

    if (change.type !== 'value') {
      return sendToRenderQueue(statePath.concat(bindingName), _defineProperty({}, change.type, false));
    }

    addLifeCycleHook('update', binding, values, accessor, statePath.slice(-2)[0]);
    calledDependences.push(bindingName + ':' + change.type);

    if (!binding.html) {
      setValue(bindingName, { value: change.value, type: 'html', force: change.force }, accessor, calledDependences);
    }

    var link = component.links[bindingName];
    if (link) {
      setValue(link.link, { value: change.value, type: 'value', force: change.force }, accessor.down(link.component), []);
    }

    updateDependants(binding.dependants, component, accessor, calledDependences);
  }
}

function updateDependants(dependants, component, accessor, calledDependences) {
  (0, _object.forEach)(dependants, function (dependant, dependantKey) {
    if ((0, _common.has)(calledDependences, dependantKey)) {
      return;
    }

    var values = (0, _object.mapKeys)(accessor.get(), function (k) {
      return component.outerNames[k] || k;
    });
    var newValue = component.bindings[dependant.name].evaluate[dependant.type](values, accessor);
    setValue(dependant.name, { value: newValue, type: dependant.type }, accessor, calledDependences);
  });
}

function setValueForList(binding, change, arr, accessor) {
  Object.keys(change.value).forEach(function (i) {
    return setValues((0, _State.prepareChangeObject)(change.value[i]), accessor.path.concat(binding.name, i, binding.listItem.name));
  });

  var indexEquality = (0, _equality2.default)(arr, change.value);
  var removedCount = 0;
  (0, _object.forEach)(indexEquality, function (changeObj, idx) {
    if (changeObj.remove) {
      changeObj.remove = removeListItem(arr, idx - removedCount, binding, accessor);
      removedCount++;
    }

    sendToRenderQueue(accessor.path.concat(binding.name, idx, binding.listItem.name), _defineProperty({}, _attributes2.default.FULL_CHANGE, changeObj));
  });
}

function setValueForComponent(binding, change, component, statePath) {
  setValues((0, _State.prepareChangeObject)(change.value), statePath.concat(binding.name));
}

function modifyList(action, args, accessor) {
  var arr = accessor.values;
  var listPath = accessor.path;
  var itemName = accessor.component.listItem.name;
  var start = args.start;
  var changeObj = {};

  switch (action) {
    case 'add':
      changeObj = addToList(arr, start, args.els, listPath, itemName);
      break;

    case 'remove':
      var end = start + (args.num || 1);
      changeObj = removeFromList(arr, start, end, accessor.component, accessor);
      break;
  }

  (0, _object.forEach)(changeObj, function (change, idx) {
    return sendToRenderQueue(listPath.concat(idx, itemName, _attributes2.default.FULL_CHANGE), changeObj[idx][_attributes2.default.FULL_CHANGE]);
  });

  updateDependants(accessor.component.dependants, accessor.up().component, accessor.up(), []);

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function addToList(arr, start, els, listPath, itemName) {
  els = (0, _checkers.isArray)(els) ? els : [els];

  els.forEach(function (el, i) {
    arr.splice(i + start, 0, null);
    setValues((0, _State.prepareChangeObject)(el), listPath.concat(i + start, itemName));
  });

  return _defineProperty({}, start, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + els.length } }));
}

function removeFromList(arr, start, end, listBinding, accessor) {
  var changeObj = {};

  for (var i = start; i < end; i++) {
    var removedDOMNode = removeListItem(arr, i, listBinding, accessor);
    changeObj[i] = _defineProperty({}, _attributes2.default.FULL_CHANGE, { remove: removedDOMNode });
  }

  return changeObj;
}

function removeListItem(arr, idx, listBinding, accessor) {
  var removedNode = arr.splice(idx, 1)[0][listBinding.listItem.name];
  addLifeCycleHook('remove', listBinding.listItem.bindings[_attributes2.default.SELF], removedNode, accessor, idx);
  return removedNode[_attributes2.default.SELF].el;
}

/***/ }),

/***/ "./src/StateSetup.js":
/*!***************************!*\
  !*** ./src/StateSetup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_33538__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareBindings = exports.gatherBindingsFromMarkup = undefined;

var _attributes = __nested_webpack_require_33538__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _regexp = __nested_webpack_require_33538__(/*! ./values/regexp */ "./src/values/regexp.js");

var _regexp2 = _interopRequireDefault(_regexp);

var _index = __nested_webpack_require_33538__(/*! ./values/index */ "./src/values/index.js");

var _dom = __nested_webpack_require_33538__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _object = __nested_webpack_require_33538__(/*! ./helpers/object */ "./src/helpers/object.js");

var _copy = __nested_webpack_require_33538__(/*! ./helpers/copy */ "./src/helpers/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _checkers = __nested_webpack_require_33538__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _common = __nested_webpack_require_33538__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __nested_webpack_require_33538__(/*! ./State */ "./src/State.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.gatherBindingsFromMarkup = gatherBindingsFromMarkup;
exports.prepareBindings = prepareBindings;


var SUB_COMPONENT_PREFIX = 'x';
var SUB_COMPONENT_COUNTER = 0;
var DEFAULT_HOOKS = (0, _object.toObject)(['mount', 'update', 'remove'], function () {
  return function () {};
});

function gatherBindingsFromMarkup(componentHTMLMarkup, component, firstTime) {
  if (firstTime) {
    SUB_COMPONENT_COUNTER = 0;
  }

  (0, _dom.walkNodes)(componentHTMLMarkup, function (HTMLNode) {
    var bindingOpts = inspectNode(HTMLNode, component.subComponents);

    if (!bindingOpts) {
      return;
    }

    var binding = (0, _State.createBinding)(bindingOpts.name, component, HTMLNode);

    if (bindingOpts.isComponent) {
      setSubComponent(binding, bindingOpts);
      HTMLNode.classList.add(_attributes2.default.PREFIX + binding.id);
    }

    component.bindings[binding.name] = binding;
    binding.markup.classList.add(_attributes2.default.PREFIX + binding.id, component.name + '-' + binding.name);

    if (bindingOpts.isList) {
      var itemNode = HTMLNode.children[0];
      (0, _State.modifyToListBinding)(binding, itemNode);
      var tagName = getTagName(itemNode);

      if (component.subComponents[tagName]) {
        setSubComponent(binding.listItem, prepareComponentOpts(tagName, component.subComponents[tagName]));
        return -1;
      }

      gatherBindingsFromMarkup(itemNode, binding.listItem);
      return -1;
    }
  });

  return component;
}

function setSubComponent(componentBinding, subComponentOpts) {
  var stateNames = Object.assign(componentBinding.stateNames, subComponentOpts.component.stateNames);
  var stateId = subComponentOpts.stateName + SUB_COMPONENT_PREFIX + SUB_COMPONENT_COUNTER++;

  if (!stateNames[subComponentOpts.stateName]) {
    stateId = subComponentOpts.stateName;
    componentBinding.stateNames[stateId] = true;
  }

  (0, _copy2.default)(componentBinding, subComponentOpts.component);

  return Object.assign(componentBinding, {
    id: stateId,
    stateId: stateId,
    name: stateId,
    stateName: subComponentOpts.stateName,
    statePath: componentBinding.statePath.concat(stateId),
    markup: subComponentOpts.component.markup.cloneNode(true),
    isComponent: true,
    stateNames: stateNames,
    _links: Object.assign({}, subComponentOpts.links),
    outerNames: Object.assign({}, subComponentOpts.revLinks)
  });
}

function prepareBindings(component, currentStateId, parentComponent) {
  var componentWrapper = document.createElement('div');
  component.markup.setAttribute(_attributes2.default.BINDING_ID, shortenBindingId(currentStateId + _attributes2.default.STATE_DELIMITER + _attributes2.default.SELF));
  componentWrapper.appendChild(component.markup);
  component.statePath = parentComponent.statePath.concat(component.stateId);
  component.stateNames = parentComponent.stateNames;

  var subComponents = [];

  (0, _object.forEach)(component.bindings, function (binding, bindingName) {
    var oldBindingId = binding.id;
    var newBindingId = currentStateId + _attributes2.default.STATE_DELIMITER + bindingName;
    var shortId = shortenBindingId(newBindingId);

    if (binding.markup) {
      var bindingNode = componentWrapper.querySelector('.' + _attributes2.default.PREFIX + oldBindingId);
      bindingNode.setAttribute(_attributes2.default.BINDING_ID, shortId);
      bindingNode.classList.remove(_attributes2.default.PREFIX + oldBindingId);
      bindingNode.classList.add(_attributes2.default.PREFIX + newBindingId);
    }

    Object.assign(binding, {
      statePath: component.statePath.slice(),
      hooks: Object.assign({}, DEFAULT_HOOKS, binding.hooks),
      id: newBindingId,
      shortId: shortId
    });

    prepareReactiveFuncs(binding, component);

    if (binding.isList) {
      binding.statePath.push(bindingName);
      binding.stateNames = component.stateNames;
      binding.styles = parentComponent.styles;

      prepareBindings(binding.listItem, newBindingId + _attributes2.default.STATE_DELIMITER + _attributes2.default.ITEM + binding.listItem.name, binding);
      return;
    }

    if (binding.isComponent) {
      subComponents.push(binding);
    }
  });

  setupComponentsLinks(component, parentComponent);
  component.template = component.markup.cloneNode(true);

  Object.assign(parentComponent.styles, component.styles);

  subComponents.forEach(function (subComponent) {
    prepareBindings(subComponent, currentStateId + _attributes2.default.STATE_DELIMITER + subComponent.stateId, component);
  });
}

function prepareReactiveFuncs(binding, componentData) {
  _index.VALUE_TYPES.forEach(function (type) {
    var reactiveFunc = binding[type];
    if (!reactiveFunc) {
      return;
    }

    binding.evaluate[type] = prepareReactiveFunc(binding, type, reactiveFunc, componentData);
  });
}

function prepareReactiveFunc(binding, type, reactiveFunc, componentData) {
  var dependenciesNames = getDependenciesNames(reactiveFunc);

  dependenciesNames.forEach(function (dependencyName) {
    if ((0, _checkers.isEmpty)(componentData.bindings[dependencyName])) {
      componentData.bindings[dependencyName] = (0, _State.createBinding)(dependencyName, componentData);
    }

    componentData.bindings[dependencyName].dependants[binding.name + ':' + type] = { name: binding.name, type: type };
  });

  return function (values, componentInterface) {
    return reactiveFunc.call(null, values, componentInterface);
  };
}

function getDependenciesNames(func) {
  var funcParams = getParamNames(func);
  var valuesObjRegExp = new RegExp('\\' + funcParams[0] + '\\.(\\D[^\\s\\W]+)', 'g');
  var dependenciesNames = [];
  var funcStr = func.toString();
  var dependencyName = void 0;
  while (dependencyName = valuesObjRegExp.exec(funcStr)) {
    dependenciesNames.push(dependencyName[1]);
  }
  return dependenciesNames;
}

function getParamNames(func) {
  var funcStrWithoutComments = func.toString().replace(_regexp2.default.STRIP_COMMENTS, '');
  var paramsStr = funcStrWithoutComments.slice(funcStrWithoutComments.indexOf('(') + 1, funcStrWithoutComments.indexOf(')'));
  return paramsStr.match(_regexp2.default.ARGUMENT_NAMES) || [];
}

function setupComponentsLinks(component, parentComponent) {
  Object.assign(parentComponent.links, (0, _object.map)(component.outerNames, function (k) {
    return { link: k, component: component.stateId };
  }));
}

function inspectNode(el) {
  var subComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var tagName = getTagName(el);

  if (!tagName) {
    return null;
  }

  var subComponentOpts = subComponents[tagName];

  if (subComponentOpts) {
    return prepareComponentOpts(tagName, subComponentOpts);
  }

  var name = el.getAttribute(_attributes2.default.TEMPLATE_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_BINDING);

  if (name) {
    return { name: name.trim() };
  }

  name = el.getAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);

  if (name) {
    return { name: name.trim(), isList: true };
  }
}

function getTagName(el) {
  return el.tagName && (0, _common.toCamelCase)(el.tagName.toLowerCase());
}

function prepareComponentOpts(name, obj) {
  return {
    component: obj[0],
    links: obj[1],
    revLinks: obj[1] ? (0, _object.fullMap)(obj[1], function (k, v) {
      return [v, k];
    }) : {},
    stateName: name,
    name: name,
    isComponent: true
  };
}

function shortenBindingId(id) {
  return id.split(_attributes2.default.STATE_DELIMITER).map(function (el) {
    return (0, _common.getShortName)(el);
  }).join(_attributes2.default.STATE_DELIMITER);
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_42583__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChanges = exports.createAndAppendStyles = undefined;

var _attributes = __nested_webpack_require_42583__(/*! ./values/attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _common = __nested_webpack_require_42583__(/*! ./helpers/common */ "./src/helpers/common.js");

var _object = __nested_webpack_require_42583__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __nested_webpack_require_42583__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _State = __nested_webpack_require_42583__(/*! ./State */ "./src/State.js");

var _dom = __nested_webpack_require_42583__(/*! ./helpers/dom */ "./src/helpers/dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createAndAppendStyles = createAndAppendStyles;
exports.renderChanges = renderChanges;


var render = {
  html: applyMarkup,
  class: applyClasses,
  style: applyStyles,
  attrs: applyAttributes
};

function renderChanges(changes) {
  (0, _object.forEach)(changes, function (componentChanges, elementId) {
    var componentId = Object.keys(componentChanges)[0];
    var componentAccessor = (0, _State.createAccessor)([elementId, componentId]);
    applyMarkup(componentAccessor.component, componentAccessor.values, [elementId, componentId], componentChanges[componentId]);
  });
}

function applyMarkup(component, value, statePath, changes) {
  if (!component.markup) {
    return;
  }

  if (component.isList) {
    return renderList(component, value, statePath, changes);
  }

  if (component.isComponent) {
    return renderComponent(component, value, statePath, changes);
  }

  value = (0, _checkers.isUndefined)(value) ? '' : value;

  if (component.markup.tagName === 'INPUT') {
    component.markup.value = value;
    return;
  }

  (0, _dom.rewriteToNode)(component.markup, value);

  return component;
}

function renderComponent(component, value, statePath, changes) {
  if (changes) {
    return updateComponent(component, value, statePath, changes);
  }

  return drawComponent(value, statePath);
}

function drawComponent(values, statePath) {
  var accessor = (0, _State.createAccessor)(statePath);
  var component = accessor.component;

  var itemWrapper = document.createElement('div');
  var itemMarkup = component.template.cloneNode(true);
  values[_attributes2.default.SELF].el = itemMarkup;
  itemWrapper.appendChild(itemMarkup);

  itemMarkup.setAttribute(_attributes2.default.COMPONENT_TYPE, component.isListItem ? _attributes2.default.ITEM : _attributes2.default.COMPONENT);

  (0, _object.forEach)(render, function (renderFunc, renderType) {
    if (component.bindings[_attributes2.default.SELF][renderType]) {
      renderFunc({ markup: itemMarkup }, values[_attributes2.default.SELF][renderType]);
    }
  });

  (0, _object.forEach)(component.bindings, function (binding, bindingName) {
    if (!binding.markup) {
      return;
    }

    var bindingNode = itemWrapper.querySelector('.' + _attributes2.default.PREFIX + binding.id);
    bindingNode.classList.remove(_attributes2.default.PREFIX + binding.id);

    if (binding.isComponent) {
      var childStatePath = statePath.concat(bindingName);
      var childMarkup = drawComponent(values[bindingName], childStatePath);
      (0, _dom.replaceNodes)(bindingNode, childMarkup);
      return;
    }

    values[bindingName].el = bindingNode;

    if (binding.isList) {
      renderList(binding, values[bindingName], statePath.concat(bindingName));
      return;
    }

    (0, _object.forEach)(render, function (renderFunc, renderType) {
      if (renderType === 'html' && binding.html === null || binding.markup.children.length) {
        return;
      }
      renderFunc({ markup: bindingNode }, values[bindingName][renderType], statePath);
    });
  });

  return itemWrapper.children[0];
}

function updateComponent(component, values, statePath, changes) {
  var componentMarkup = values[_attributes2.default.SELF].el;

  (0, _object.forEach)(changes, function (change, bindingName) {

    if (bindingName === _attributes2.default.SELF) {

      for (var changeType in change) {
        render[changeType]({ markup: componentMarkup }, values[_attributes2.default.SELF][changeType]);
      }
      return;
    }

    var binding = component.bindings[bindingName];
    var statePathToBinding = statePath.concat(bindingName);

    if (binding.isComponent || binding.isList) {
      applyMarkup(binding, values[bindingName], statePathToBinding, changes[bindingName]);
      return;
    }

    var el = values[bindingName].el;

    for (var _changeType in change) {
      var newValue = values[bindingName][_changeType];
      render[_changeType]({ markup: el }, newValue);
    }
  });
}

function renderList(listComponent, itemsValues, statePath, changes) {
  if (changes) {
    return updateList(listComponent, itemsValues, statePath, changes);
  }

  var listFragment = buildList(listComponent, itemsValues, statePath);

  var listNode = itemsValues.el;
  var parentNode = listNode.parentNode;
  var nextNode = listNode.nextElementSibling;
  (0, _dom.removeNode)(listNode);

  var isComponent = listNode.getAttribute(_attributes2.default.COMPONENT_TYPE);
  listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.LIST);
  if (isComponent) {
    listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.COMPONENT_LIST);
  }

  (0, _dom.emptyNode)(listNode);
  listNode.appendChild(listFragment);

  parentNode.insertBefore(listNode, nextNode);
}

function buildList(listComponent, itemsValues, statePath, range) {
  var start = range ? range.start : 0;
  var end = range ? range.end : itemsValues.length + 1;

  var listFragment = document.createDocumentFragment();
  itemsValues.slice(start, end).forEach(function (itemValue, itemIndex) {
    var newItemIndex = +start + itemIndex;
    var statePathToItem = statePath.concat([newItemIndex, listComponent.listItem.name]);
    var listItemMarkup = drawComponent(itemValue[listComponent.listItem.name], statePathToItem);

    listItemMarkup.setAttribute(_attributes2.default.ITEM_INDEX, newItemIndex);

    listFragment.appendChild(listItemMarkup);
  });

  return listFragment;
}

function updateList(listBinding, itemsValues, statePath, changes) {
  var listNode = itemsValues.el;
  var itemName = listBinding.listItem.name;
  var itemsChanges = (0, _object.splitPiece)(changes, function (v, k) {
    return (0, _checkers.isNumber)(+k);
  });
  var removedCount = 0;
  var end = 0;

  for (var changeType in changes) {
    render[changeType]({ markup: listNode }, itemsValues[changeType]);
  }

  (0, _object.forEach)(itemsChanges, function (change, i) {
    change = change[itemName];
    var statePathToItem = statePath.concat(i, itemName);
    var itemAccessor = (0, _State.createAccessor)(statePathToItem);

    if (!change[_attributes2.default.FULL_CHANGE]) {
      updateComponent(itemAccessor.component, itemsValues[i][itemName], statePathToItem, change);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].add && i >= end) {
      var start = change[_attributes2.default.FULL_CHANGE].add.start;
      end = change[_attributes2.default.FULL_CHANGE].add.end;

      fixIndexes(listNode, start, end - start);
      var listFragment = buildList(listBinding, itemsValues, statePath, { start: start, end: end });

      if (end === itemsValues.length) {
        listNode.appendChild(listFragment);
        return;
      }

      listNode.insertBefore(listFragment, listNode.children[start]);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].remove) {
      (0, _dom.removeNode)(change[_attributes2.default.FULL_CHANGE].remove);
      fixIndexes(listNode, i - removedCount++, -1);
    }
  });
}

function fixIndexes(listNode, start, diff) {
  var itemsNodes = Array.prototype.slice.call(listNode.children, start);

  itemsNodes.forEach(function (itemNode) {
    var prevIdx = itemNode.getAttribute(_attributes2.default.ITEM_INDEX);
    var newIdx = +prevIdx + diff;

    itemNode.setAttribute(_attributes2.default.ITEM_INDEX, newIdx);
  });
}

function applyAttributes(binding, attributes) {
  Object.assign(binding.markup, attributes);
}

function applyClasses(binding, classes) {
  for (var className in classes) {
    if (className) {
      if (classes[className]) {
        binding.markup.classList.add(className);
      } else {
        binding.markup.classList.remove(className);
      }
    }
  }
}

function applyStyles(binding, styles) {
  Object.assign(binding.markup.style, normalizeStyles(styles));
}

function createAndAppendStyles(styleObj) {
  var styleStr = '';
  for (var selector in styleObj) {
    var styles = styleObj[selector];
    styleStr += selector + '{';
    normalizeStyles(styles);
    for (var attr in styles) {
      var value = styles[attr];
      styleStr += (0, _common.toDashCase)(attr) + ':' + value + ';';
    }
    styleStr += '}\n';
  }
  var styleEl = document.createElement('style');
  styleEl.appendChild(document.createTextNode(styleStr));
  document.head.appendChild(styleEl);
}

function normalizeStyles(styles) {
  for (var attr in styles) {
    if ((0, _checkers.isNumber)(styles[attr])) {
      styles[attr] = styles[attr] + 'px';
    }
  }
  return styles;
}

/***/ }),

/***/ "./src/errors/BindingNotExistsError.js":
/*!*********************************************!*\
  !*** ./src/errors/BindingNotExistsError.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BindingNotExistsError = function (_Error) {
  _inherits(BindingNotExistsError, _Error);

  function BindingNotExistsError(bindingName, componentName, path) {
    _classCallCheck(this, BindingNotExistsError);

    var _this = _possibleConstructorReturn(this, (BindingNotExistsError.__proto__ || Object.getPrototypeOf(BindingNotExistsError)).call(this));

    _this.message = "Unable to access '" + bindingName + "' binding on '" + componentName + "' component on path (" + path.join(' -> ') + ") because it doesn't exist.";
    return _this;
  }

  return BindingNotExistsError;
}(Error);

exports.default = BindingNotExistsError;

/***/ }),

/***/ "./src/errors/ComponentLookupError.js":
/*!********************************************!*\
  !*** ./src/errors/ComponentLookupError.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_54131__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkers = __nested_webpack_require_54131__(/*! ../helpers/checkers */ "./src/helpers/checkers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentLookupError = function (_Error) {
  _inherits(ComponentLookupError, _Error);

  function ComponentLookupError(level, path) {
    _classCallCheck(this, ComponentLookupError);

    var _this = _possibleConstructorReturn(this, (ComponentLookupError.__proto__ || Object.getPrototypeOf(ComponentLookupError)).call(this));

    var additionalInfo = void 0;
    if ((0, _checkers.isNumber)(level)) {
      additionalInfo = level + " exceeds the number of components in the chain";
    } else {
      additionalInfo = "'" + level + "' component doesn't exist in the chain";
    }

    _this.message = "Unable to reach the component. " + additionalInfo + " (" + path.join(' -> ') + ").";
    return _this;
  }

  return ComponentLookupError;
}(Error);

exports.default = ComponentLookupError;

/***/ }),

/***/ "./src/errors/ForbiddenBindingNameError.js":
/*!*************************************************!*\
  !*** ./src/errors/ForbiddenBindingNameError.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_56312__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __nested_webpack_require_56312__(/*! ../values/index */ "./src/values/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForbiddenBindingNameError = function (_Error) {
  _inherits(ForbiddenBindingNameError, _Error);

  function ForbiddenBindingNameError(bindingName) {
    _classCallCheck(this, ForbiddenBindingNameError);

    var _this = _possibleConstructorReturn(this, (ForbiddenBindingNameError.__proto__ || Object.getPrototypeOf(ForbiddenBindingNameError)).call(this));

    _this.message = "Can't declare a binding with the name '" + bindingName + "' because it's forbidden name.\nList of forbidden binding names: " + _index.VALUE_TYPES.join(', ');
    return _this;
  }

  return ForbiddenBindingNameError;
}(Error);

exports.default = ForbiddenBindingNameError;

/***/ }),

/***/ "./src/helpers/checkers.js":
/*!*********************************!*\
  !*** ./src/helpers/checkers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isObjectInBrackets = isObjectInBrackets;
exports.isObjectInDoubleBrackets = isObjectInDoubleBrackets;
exports.isString = isString;
exports.isHTMLString = isHTMLString;
exports.isNumber = isNumber;
exports.isDOMElement = isDOMElement;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.isLink = isLink;


function isFunction(obj) {
  return getObjectType(obj) === '[object Function]';
}

function isArray(obj) {
  return getObjectType(obj) === '[object Array]';
}

function isObject(obj) {
  return getObjectType(obj) === '[object Object]';
}

function isObjectInBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObject(obj[0]);
}

function isObjectInDoubleBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObjectInBrackets(obj[0]);
}

function isString(obj) {
  return getObjectType(obj) === '[object String]';
}

function isHTMLString(obj) {
  return isString(obj) && obj.indexOf('<') === 0;
}

function isNumber(obj) {
  return getObjectType(obj) === '[object Number]' && obj === obj;
}

function isDOMElement(obj) {
  return obj && typeof obj.tagName !== 'undefined';
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

function isLink(obj) {
  var slashIdx = obj.indexOf('/');
  return [0, 1, 2].some(function (idx) {
    return idx === slashIdx;
  });
}

function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  if (isArray(obj) || isString(obj)) {
    return !obj.length;
  }

  return !Object.keys(obj).length;
}

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_60265__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRealName = exports.getShortName = exports.toCamelCase = exports.toDashCase = exports.getFalsePaths = exports.has = undefined;

var _checkers = __nested_webpack_require_60265__(/*! ./checkers */ "./src/helpers/checkers.js");

var _object = __nested_webpack_require_60265__(/*! ./object */ "./src/helpers/object.js");

exports.has = has;
exports.getFalsePaths = getFalsePaths;
exports.toDashCase = toDashCase;
exports.toCamelCase = toCamelCase;
exports.getShortName = getShortName;
exports.getRealName = getRealName;


var NAMES = {
  real: {},
  short: []
};

function getShortName(name) {
  if (NAMES.real[name] > -1) {
    return NAMES.real[name];
  }

  var shortName = NAMES.short.push(name);
  return NAMES.real[name] = shortName - 1;
}

function getRealName(num) {
  return NAMES.short[num];
}

function has(obj, el) {
  if ((0, _checkers.isObject)(obj)) {
    var keys = Object.keys(obj);
    return has(keys, el);
  }

  return obj.indexOf(el) >= 0;
}

function getFalsePaths(obj) {
  var onlyFalsePaths = {};
  getFalsePath(obj, onlyFalsePaths, []);
  return onlyFalsePaths;
}

function getFalsePath(obj, onlyFalsePaths, path) {
  for (var key in obj) {
    if ((0, _checkers.isObject)(obj[key])) {
      getFalsePath(obj[key], onlyFalsePaths, path.concat(key));
      continue;
    }

    if (obj[key] !== true) {
      (0, _object.set)(onlyFalsePaths, path.concat(key), obj[key]);
    }
  }
}

function toDashCase(str) {
  return str.replace(/([A-Z])/g, function (match) {
    return '-' + match[0].toLowerCase();
  });
}

function toCamelCase(str) {
  return str.replace(/-(.)/g, function (match) {
    return match[1].toUpperCase();
  });
}

/***/ }),

/***/ "./src/helpers/copy.js":
/*!*****************************!*\
  !*** ./src/helpers/copy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_62219__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkers = __nested_webpack_require_62219__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = copy;


function copy(destination, source) {
  if (!destination) {
    return copy({}, source);
  }

  for (var key in source) {

    if ((0, _checkers.isUndefined)(source[key])) {
      continue;
    }

    if (source.hasOwnProperty(key) && (0, _checkers.isObject)(source[key])) {
      if (!destination[key]) {
        destination[key] = {};
      }
      copy(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isArray)(source[key])) {
      if (!destination[key]) {
        destination[key] = [];
      }
      copyArray(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isDOMElement)(source[key])) {
      destination[key] = source[key].cloneNode(true);
      continue;
    }

    destination[key] = source[key];
  }

  return destination;
}

function copyArray(destination, source) {
  for (var i = 0; i < source.length; i++) {
    if ((0, _checkers.isObject)(source[i])) {
      destination[i] = destination[i] || {};
      copy(destination[i], source[i]);
      continue;
    }

    if ((0, _checkers.isArray)(source[i])) {
      destination[i] = destination[i] || [];
      copyArray(destination[i], source[i]);
      continue;
    }

    destination[i] = source[i];
  }

  return destination;
}

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_63893__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkUpNodes = exports.emptyNode = exports.rewriteToNode = exports.insertBeforeNode = exports.removeNode = exports.walkNodes = exports.collectHTMLNodes = exports.cloneHTMLMarkup = exports.replaceNodes = undefined;

var _checkers = __nested_webpack_require_63893__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.replaceNodes = replaceNodes;
exports.cloneHTMLMarkup = cloneHTMLMarkup;
exports.collectHTMLNodes = collectHTMLNodes;
exports.walkNodes = walkNodes;
exports.removeNode = removeNode;
exports.insertBeforeNode = insertBeforeNode;
exports.rewriteToNode = rewriteToNode;
exports.emptyNode = emptyNode;
exports.walkUpNodes = walkUpNodes;


function replaceNodes(original, replacement) {
  original.parentNode.replaceChild(replacement, original);
  return replacement;
}

function insertBeforeNode(el, nextEl) {
  nextEl.parentNode.insertBefore(el, nextEl);
}

function cloneHTMLMarkup(markup) {
  var markupStr = (0, _checkers.isHTMLString)(markup.trim()) ? markup : document.querySelector(markup).innerHTML;
  return convertStringToHTML(markupStr);
}

function convertStringToHTML(markupString) {
  var parser = new DOMParser();
  var parsedDocument = parser.parseFromString(markupString, 'text/html');
  return parsedDocument.body.firstElementChild;
}

function walkNodes(node, cb) {
  if (cb(node) === -1) {
    return;
  }

  Array.prototype.slice.call(node.children).forEach(function (el) {
    return walkNodes(el, cb);
  });
}

function walkUpNodes(el, stopCondition, cb) {
  var curEl = el;

  while (!stopCondition(curEl)) {
    if (curEl.tagName === 'BODY') {
      return curEl;
    }

    cb && cb(curEl);
    curEl = curEl.parentNode;
  }

  return curEl;
}

function collectHTMLNodes(root, isWanted) {
  var nodes = [];
  walkNodes(root, function (el) {
    return isWanted(el) ? nodes.push(el) : '';
  });
  return nodes;
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}

function rewriteToNode(node, text) {
  emptyNode(node);
  writeToNode(node, text);
}

function writeToNode(node, text) {
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function emptyNode(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

/***/ }),

/***/ "./src/helpers/equality.js":
/*!*********************************!*\
  !*** ./src/helpers/equality.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_66448__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkers = __nested_webpack_require_66448__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = areEqual;


function areEqual(first, second) {
  if ((0, _checkers.isUndefined)(first) || (0, _checkers.isUndefined)(second)) {
    return false;
  }

  if ((typeof first === 'undefined' ? 'undefined' : _typeof(first)) !== (typeof second === 'undefined' ? 'undefined' : _typeof(second))) {
    return false;
  }

  var parentNode = { childNode: {} };

  if ((0, _checkers.isArray)(second)) {
    checkKeysEquality(first ? first.map(function (el) {
      return el;
    }) : [], second.map(function (el) {
      return el;
    }), parentNode);
  } else if ((0, _checkers.isObject)(second)) {
    checkKeysEquality(first, second, parentNode);
  } else {
    return first === second;
  }

  return parentNode.childNode;
}

function checkKeysEquality(first, second, parentNode) {
  for (var key in second) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(first[key])) {
        parentNode.childNode[key] = { add: true };
      }
      continue;
    }

    if (first[key] !== second[key]) {
      parentNode.childNode[key] = false;
    }
  }

  for (var _key in first) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(second[_key])) {
        parentNode.childNode[_key] = { remove: true };
      }
      continue;
    }

    if (first[_key] !== second[_key]) {
      parentNode.childNode[_key] = false;
    }
  }

  return parentNode;
}

/***/ }),

/***/ "./src/helpers/object.js":
/*!*******************************!*\
  !*** ./src/helpers/object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_68543__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPiece = exports.fullMap = exports.toObject = exports.filter = exports.mapKeys = exports.map = exports.forEach = exports.addConstFields = exports.remove = exports.set = exports.get = undefined;

var _checkers = __nested_webpack_require_68543__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.get = get;
exports.set = set;
exports.remove = remove;
exports.addConstFields = addConstFields;
exports.forEach = forEach;
exports.map = map;
exports.mapKeys = mapKeys;
exports.filter = filter;
exports.toObject = toObject;
exports.fullMap = fullMap;
exports.splitPiece = splitPiece;


function get(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length; i++) {

    try {
      value = value[path[i]];
    } catch (e) {
      return value;
    }
  }
  return value;
}

function set(obj, path, value) {
  if (!path.length) {
    if ((0, _checkers.isObject)(value)) {
      return Object.assign(obj, value);
    }
    return obj = value;
  }

  var dest = obj;
  for (var i = 0; i < path.length - 1; i++) {
    if (!dest[path[i]]) {
      dest = dest[path[i]] = {};
    } else {
      dest = dest[path[i]];
    }
  }

  if ((0, _checkers.isObject)(value)) {
    dest[path[i]] = dest[path[i]] || {};
    Object.assign(dest[path[i]], value);
  } else {
    dest[path[i]] = value;
  }

  return obj;
}

function remove(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length - 1; i++) {
    value = value[path[i]];
  }

  delete value[path[i]];
}

function addConstFields(obj, fields) {
  var _loop = function _loop(field) {
    Object.defineProperty(obj, field, {
      get: function get() {
        return fields[field];
      },
      set: function set() {
        throw new Error("Trying to redefine const field '" + field + "'");
      }
    });
  };

  for (var field in fields) {
    _loop(field);
  }
}

function forEach(obj, cb) {
  for (var key in obj) {
    var prop = obj[key];
    cb(prop, key, obj);
  }
}

function map(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    newObj[key] = cb(prop, key, obj);
  }
  return newObj;
}

function mapKeys(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var newKey = cb(key, prop, obj);
    newObj[newKey] = prop;
  }
  return newObj;
}

function splitPiece(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
      delete obj[key];
    }
  }
  return newObj;
}

function fullMap(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var res = cb(key, prop, obj);
    newObj[res[0] || res.key || res.k] = res[1] || res['value'] || res['v'];
  }
  return newObj;
}

function filter(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
    }
  }
  return newObj;
}

function toObject(arr, val) {
  var newObj = {};
  arr.forEach(function (v) {
    newObj[v] = (0, _checkers.isFunction)(val) ? val(v) : val;
  });
  return newObj;
}

/***/ }),

/***/ "./src/prepareSettings.js":
/*!********************************!*\
  !*** ./src/prepareSettings.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_71937__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareStyles = exports.prepareBindingsSettings = exports.prepareBindingSettings = undefined;

var _object = __nested_webpack_require_71937__(/*! ./helpers/object */ "./src/helpers/object.js");

var _State = __nested_webpack_require_71937__(/*! ./State */ "./src/State.js");

var _shortnames = __nested_webpack_require_71937__(/*! ./values/shortnames */ "./src/values/shortnames.js");

var _shortnames2 = _interopRequireDefault(_shortnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.prepareBindingSettings = prepareBindingSettings;
exports.prepareBindingsSettings = prepareBindingsSettings;
exports.prepareStyles = prepareStyles;


function prepareBindingsSettings(settings) {
  var normalizedSettings = { bindings: {} };

  (0, _object.forEach)(settings, function (value, key) {
    var binding = (0, _State.createBinding)(key);
    Object.assign(binding, prepareBindingSettings(value));
    normalizedSettings.bindings[key] = binding;
  });

  return normalizedSettings;
}

function prepareBindingSettings(settings) {
  var normalizedSettings = {};

  (0, _object.forEach)(settings, function (value, key) {

    for (var i = 0; i < _shortnames2.default.length; i++) {
      var shortNames = _shortnames2.default[i];

      if (shortNames.names[key]) {
        if (!shortNames.group) {
          normalizedSettings[shortNames.names[key]] = value;
          return;
        }

        if (!normalizedSettings[shortNames.group]) {
          normalizedSettings[shortNames.group] = {};
        }

        normalizedSettings[shortNames.group][shortNames.names[key]] = value;
        return;
      }
    }

    normalizedSettings[key] = value;
  });

  return normalizedSettings;
}

function prepareStyles(styleArg, component) {
  return (0, _object.mapKeys)(styleArg, function (key) {
    return key.split(',').map(function (selector) {
      return selector.trim();
    }).map(function (selector) {

      var className = '.' + component.name;

      if (selector) {
        var mainSelector = selector.split(' ')[0].split('::')[0].split(':')[0];
        var isBinding = component.bindings[mainSelector] && !!mainSelector;
        var space = selector.startsWith(':') ? '' : ' ';
        var prefix = isBinding ? className + '-' : '';
        className += space + prefix + selector;
      }

      return className;
    }).join(',');
  });
}

/***/ }),

/***/ "./src/values/attributes.js":
/*!**********************************!*\
  !*** ./src/values/attributes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIB_NAME = 'x';
var ATTR_PREFIX = 'data-';
var PREFIX = LIB_NAME + '-';
var TEMPLATE_BINDING = PREFIX + 'b';
var TEMPLATE_LIST_BINDING = PREFIX + 'lb';
var BINDING_ID = ATTR_PREFIX + PREFIX + 'id';
var COMPONENT_ID = ATTR_PREFIX + PREFIX + 'cid';
var ITEM_INDEX = ATTR_PREFIX + PREFIX + 'dx';
var COMPONENT_TYPE = ATTR_PREFIX + PREFIX + 'tp';
var ITEM_SUFFIX = 'i';
var STATE_DELIMITER = '-';
var SELF = '';
var FULL_CHANGE = ' _full_change_ ';

var BASE = '1';
var COMPONENT = '2';
var LIST = '3';
var ITEM = '_item_';
var COMPONENT_LIST = '5';

exports.default = {
  PREFIX: PREFIX,
  TEMPLATE_BINDING: TEMPLATE_BINDING,
  TEMPLATE_LIST_BINDING: TEMPLATE_LIST_BINDING,
  BINDING_ID: BINDING_ID,
  COMPONENT_ID: COMPONENT_ID,
  ITEM_INDEX: ITEM_INDEX,
  COMPONENT_TYPE: COMPONENT_TYPE,
  ITEM_SUFFIX: ITEM_SUFFIX,
  STATE_DELIMITER: STATE_DELIMITER,
  BASE: BASE,
  COMPONENT: COMPONENT,
  LIST: LIST,
  ITEM: ITEM,
  SELF: SELF,
  FULL_CHANGE: FULL_CHANGE,
  COMPONENT_LIST: COMPONENT_LIST
};

/***/ }),

/***/ "./src/values/index.js":
/*!*****************************!*\
  !*** ./src/values/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_75961__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESERVED_BINDING_NAMES = exports.BEHAVIOUR_TYPES = exports.VALUE_TYPES = undefined;

var _attributes = __nested_webpack_require_75961__(/*! ./attributes */ "./src/values/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALUE_TYPES = exports.VALUE_TYPES = ['style', 'class', 'value', 'attrs', 'html'];

var BEHAVIOUR_TYPES = exports.BEHAVIOUR_TYPES = ['events', 'hooks', 'listItem'];

var RESERVED_BINDING_NAMES = exports.RESERVED_BINDING_NAMES = VALUE_TYPES.concat(BEHAVIOUR_TYPES, _attributes2.default.SELF);

/***/ }),

/***/ "./src/values/regexp.js":
/*!******************************!*\
  !*** ./src/values/regexp.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

exports.default = {
  STRIP_COMMENTS: STRIP_COMMENTS,
  ARGUMENT_NAMES: ARGUMENT_NAMES
};

/***/ }),

/***/ "./src/values/shortnames.js":
/*!**********************************!*\
  !*** ./src/values/shortnames.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var VALUE_SHORTNAMES = {
  _s: 'style',
  _c: 'class',
  _v: 'value',
  _a: 'attrs',
  _h: 'html'
};

var EVENT_SHORTNAMES = {
  _eab: 'abort',
  _eld: 'load',
  _eer: 'error',

  _ef: 'focus',
  _efi: 'focusin',
  _efo: 'focusout',
  _eb: 'blur',

  _eas: 'animationstart',
  _eac: 'animationcanceled',
  _eae: 'animationend',
  _eai: 'animationiteration',

  _ets: 'transitionstart',
  _etc: 'transitioncancel',
  _ete: 'transitionend',
  _etr: 'transitionrun',

  _efr: 'reset',
  _efs: 'submit',
  _ech: 'change',

  _ekd: 'keydown',
  _ekp: 'keypress',
  _eku: 'keyup',

  _emc: 'click',
  _emx: 'contextmenu',
  _emd: 'mousedown',
  _eme: 'mouseenter',
  _eml: 'mouseleave',
  _emm: 'mousemove',
  _emo: 'mouseover',
  _emt: 'mouseout',
  _emu: 'mouseup',
  _empc: 'pointerlockchange',
  _empe: 'pointerlockerror',
  _emw: 'wheel',
  _ems: 'select',

  _ed: 'drag',
  _ede: 'dragend',
  _edr: 'dragenter',
  _eds: 'dragstart',
  _edl: 'dragleave',
  _edo: 'dragover',
  _edd: 'drop',

  _emcp: 'canplay',
  _emcpt: 'canplaythrough',
  _emdc: 'duractionchange',
  _emet: 'emptied',
  _emnd: 'ended',
  _emld: 'loadeddata',
  _emlmd: 'loadedmetadata',
  _emps: 'pause',
  _empl: 'play',
  _emplg: 'playing',
  _emrc: 'ratechange',
  _emsk: 'seeked',
  _emskg: 'seeking',
  _emst: 'stalled',
  _emsd: 'suspend',
  _emtu: 'timeupdate',
  _emvc: 'volumechange',
  _emwt: 'waiting'
};

var HOOK_SHORTNAMES = {
  _hu: 'update',
  _hm: 'mount',
  _hr: 'remove'
};

exports.default = [{ names: VALUE_SHORTNAMES }, { group: 'events', names: EVENT_SHORTNAMES }, { group: 'hooks', names: HOOK_SHORTNAMES }];

/***/ })

/******/ });
});

/***/ }),

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{ var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
    throw new Error("This script should only be loaded in a browser extension.");
  }
  if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };
      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }
        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }
          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };
      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };
      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },
          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }
            if (!(prop in target)) {
              return undefined;
            }
            let value = target[prop];
            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });
              return value;
            }
            cache[prop] = value;
            return value;
          },
          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },
          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },
          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },
        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },
        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });
      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */
        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {} /* wrappers */, {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }
          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }
              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });
      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };
      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }
        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }
        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };
      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./src/background/common.js":
/*!**********************************!*\
  !*** ./src/background/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPECIAL_PAGES: () => (/* binding */ SPECIAL_PAGES),
/* harmony export */   STRING_FILTERS: () => (/* binding */ STRING_FILTERS),
/* harmony export */   has: () => (/* binding */ has)
/* harmony export */ });
function has (str, substr) {
  return str.indexOf(substr) >= 0;
}

const STRING_FILTERS = {
  "+url": (obj, str) => obj.url.toLowerCase().includes(str),
  "+title": (obj, str) =>
    obj.title !== null && obj.title.toLowerCase().includes(str),
  "+urlortitle": (obj, str) =>
    (obj.title !== null && obj.title.toLowerCase().includes(str)) ||
    has(obj.url.toLowerCase(), str),
  "-url": (obj, str) => !obj.url.toLowerCase().includes(str),
  "-title": (obj, str) =>
    obj.title !== null && !obj.title.toLowerCase().includes(str),
};

const SPECIAL_PAGES = {
  'settings': '/options/options.html',
  'help': '/help/help.html',
};


/***/ }),

/***/ "./src/background/messages.js":
/*!************************************!*\
  !*** ./src/background/messages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _reactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactions */ "./src/background/reactions.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  switchPopup,
  sendTagData,
  buildPage,
  setupClientPage,
});

async function switchPopup (tab) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_1__["default"].getTabState(tab.id);
  
  if (typeof tabState === 'undefined') {
    return await initializePopup(tab);
  }

  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('popupState', { open: !tabState.popupOpen }).then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setPopupState(tab.id, !tabState.popupOpen));
}

async function initializePopup (tab) {
  return browser.tabs.executeScript({ file: '/page-script.js' })
    .then(() => _state__WEBPACK_IMPORTED_MODULE_1__["default"].setTabState(tab.id, { ...tab, popupOpen: true }))
    .then(() => (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('saveTabId', { tabId: tab.id }))
}

async function sendTagData ({ tabId }) {
  const data = await _reactions__WEBPACK_IMPORTED_MODULE_2__["default"].getData({ tabId });
  (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('getData', data);
}

function buildPage ( tabId, list, pageNum, totalCount, scrollY) {
  (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToTab)(tabId, 'buildPage', { list, pageNum, totalCount, scrollY });
}

function setupClientPage (tabState) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToTab)(tabState.tabId, 'setupClientPage', tabState);
}


/***/ }),

/***/ "./src/background/parse.js":
/*!*********************************!*\
  !*** ./src/background/parse.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACE_REGEXP: () => (/* binding */ SPACE_REGEXP),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/background/common.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseRawOptions);

const EXTENSION_PREFIX = 'h';
const SPACE_REGEXP = /\s+/g;
const DEFAULT_START = new Date(0);
const DEFAULT_END = new Date(9999, 11, 31);

const DATE_REGEXPS = [
  { type: 'FullYear', regexp: /\/(\d{4})\// },
  { type: 'Month', regexp: /\/(\d{1,2})\// },
  { type: 'Date', regexp: /^(?!\/)(\d{1,2})\// },
  { type: 'Hours', regexp: /(\d{1,2})\:/ },
  { type: 'Minutes', regexp: /\:(\d{1,2})/ },
];

const DATE_TYPES = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes'];

const TIME_FRAMES = {
  FullYear: { start: () => 0, end: () => 9999 },
  Month: { start: () => 0, end: () => 11 },
  Date: { start: () => 1, end: getLastDayOfMonth },
  Hours: { start: () => 0, end: () => 23 },
  Minutes: { start: () => 0, end: () => 59 },
};

const LAST_DAYS_OF_MONTHS = [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const SORT_TYPES = ['date', 'visit', 'url', 'title']
const REAL_SORT_TYPES = []
  .concat( SORT_TYPES.map((type) =>  type + '>') )
  .concat( SORT_TYPES.map((type) =>  type[0] + '>') )
  .concat( SORT_TYPES.map((type) =>  type + '<') )
  .concat( SORT_TYPES.map((type) =>  type[0] + '<') );

function parseRawOptions (rawString) {
  const rawOptions = rawString.split(SPACE_REGEXP).filter((str) => !!str);
  const options = { base: [], timeFrames: [], sort: [], tags: [], query: rawString, fullQuery: EXTENSION_PREFIX + ' ' + rawString };
  parseOptions(rawOptions, options, 'base');
  flattenTimes (options);

  if (!options.timeFrames.length) {
    options.timeFrames.push({ start: DEFAULT_START, end: DEFAULT_END });
  }

  if (options.tags.length) {
    options['+urlortitle'] = (options['+urlortitle'] || []).concat( options.base );
  }

  return options;
}

function parseOptions (rawOptions, options, curOption) {
  for (let i = 0; i < rawOptions.length; i++) {
    const word = rawOptions[i];
    
    if (isExactDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: createDate(word, 'end') });
      continue;
    }

    if (isStartDate(word)) {
      options.timeFrames.push({ start: createDate(word, 'start'), end: DEFAULT_END });
      continue;
    }

    if (isEndDate(word)) {
      options.timeFrames.push({ start: DEFAULT_START, end: createDate(word, 'end') });
      continue;
    }

    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.has)(REAL_SORT_TYPES, word)) {
      options.sort.push(word);
      continue;
    }

    if (isTag(word)) {
      options.tags.push( word.slice(1) );
      continue;
    }

    if (_common__WEBPACK_IMPORTED_MODULE_0__.STRING_FILTERS[word]) {
      if (!options[word]) {
        options[word] = [];
      }

      return parseOptions(rawOptions.slice(i + 1), options, word);
    }

    options[curOption].push(word);
  }
}

function flattenTimes (options) {
  const flattenedTimes = [];

  let cur;
  let next;
  for (let i = 0; i < options.timeFrames.length; i++) {
    cur = options.timeFrames[i];
    next = options.timeFrames[i + 1];

    if (next && cur.start < next.start && cur.end > next.start && cur.end < next.end) {
      options.timeFrames[i + 1] = { start: next.start, end: cur.end };
      continue;
    }

    if (next && cur.end > next.end && cur.start < next.end && cur.start > next.start) {
      options.timeFrames[i + 1] = { start: cur.start, end: next.end };
      continue;
    }

    if (next && cur.start < next.start && cur.end > next.end) {
      options.timeFrames[i + 1] = cur;
      continue;
    }

    if (next && cur.start > next.start && cur.end < next.end) {
      continue;
    }

    flattenedTimes.push(cur);
  }

  options.timeFrames = flattenedTimes;
}

function createDate (dateArg, borderType) {
  const dateStr = dateArg.slice(1);
  const date = new Date();
  let autoSetDateStartIdx = 0;
  
  DATE_REGEXPS.forEach((test) => {
    const match = test.regexp.exec(dateStr);
    
    if (match) {
      let number = match[1];
      autoSetDateStartIdx = DATE_TYPES.indexOf(test.type) + 1;
      
      if (test.type === 'Month') {
        number--;
      }

      date['set' + test.type](number);
    }

  });

  DATE_TYPES.slice(autoSetDateStartIdx).forEach((dateType) =>
    date['set' + dateType](TIME_FRAMES[dateType][borderType](date)));

  return date;
}

function getLastDayOfMonth (date) {
  const month = date.getMonth();

  if (month !== 1) {
    return LAST_DAYS_OF_MONTHS[month];
  }

  return LAST_DAYS_OF_MONTHS[month][ isLeapYear(date.getFullYear()) ];
}

function isLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return 1;
  }

  return 0;
}

function isExactDate (str) {
  return /^\=[\/\:]?\d+/.test(str);
}

function isStartDate (str) {
  return /^\+[\/\:]?\d+/.test(str);
}

function isEndDate (str) {
  return /^\-[\/\:]?\d+/.test(str);
}

function isTag (str) {
  return /^!.*/.test(str);
}


/***/ }),

/***/ "./src/background/postProcess.js":
/*!***************************************!*\
  !*** ./src/background/postProcess.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/background/common.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postProcess);

function postProcess (results, options) {
  const filteredResults = filterResults(results, options);
  const sortedResults = sortResults(filteredResults, options.sort);
  return sortedResults;
}

function filterResults (results, options) {

  for (let key in options) {
    if (_common__WEBPACK_IMPORTED_MODULE_0__.STRING_FILTERS[key]) {
      const strings = options[key];
      strings.forEach((string) => {
        results = results.filter((obj) => _common__WEBPACK_IMPORTED_MODULE_0__.STRING_FILTERS[key](obj, string.toLowerCase()));
      });
    }
  }

  return results;
}

function sortResults (results, sortRules) {
  let orderedResults = results;

  sortRules.forEach((rule) => {

    switch (rule) {
      case 'u>':
      case 'url>':
        orderedResults.sort((a, b) => compareObjectStrings(a, b, "url"));
        break;
      case 'u<':
      case 'url<':
        orderedResults.sort((a, b) => compareObjectStrings(b, a, "url"));
        break;
      case 't>':
      case 'title>':
        orderedResults.sort((a, b) => compareObjectStrings(a, b, "title"));
        break;
      case 't<':
      case 'title<':
        orderedResults.sort((a, b) => compareObjectStrings(b, a, "title"));
        break;
      case 'd>':
      case 'date>':
        orderedResults.sort((a, b) => a.lastVisitTime - b.lastVisitTime);
        break;
      case 'd<':
      case 'date<':
        orderedResults.sort((a, b) => b.lastVisitTime - a.lastVisitTime);
        break;
      case 'v>':
      case 'visit>':
        orderedResults.sort((a, b) => a.visitCount - b.visitCount);
        break;
      case 'v<':
      case 'visit<':
        orderedResults.sort((a, b) => b.visitCount - a.visitCount);
        break;
    }

  });

  return orderedResults;
}

function compareObjectStrings (a, b, key) {
  return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
}


/***/ }),

/***/ "./src/background/reactions.js":
/*!*************************************!*\
  !*** ./src/background/reactions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/background/search.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags */ "./src/background/tags.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse */ "./src/background/parse.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show */ "./src/background/show.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/background/messages.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common */ "./src/background/common.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  movePage,
  jumpToPage,
  getData,
  addTagToPage,
  removeTagFromPage,
  getAllTags,
  createTag,
  removeTag,
  continueBuildingPage,
  saveSearchQuery,
  removeSearchQuery,
  startSearch,
  openPage,
  historyPagePrepared,
  removeAllEntries,
  removeOneEntry,
  getSavedSearches,
});

const CONTENT_PAGE_URL = '/history_page/index.html';

function movePage (message) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(message.tabId);
  const newPageNum = increment(tabState.pageNum, message.inc, [0, tabState.totalPages - 1]);
  tabState.pageNum = newPageNum;
  (0,_show__WEBPACK_IMPORTED_MODULE_4__["default"])(tabState);
}

function increment (num, inc, range) {
  const newNum = num + inc;
  if (newNum > range[1]) {
    return range[0];
  }

  if (newNum < range[0]) {
    return range[1];
  }

  return newNum;
}

function jumpToPage (message) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(message.tabId);

  if (message.pageNum > tabState.totalPages || message.pageNum < 1) {
    return;
  }

  tabState.pageNum = message.pageNum - 1;
  (0,_show__WEBPACK_IMPORTED_MODULE_4__["default"])(tabState);
}

async function getData ({ forPopup }) {
  const pageData = await (0,_common_interaction__WEBPACK_IMPORTED_MODULE_6__.getCurrentTab)();

  let recentlyVisitedPages = Promise.resolve();
  let assignedTags = Promise.resolve();
  let favIconUrl = null;
  if (forPopup) {
    const domain = extractDomain(pageData.url);
    assignedTags = _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData);
    recentlyVisitedPages = _search__WEBPACK_IMPORTED_MODULE_1__["default"].run(domain + ' +^url ' + domain, _state__WEBPACK_IMPORTED_MODULE_0__["default"].visitedPagesLength());
    favIconUrl = pageData.favIconUrl;
  };
  
  return {
    allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(),
    assignedTags: await assignedTags,
    savedSearches: await _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSavedSearches(),
    recentlyVisitedPages: await recentlyVisitedPages,
    favIconUrl,
  }
}

async function addTagToPage ({ tag }) {
  const allExistingTags = await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].create(tag);

  const pageData = await (0,_common_interaction__WEBPACK_IMPORTED_MODULE_6__.getCurrentTab)();
  await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].addToPage(tag, pageData);
  const tagsForPage = await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData);
  
  return { allExistingTags, assignedTags: tagsForPage };
}

async function removeTagFromPage ({ tag }) {
  const pageData = await (0,_common_interaction__WEBPACK_IMPORTED_MODULE_6__.getCurrentTab)();
  await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].removeFromPage(tag, pageData);
  return { assignedTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getForPage(pageData) };
}

async function getAllTags () {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].getAll() };
}

async function createTag ({ tag }) {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].create(tag) }
}

async function removeTag ({ tag }) {
  return { allExistingTags: await _tags__WEBPACK_IMPORTED_MODULE_2__["default"].remove(tag) };
}

async function startSearch ({ query }) {
  const tab = await browser.tabs.create({ active: true, url: CONTENT_PAGE_URL });
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].setTabState(tab.id, { tab, query });
}

async function historyPagePrepared (message) {
  const { tabId } = message;
  const { query  } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(tabId);
  (0,_common_interaction__WEBPACK_IMPORTED_MODULE_6__.sendMessageToTab)(tabId, "saveQuery", { query });
}

async function continueBuildingPage ({ tabId }) {
  const { query, tab } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(tabId);
  const options = (0,_parse__WEBPACK_IMPORTED_MODULE_3__["default"])(query);

  const searchResults = await _search__WEBPACK_IMPORTED_MODULE_1__["default"].run(options);
  await _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveResults(tab.id, searchResults, 0);
  const tabState = await _state__WEBPACK_IMPORTED_MODULE_0__["default"].initTabState(tab.id, searchResults, options);
  await _messages__WEBPACK_IMPORTED_MODULE_5__["default"].setupClientPage(tabState);
  (0,_show__WEBPACK_IMPORTED_MODULE_4__["default"])(tabState);
}

function saveSearchQuery ({ query, queryName }) {
  return _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveSearch(query, queryName).then(() => ({ saved: true }));
}

async function removeSearchQuery ({ query }) {
  return { savedSearches: await _state__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch(query), saved: false };
}

async function getSavedSearches () {
  return { savedSearches: await _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSavedSearches() };
}

function openPage ({ url }){
  browser.tabs.create({ active: true, url: _common__WEBPACK_IMPORTED_MODULE_7__.SPECIAL_PAGES[url] || url });
}

function extractDomain (url) {
  return url.split('/').slice(0, 3).join('/').split('#')[0].split('?')[0];
}

async function removeAllEntries ({ tabId }) {
  const { totalPages } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(tabId);

  for (let i = 0; i < totalPages; i++) {
    const resultsPage = await _state__WEBPACK_IMPORTED_MODULE_0__["default"].getResultsPage(tabId, i);

    for (let j = 0; j < resultsPage.length; j++) {
      await browser.history.deleteUrl({ url: resultsPage[j].url });
    } 
  }

  browser.tabs.remove([tabId]);
}

async function removeOneEntry ({ tabId, id, scrollY }) {
  const tabState = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getTabState(tabId);
  const { results: searchResults, pageNum } = tabState;
  const idx = searchResults.findIndex((record) => record.id == id);

  await browser.history.deleteUrl({ url: searchResults[idx].url });
  searchResults.splice(idx, 1);

  await _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveResults(tabId, searchResults, 0);
  const newTabState = await _state__WEBPACK_IMPORTED_MODULE_0__["default"].initTabState(tabId, searchResults, tabState);

  (0,_show__WEBPACK_IMPORTED_MODULE_4__["default"])(newTabState, scrollY);
}


/***/ }),

/***/ "./src/background/search.js":
/*!**********************************!*\
  !*** ./src/background/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ "./src/background/tags.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/background/state.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse */ "./src/background/parse.js");
/* harmony import */ var _postProcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postProcess */ "./src/background/postProcess.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");






const MAX_RESULTS = 2147483647;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  run,
  visitsForHistory: getVisitsForHistoryEntries,
});

function run (options, maxResults) {
  if (typeof options === 'string') {
    return run( (0,_parse__WEBPACK_IMPORTED_MODULE_2__["default"])(options) , maxResults);
  }

  if (options.tags.length) {
    return searchTags(options.tags);
  }
  
  return searchHistory(options).then((results) => (0,_postProcess__WEBPACK_IMPORTED_MODULE_3__["default"])(results, options).slice(0, maxResults || MAX_RESULTS));
}

function searchHistory ({ base, timeFrames }) {
  const searchTerms = base.join(' ');
  const historyRequests = timeFrames.map((timeFrame) => makeHistoryRequest(searchTerms, timeFrame.start.getTime(), timeFrame.end.getTime()));

  return Promise.all(historyRequests).then(flattenArray);
}

function makeHistoryRequest (text, startTime, endTime) {
  return browser.history.search({ text, startTime, endTime, maxResults: MAX_RESULTS });
}

function flattenArray (arr) {
  return arr.reduce((a, c) => {
    a.splice.apply(a, [a.length, 0].concat(c));
    return a;
  },[]);
}

function searchTags (tags) {
  const tagedPagesRequests = tags.map((tag) => _tags__WEBPACK_IMPORTED_MODULE_0__["default"].getTagedPages(tag));
  return Promise.all(tagedPagesRequests).then(getIntersections);
}

function getIntersections(arrs) {
  let pages = {};

  arrs.forEach((arr, i) => {

    if (!i) {
      pages = arr;
    } else {
      pages = getIntersection(pages, arr);
    }

  });

  for (let key in pages) {
    pages[key].url = key;
  }

  return Object.values(pages);
}

function getIntersection (a, b) {
  const usedKeys = {};
  const intersection = {};

  for (let key in a) {
    if (b[key]) {
      intersection[key] = a[key];
    }
    usedKeys[key] = true;
  }

  for (let key in b) {
    if (usedKeys[key]) {
      continue;
    }

    if (a[key]) {
      intersection[key] = a[key];
    }
  }

  return intersection;
}

function getVisitsForHistoryEntries (historyList, opts) {
  if (!historyList) {
    return Promise.resolve([]);
  }

  if (historyList.visitsLoaded) {
    return Promise.resolve(historyList);
  }

  const visitRequests = historyList.map((historyItem) => getVisits(historyItem, opts.timeFrames));
  return Promise.all(visitRequests)
    .then((historyWithVisits) => {
      historyWithVisits.visitsLoaded = true;
      return _state__WEBPACK_IMPORTED_MODULE_1__["default"].saveResultsPage(opts.tabId, opts.pageNum, historyWithVisits).then(() => historyWithVisits);
    });
}

function getVisits (historyItem, timeFrames) {
  return browser.history.getVisits({ url: historyItem.url })
    .then((visits) => {
      historyItem.visitTimes = visits.filter((visitItem) => isWithinTimeFrames(visitItem, timeFrames));
      return historyItem;
    });
}

function isWithinTimeFrames (visitItem, timeFrames) {
  let acceptable = false;

  for (let i = 0; i < timeFrames.length; i++) {

    if (visitItem.visitTime >= timeFrames[i].start && visitItem.visitTime <= timeFrames[i].end) {
      acceptable = true;
      break;
    }

  }

  return acceptable;
}


/***/ }),

/***/ "./src/background/show.js":
/*!********************************!*\
  !*** ./src/background/show.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showResults)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/background/search.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/background/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/background/state.js");




function showResults (opts, scrollY) {
  _state__WEBPACK_IMPORTED_MODULE_2__["default"].getResultsPage(opts.tabId, opts.pageNum)
    .then((list) => _search__WEBPACK_IMPORTED_MODULE_0__["default"].visitsForHistory(list, opts)
    .then((listWithVisits) => _messages__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage(opts.tabId, listWithVisits, opts.pageNum + 1, opts.totalCount, scrollY)))
}


/***/ }),

/***/ "./src/background/state.js":
/*!*********************************!*\
  !*** ./src/background/state.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SETTINGS: () => (/* binding */ SETTINGS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const RESULTS_SAVE_KEY = 'results';
const SEARCHES_SAVE_KEY = 'searches'

const COLOR_SCHEMES = {
  grey: '210, 210, 210',
  green: '169, 255, 148',
  blue: '162, 210, 254',
  orange: '254, 208, 162',
  pink: '255, 208, 247',
};

const DEFAULT_SETTINGS = {
  PAGE_SIZE: 300,
  COLOR: 'grey',
  VISITED_PAGES_LENGTH: 10,
};

const STATE = {
  tabs: {},
};

const SETTINGS = {
  COLOR_SCHEMES,
  DEFAULT: DEFAULT_SETTINGS,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTabState,
  setTabState,
  setPopupState,
  loadSettings,
  onSettingsChange,
  saveResults,
  removeResults,
  initTabState,
  removeTabState,
  getResultsPage,
  saveResultsPage,
  removeResultsPage,
  getSavedSearches,
  saveSearch,
  removeSearch,
  visitedPagesLength
});

function getTabState (tabId) {
  return STATE.tabs[ tabId ];
}

function setTabState (tabId, state) {
  return STATE.tabs[ tabId ] = state;
}

function setPopupState (tabId, state) {
  return STATE.tabs[ tabId ].popupOpen = state;
}

async function initTabState (tabId, results, options) {
  const savedSearch = await getSearch(options.query);

  return setTabState(tabId, {
    pageNum: 0,
    ...options,
    results,
    totalCount: results.length,
    totalPages: Math.ceil(results.length / SETTINGS.PAGE_SIZE),
    tabId,
    color: COLOR_SCHEMES[SETTINGS.COLOR],
    isSaved: savedSearch,
    queryName: savedSearch.queryName || "",
  });
}

function loadSettings () {
  const settings_names = Object.keys(DEFAULT_SETTINGS);
  browser.storage.local.get(settings_names).then((savedOptions) => {
    
    for (let key in DEFAULT_SETTINGS) {
      if (typeof savedOptions[key] === 'undefined') {
        savedOptions[key] = DEFAULT_SETTINGS[key];
        browser.storage.local.set({ [key]: savedOptions[key] });
      }
    }

    Object.assign(SETTINGS, savedOptions);
  });
}

function onSettingsChange (changes) {
  for (let key in changes) {
    if (DEFAULT_SETTINGS[key]) {
      SETTINGS[key] = changes[key].newValue;
    }
  }
}

function saveResults (tabId, results, pageNum) {
  const list = results.slice(pageNum * SETTINGS.PAGE_SIZE, pageNum * SETTINGS.PAGE_SIZE + SETTINGS.PAGE_SIZE);
  
  if (!list.length) {
    return Promise.resolve(results);
  }

  return saveResultsPage(tabId, pageNum, list).then(() => saveResults(tabId, results, pageNum + 1));
}

function removeResults (tabId, pageNum, pagesLength) {
  if (pageNum > pagesLength) {
    return true;
  }

  return removeResultsPage(tabId, pageNum).then(() => removeResults(tabId, pageNum + 1, pagesLength));
}

function removeTabState (tabId) {
  removeResults(tabId, 0, getTabState(tabId).totalPages || 0);
  setTabState(tabId, undefined);
}

function getResultsPage (tabId, pageNum) {
  const listKey = tabId + RESULTS_SAVE_KEY + pageNum;
  return browser.storage.local.get(listKey).then((savedResults) => savedResults[listKey]);
}

function saveResultsPage (tabId, pageNum, list) {
  return browser.storage.local.set({ [tabId + RESULTS_SAVE_KEY + pageNum]: list });
}

function removeResultsPage (tabId, pageNum) {
  return browser.storage.local.remove(tabId + RESULTS_SAVE_KEY + pageNum);
}

function getSavedSearches () {
  return browser.storage.local.get(SEARCHES_SAVE_KEY).then((result) => result[SEARCHES_SAVE_KEY] || {});
}

function setSavedSearches (searches) {
  return browser.storage.local.set({ [SEARCHES_SAVE_KEY]: searches });
}

async function getSearch (searchString) {
  const allSearches = await getSavedSearches();
  if (Object.keys(allSearches).includes(searchString)) {
    return { query: searchString, queryName: allSearches[searchString] };
  }
  
  return false;
} 

async function saveSearch (searchString, name) {
  const allSearches = await getSavedSearches();
  
  if (!Object.keys(allSearches).includes(searchString)) {
    allSearches[searchString] = name;
    await setSavedSearches(allSearches);
  }
  
  return allSearches;
}

async function removeSearch (searchString) {
  const allSearches = await getSavedSearches();
  delete allSearches[searchString];
  await setSavedSearches(allSearches);
  return allSearches;
}

function visitedPagesLength () {
  return SETTINGS.VISITED_PAGES_LENGTH;
}


/***/ }),

/***/ "./src/background/tags.js":
/*!********************************!*\
  !*** ./src/background/tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const ALL_TAGS_KEY = 'ALL_TAGS';
const TAG_KEY_PREFIX = 'TAG_KEY';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createTag,
  remove: removeTag,
  getAll: getAllTags,
  setAll: setAllTags,
  getForPage: getTagsForPage,
  addToPage: addTagToPage,
  removeFromPage: removeTagFromPage,
  getTagedPages: getTagedPages,
  setTagedPages: setTagedPages,
});

function getAllTags () {
  return browser.storage.local.get(ALL_TAGS_KEY).then((savedResults) => savedResults[ALL_TAGS_KEY] || []);
}

function setAllTags (tags) {
  return browser.storage.local.set({ [ALL_TAGS_KEY]: tags }).then(() => tags);
}

function getTagedPages (tag) {
  const tagKey = TAG_KEY_PREFIX + tag
  return browser.storage.local.get(tagKey).then((savedResults) => savedResults[tagKey] || {});
}

function setTagedPages (tag, pages) {
  const tagKey = TAG_KEY_PREFIX + tag;
  return browser.storage.local.set({ [tagKey]: pages });
}

async function addTagToPage (tag, { url, title }) {
  const tagsPages = await getTagedPages(tag);
  tagsPages[url] = { title };
  return setTagedPages(tag, tagsPages)
}

async function removeTagFromPage (tag, { url}) {
  const tagsPages = await getTagedPages(tag);
  delete tagsPages[ url ];
  return setTagedPages(tag, tagsPages);
}

async function getTagsForPage ({ url }) {
  const allExistingTags = await getAllTags();
  
  const tagsForPage = [];

  for (let i = 0; i < allExistingTags.length; i++) {
    const tag = allExistingTags[i];
    const tagsPages = await getTagedPages(tag);

    if (tagsPages[ url ]) {
      tagsForPage.push(tag);
    }
  }

  return tagsForPage;
}

async function createTag (tag) {
  const allExistingTags = await getAllTags();

  if (!allExistingTags.includes(tag)) {
    allExistingTags.push(tag);
    allExistingTags.sort();
    await setAllTags(allExistingTags);
  }

  return allExistingTags;
}

async function removeTag (tag) {
  const allTags = await getAllTags();
  allTags.splice( allTags.indexOf(tag), 1);
  browser.storage.local.remove(TAG_KEY_PREFIX + tag);
  return setAllTags(allTags);
}


/***/ }),

/***/ "./src/common/interaction.js":
/*!***********************************!*\
  !*** ./src/common/interaction.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentTab: () => (/* binding */ getCurrentTab),
/* harmony export */   onMessage: () => (/* binding */ onMessage),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage),
/* harmony export */   sendMessageFromBackground: () => (/* binding */ sendMessageFromBackground),
/* harmony export */   sendMessageToBackground: () => (/* binding */ sendMessageToBackground),
/* harmony export */   sendMessageToTab: () => (/* binding */ sendMessageToTab)
/* harmony export */ });
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

const PROMISES_RESOLVES = {};

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => tabs[0]);
}

function sendMessage (action, payload, tabId) {
  const { callbackId, promise } = payload.callbackId || saveCallback(action);
  const message = { action, callbackId, ...payload };
  
  if (window.__IS_BACKGROUND_SCRIPT__ && !payload.__TO_BACKGROUND__) {

    let getTabId = Promise.resolve(tabId);

    if (!tabId) {
      getTabId = getCurrentTab().then((tab) => tab.id);
    }

    getTabId.then((id) => {
      browser.tabs.sendMessage(id, { ...message, background: true });
    });
    
  } else {
    browser.runtime.sendMessage(message);
  }

  return promise;
}

function sendMessageToTab (tabId, action, payload) {
  return sendMessage(action, payload, tabId);
}

function sendMessageToBackground (action, payload) {
  return sendMessage(action, { ...payload, __TO_BACKGROUND__: true });
}

function sendMessageFromBackground (action, payload) {
  return sendMessage(action, { ...payload , __FROM_BACKGROUND__: true,  __TO_BACKGROUND__: true });
}

async function onMessage (message, actions = {}) {
  if (message.__TO_BACKGROUND__ && !window.__IS_BACKGROUND_SCRIPT__) {
    return;
  }

  if (message.isAnswer) {
    if (PROMISES_RESOLVES[message.callbackId]) {
      PROMISES_RESOLVES[message.callbackId](message);
      delete PROMISES_RESOLVES[message.callbackId];
    }
    return;
  }

  if (actions[message.action]) {
    const result = await actions[ message.action ](message);
    
    if (message.callbackId) {
      sendMessage(message.action, { callbackId: message.callbackId, isAnswer: true, ...result, __TO_BACKGROUND__: message.__FROM_BACKGROUND__ });
    }
  }
}

function saveCallback (action, cb) {
  const callbackId = Date.now() + Math.random() + action;

  return {
    promise: new Promise ((res) => PROMISES_RESOLVES[ callbackId ] = res),
    callbackId
  };
}


/***/ }),

/***/ "./src/common/markup.js":
/*!******************************!*\
  !*** ./src/common/markup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createSelect: () => (/* binding */ createSelect),
/* harmony export */   emptyNode: () => (/* binding */ emptyNode),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   setupEventHandler: () => (/* binding */ setupEventHandler)
/* harmony export */ });
function createElement(type, text, classNames = []) {
  const el = document.createElement(type);

  switch (type) {
    case "input":
      el.setAttribute("value", text);
      break;

    case "img":
      el.setAttribute("src", text);
      break;

    default:
      el.appendChild(document.createTextNode(text));
      break;
  }

  el.classList.add(...classNames);
  return el;
}

function setupEventHandler(selector, event, callback) {
  const el =
    typeof selector === "string" ? document.querySelector(selector) : selector;

  el.addEventListener(event, (e) => callback(e));
}

function createSelect(value, options, classes = []) {
  const select = document.createElement("select");

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    select.appendChild(option);
  });

  select.setAttribute("value", value);
  select.value = value;
  select.classList.add(...classes);

  return select;
}

function emptyNode(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

function hasClass(el, className) {
  return el.classList.contains(className);
}


/***/ }),

/***/ "./src/common/ui/components/history-tag/index.js":
/*!*******************************************************!*\
  !*** ./src/common/ui/components/history-tag/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/common/ui/components/history-tag/styles.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Store) => couli__WEBPACK_IMPORTED_MODULE_0___default().define(`
  <div>
    <span x-b="name"></span>
    <span x-b="removeButton"></span>
  </div>
`, {

  name: { _emc: (e, ci) => Store.startSearch('!' + ci.get('name') ) },

  removeButton: { _emc: (e, ci) => Store.removeTag( ci.get('name') ) },

}, _styles__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/common/ui/components/history-tag/styles.js":
/*!********************************************************!*\
  !*** ./src/common/ui/components/history-tag/styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  '': {
    boxSizing: 'border-box',
    height: 27,
    border: '1px solid black',
    position: 'relative',
    paddingLeft: 7,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 31,
    marginBottom: 9,
    marginRight: 9,
    fontSize: 14,
  },

  name: {
    cursor: 'pointer'
  },

  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 21,
    cursor: 'pointer',
    borderLeft: '1px solid black',
    background: 'rgba(255, 79, 43, 0.85)',
  },

  'removeButton:hover': {
    background: 'rgb(255, 79, 43)'
  },

  'removeButton::before, removeButton::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 13,
    height: 2,
    top: 11,
    left: 4,
    cursor: 'pointer',
  },

  'removeButton::before': {
    transform: 'rotate(45deg)',
  },

  'removeButton::after': {
    transform: 'rotate(-45deg)',
  },
});


/***/ }),

/***/ "./src/options/messages.js":
/*!*********************************!*\
  !*** ./src/options/messages.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  removeTag,
  getData,
  startSearch,
  removeSearch,
  getSavedSearches,
});

function removeTag (tag) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToBackground)('removeTag', { tag });
}

function getData (tabId) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToBackground)('getData', { tabId });
}

function startSearch (query) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToBackground)('startSearch', { query });
}

function removeSearch (query) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToBackground)('removeSearchQuery', { query });
}

function getSavedSearches() {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageToBackground)("getSavedSearches");
}


/***/ }),

/***/ "./src/options/reactions.js":
/*!**********************************!*\
  !*** ./src/options/reactions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/options/store.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getData
});

function getData (data) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(data);
}


/***/ }),

/***/ "./src/options/store.js":
/*!******************************!*\
  !*** ./src/options/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _background_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../background/state */ "./src/background/state.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/options/messages.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");




const LISTENERS = [];

const STATE = {
  tabId: null,
  allExistingTags: [],
  PAGE_SIZE: 0,
  color: '',
  colorSchemes: [],
  savedSearches: {},
};

const store = {
  getState,
  saveSettings,
  resetToDefaults,
  updateForm,
  loadData,
  addListener,
  runListeners,
  removeTag,
  saveData,
  startSearch,
  removeSearch,
  getSavedSearches,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

const FIELDS = {
  PAGE_SIZE: { validate: (val) => +val },
  VISITED_PAGES_LENGTH: { validate: (val) => +val > -1 },
  COLOR: { validate: (val) => val }
};

async function loadData () {
  const settingsKeys = Object.keys(FIELDS);
  const savedSettings = await browser.storage.local.get(settingsKeys);

  for (let key in savedSettings) {
    FIELDS[key].default = _background_state__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.DEFAULT[key];
    STATE[key] = savedSettings[key] || _background_state__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.DEFAULT[key];
  }

  await _messages__WEBPACK_IMPORTED_MODULE_1__["default"].getData().then(saveData);
}

function getState () {
  return {
    allExistingTags: STATE.allExistingTags.map((tag) => ({ name: tag })),
    pageSize: STATE.PAGE_SIZE,
    selectedColor: STATE.COLOR,
    visitedPagesLength: STATE.VISITED_PAGES_LENGTH,
    colorSchemes: Object.keys(_background_state__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.COLOR_SCHEMES).map((color) => ({ option: color })),
  }
}

function updateForm (value, name) {
  STATE[name] = value;
  runListeners();
}

function saveSettings () {
  const NEW_SETTINGS = {};

  for (let key in FIELDS) {
    const newValue = FIELDS[key].validate(STATE[key]) ? STATE[key] : FIELDS[key].default;
    NEW_SETTINGS[key] = newValue;
  }

  Object.assign(STATE, NEW_SETTINGS);
  browser.storage.local.set(NEW_SETTINGS);
  runListeners();
}

function resetToDefaults () {
  Object.assign(STATE, _background_state__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.DEFAULT);
  browser.storage.local.set(_background_state__WEBPACK_IMPORTED_MODULE_0__.SETTINGS.DEFAULT);
  runListeners();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

async function removeTag (tag) {
  _messages__WEBPACK_IMPORTED_MODULE_1__["default"].removeTag(tag).then(saveData)
}


function saveData ({ allExistingTags, savedSearches }) {
  if (allExistingTags) {
    Object.assign(STATE, { allExistingTags });
  }

  if (savedSearches) {
    Object.assign(STATE, { savedSearches });
  }

  runListeners();
}

function startSearch (query) {
  _messages__WEBPACK_IMPORTED_MODULE_1__["default"].startSearch(query);
}

function removeSearch (string) {
  return _messages__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch(string).then(saveData);
}

async function getSavedSearches () {
  const { savedSearches } = await _messages__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedSearches();
  return savedSearches;
}


/***/ }),

/***/ "./src/options/ui/components/options/index.js":
/*!****************************************************!*\
  !*** ./src/options/ui/components/options/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/options/ui/components/options/styles.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/options/store.js");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markup.html */ "./src/options/ui/components/options/markup.html");
/* harmony import */ var _search_query_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-query/index */ "./src/options/ui/components/search-query/index.js");
/* harmony import */ var _common_ui_components_history_tag_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/ui/components/history-tag/index */ "./src/common/ui/components/history-tag/index.js");









const HistoryTag = (0,_common_ui_components_history_tag_index__WEBPACK_IMPORTED_MODULE_5__["default"])(_store__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couli__WEBPACK_IMPORTED_MODULE_0___default().define({
  historyTag: [ HistoryTag ],
  searchQuery: [ _search_query_index__WEBPACK_IMPORTED_MODULE_4__["default"] ]
}, _markup_html__WEBPACK_IMPORTED_MODULE_3__["default"], {

  selectedColor: {},

  pageSize: {
    _eku: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].updateForm(e.target.value, 'PAGE_SIZE'),
    _ech: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].updateForm(e.target.value, 'PAGE_SIZE')
  },
  visitedPagesLength: {
    _eku: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].updateForm(e.target.value, 'VISITED_PAGES_LENGTH'),
    _ech: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].updateForm(e.target.value, 'VISITED_PAGES_LENGTH')
  },

  colorSchemes: {
    _ech: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].updateForm(e.target.value, 'COLOR'),

    _a: ($) => ({ value: $.selectedColor })
  },

  saveButton: { _emc: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].saveSettings() },
  defaultsButton: { _emc: (e) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].resetToDefaults() },

  tagsPanel: { _c: ($) => ({ hidden: !$.allExistingTags.length }) },
  searchesPanel: { _c: ($) => ({ hidden: !$.savedSearches.length }) },

  '': {
    _hm: (el, ci) => {
      ci.set(_store__WEBPACK_IMPORTED_MODULE_2__["default"].getState());

      _store__WEBPACK_IMPORTED_MODULE_2__["default"].addListener((store) => {
        const state = store.getState();
        ci.markup('colorSchemes').value = state.selectedColor;     
        ci.set(state);
      });

      _store__WEBPACK_IMPORTED_MODULE_2__["default"].loadData();
    }
  }

}, _styles__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/options/ui/components/options/markup.html":
/*!*******************************************************!*\
  !*** ./src/options/ui/components/options/markup.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div>
  <div class="hidden panel savedSearchesPanel">
    <h3>Saved queries</h3>
    <div class="savedSearchesList"></div>
  </div>
  <div x-b="tagsPanel" class="hidden floatLeft panel">
    <h3>Tags</h3>
    <div x-lb="allExistingTags">
      <history-tag>
    </div>
  </div>
  <div class="floatLeft settingsPanel panel">
    <h3>Settings</h3>
    <form class="form">
      <div>
        <span class="option-name">Page size</span>
        <input type='number' x-b="pageSize" />
      </div>
      <div>
        <span class="option-name">Color scheme</span>
        
          <select x-lb="colorSchemes" />
            <option x-b="option">
          </select>
        
      </div>
      <div>
        <span class="option-name">Recently visited pages</span>
        <input type='number' x-b="visitedPagesLength" />
      </div>
    </form>
    <button x-b="saveButton">Save</button>
    <button x-b="defaultsButton">Defaults</button>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/options/ui/components/options/styles.js":
/*!*****************************************************!*\
  !*** ./src/options/ui/components/options/styles.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  '': {
    paddingTop: 10,
    fontSize: 16,
    overflow: 'auto',
  },

  input: {
    fontSize: 16,
  },

  select: {
    fontSize: 16,
  },

  'h3': {
    fontSize: 28,
    marginTop: 30,
  },

  '.hidden': {
    display: 'none'
  },

  '.floatLeft': {
    float: 'left',
  },

  '.panel': {
    marginTop: 10,
  },
  
  table: {
    borderCollapse: 'collapse',
    marginBottom: 20,
  },
  
  'table, th, td': {
    padding: '8px 14px',
  },
  
  '.option-name': {
    textAlign: 'right',
    marginBottom: 20,
    display: 'inline-block',
    marginRight: 10,
  },

  '.option-name + input': {
    width: 80,
  },

  '.settingsPanel': {
    paddingRight: 20,
  },
  
  '.settingsPanel button': {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: 18,
    padding: '6px 40px',
  },
  
  defaultsButton: {
    marginLeft: 5,
  },
  
  br: {
    marginBottom: 5,
  },

  tagsPanel: {
    width: 670,
  },

  allExistingTags: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  'allExistingTags > div:hover': {
    borderColor: 'rgb(114, 123, 243)',
    backgroundColor: 'transparent',
    color: '#2a39fa',
  },

  searchesPanel: {
    clear: 'both',
    paddingTop: 20,
    fontSize: 18,
  },

  savedSearches: {
    listStyle: 'none',
    padding: 0,
  },

  button: {
    cursor: 'pointer',
    fontSize: 16,
    padding: "3px 20px"
  },

  form: {
    marginBottom: 15,
  }
});


/***/ }),

/***/ "./src/options/ui/components/search-query/index.js":
/*!*********************************************************!*\
  !*** ./src/options/ui/components/search-query/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store */ "./src/options/store.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/options/ui/components/search-query/styles.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couli__WEBPACK_IMPORTED_MODULE_0___default().define(`
  <li>
    <button x-b="query"></button>
    <button x-b="removeButton">Remove</button>
  <li>
`, {

  query: { events: { click: (e, ci) => _store__WEBPACK_IMPORTED_MODULE_1__["default"].startSearch( ci.get('query') ) } },
  removeButton: { events: { click: (e, ci) => _store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch( ci.get('query') ) } }

}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/options/ui/components/search-query/styles.js":
/*!**********************************************************!*\
  !*** ./src/options/ui/components/search-query/styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

  '': {
    marginTop: 13,
  },
  
  query: {
    cursor: 'pointer',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    fontSize: 16,
    marginRight: 10,
  },

  removeButton: {
    cursor: 'pointer'
  },

  'removeButton:hover': {
    borderColor: '#dc0000',
    color: '#dc0000',
  }

});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_components_options_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/components/options/index */ "./src/options/ui/components/options/index.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _reactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactions */ "./src/options/reactions.js");
/* harmony import */ var _background_reactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../background/reactions */ "./src/background/reactions.js");
/* harmony import */ var _common_markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/markup */ "./src/common/markup.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/options/store.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");











browser.runtime.onMessage.addListener((message) => (0,_common_interaction__WEBPACK_IMPORTED_MODULE_2__.onMessage)(message, _reactions__WEBPACK_IMPORTED_MODULE_3__["default"]));

couli__WEBPACK_IMPORTED_MODULE_0___default().apply(document.querySelector('#app'), _ui_components_options_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

const CREATE_QUERY_INPUTS = document.querySelector('.createQuery');
const HOW_USE_BUTTON = document.querySelector('.howUse');
const START_SEARCH_BUTTON = document.querySelector('.startSearch');
const SAVED_SEARCHES_PANEL = document.querySelector('.savedSearchesPanel');
const SAVED_SEARCHES_LIST = document.querySelector('.savedSearchesList');

initPage();

async function initPage () {
  HOW_USE_BUTTON.addEventListener("click", openHelp);
  START_SEARCH_BUTTON.addEventListener("click", onStartSeach);
  CREATE_QUERY_INPUTS.addEventListener("keyup", handleQueryInputs);
  SAVED_SEARCHES_LIST.addEventListener("click", handleSavedSearchList);

  buildSavedSearchesList();
}

async function buildSavedSearchesList () {
  const searches = await _store__WEBPACK_IMPORTED_MODULE_6__["default"].getSavedSearches();
  (0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.emptyNode)(SAVED_SEARCHES_LIST);

  if (!Object.keys(searches).length) {
    SAVED_SEARCHES_PANEL.classList.add("hidden");
    return;
  }

  SAVED_SEARCHES_PANEL.classList.remove("hidden");

  for (let [query, queryName] of Object.entries(searches)) {
    const runSearchButton = document.createElement("button");
    runSearchButton.classList.add("savedSearch");
    runSearchButton.textContent = queryName || query;
    runSearchButton.dataset.query = query;
    runSearchButton.title = query;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.dataset.query = query;
    removeButton.title = "Remove";

    const container = document.createElement("div");
    container.classList.add("savedSearchContainer");
    container.appendChild(runSearchButton);
    container.appendChild(removeButton);

    SAVED_SEARCHES_LIST.append(container);
  }
}

function openHelp () {
  _background_reactions__WEBPACK_IMPORTED_MODULE_4__["default"].openPage({ url: "help" });
}

function onStartSeach (e) {
  let query = "";

  const inputs = Array.from(CREATE_QUERY_INPUTS.children);

  query += inputs.slice(0, 2).reduce((str, cell) => {
    const input = cell.querySelector("[value]");
    return str += ` ${input.value}`;
  }, "");

  inputs.forEach((cell, i) => {
    const input = cell.querySelector("[value]");

    query += appendToQuery(input);
  });

  _store__WEBPACK_IMPORTED_MODULE_6__["default"].startSearch(query);
}

function appendToQuery (input) {
  const value = input.value;

  if (!value) {
    return "";
  }

  let prefix = '';

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, 'url')) {
    prefix = "+url";
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "title")) {
    prefix = "+title";
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "excludeUrl")) {
    prefix = "-url";
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "excludeTitle")) {
    prefix = "-title";
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "dateFrom")) {
    return ` +${transformDate(value)}`;
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "dateTo")) {
    return ` -${transformDate(value)}`;
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "sort")) {
    return ` ${input.value.toLowerCase()[0]}`;
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(input, "order")) {
    return `${value === "Descending" ? '<' : '>'}`;
  }

  return ` ${prefix} ${value}`;
}

function transformDate (inputDate) {
  return `${inputDate.split("-").reverse().join("/")}/`
}

function handleQueryInputs (e) {
  if (e.keyCode === 13) {
    onStartSeach();
  }
}

async function handleSavedSearchList (e) {
  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(e.target, "savedSearch")) {
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].startSearch(e.target.dataset.query);
    return;
  }

  if ((0,_common_markup__WEBPACK_IMPORTED_MODULE_5__.hasClass)(e.target, "remove")) {
    await _store__WEBPACK_IMPORTED_MODULE_6__["default"].removeSearch(e.target.dataset.query);
    buildSavedSearchesList();
    return;
  }
}

})();

/******/ })()
;