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

/***/ "./src/popup/messages.js":
/*!*******************************!*\
  !*** ./src/popup/messages.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/popup/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addNewTag,
  removeTag,
  getData,
  startSearch,
  openPage,
});

function addNewTag (tag) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageFromBackground)('addTagToPage', { tag });
}

function removeTag (tag) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageFromBackground)('removeTagFromPage', { tag });
}

function getData () {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageFromBackground)('getData', { forPopup: true }).then(_store__WEBPACK_IMPORTED_MODULE_1__["default"].savePageData);
}

function startSearch (query) {
  return (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageFromBackground)('startSearch', { query });
}

function openPage (url) {
  (0,_common_interaction__WEBPACK_IMPORTED_MODULE_0__.sendMessageFromBackground)('openPage', { url });
}


/***/ }),

/***/ "./src/popup/store.js":
/*!****************************!*\
  !*** ./src/popup/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/popup/messages.js");


const ADD_TAG_SUGGESTION = 'Add tag from existing';

const LISTENERS = [];

const STATE = {
  allExistingTags: [],
  assignedTags: [],
  recentlyVisitedPages: [],
  newTagInput: '',
  tagPanelShown: false,
};

const store = {
  getState,
  addListener,
  addNewTag,
  removeTag,
  savePageData,
  handleInput,
  getData,
  startSearch,
  openPage,
  switchTagPanel,
};

const SERVER_RETURN_KEYS = ['allExistingTags', 'assignedTags', 'recentlyVisitedPages', 'favIconUrl']

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

function getState () {
  return {
    tagPanelShown: STATE.tagPanelShown,
    selected: ADD_TAG_SUGGESTION,
    newTagInput: STATE.newTagInput,
    allExistingTags: [{ option: ADD_TAG_SUGGESTION }].concat( STATE.allExistingTags.map((tag) => ({ option: tag })) ),
    assignedTags: STATE.assignedTags.map((tag) => ({ name: tag })),
    recentlyVisitedPages: STATE.recentlyVisitedPages.map((page) => ({ title: page.title, url: page.url, icon: STATE.favIconUrl }))
  }
}

function getData () {
  _messages__WEBPACK_IMPORTED_MODULE_0__["default"].getData();
}

function addListener (fn) {
  LISTENERS.push(fn);
}

function runListeners () {
  LISTENERS.forEach((fn) => fn(store));
  return Promise.resolve();
}

function addNewTag (tag) {
  tag = tag || STATE.newTagInput;
  const handledTag = toCamelCase(tag);

  if (!handledTag) {
    return;
  }

  _messages__WEBPACK_IMPORTED_MODULE_0__["default"].addNewTag(handledTag).then(savePageData);
}

function removeTag (tag) {
  _messages__WEBPACK_IMPORTED_MODULE_0__["default"].removeTag(tag).then(savePageData);
}

function savePageData (data) {
  STATE.newTagInput = '';

  SERVER_RETURN_KEYS.forEach((key) => {
    if (typeof data[key] !== 'undefined') {
      STATE[key] = data[key];
    }
  });

  runListeners();
}

function handleInput (str) {
  STATE.newTagInput = str;
  runListeners();
}

function toCamelCase (str) {
  if (!str) {
    return;
  }

  const words = str.split(' ');

  if (words.length === 1) {
    return str;
  }

  return words.map((word) => word.trim())
    .map((word, i) => {
      const firstLetter = i ? word[0].toUpperCase() : word[0];
      return firstLetter + word.slice(1)
    }).join('');
}

function startSearch (query) {
  _messages__WEBPACK_IMPORTED_MODULE_0__["default"].startSearch(query);
}

function openPage (url) {
  _messages__WEBPACK_IMPORTED_MODULE_0__["default"].openPage(url);
}

function switchTagPanel () {
  STATE.tagPanelShown = !STATE.tagPanelShown;
  runListeners();
}


/***/ }),

/***/ "./src/popup/ui/components/popup/index.js":
/*!************************************************!*\
  !*** ./src/popup/ui/components/popup/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/popup/ui/components/popup/styles.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/popup/store.js");
/* harmony import */ var _common_ui_components_history_tag_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/ui/components/history-tag/index */ "./src/common/ui/components/history-tag/index.js");
/* harmony import */ var _markup_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markup.html */ "./src/popup/ui/components/popup/markup.html");






const HistoryTag = (0,_common_ui_components_history_tag_index__WEBPACK_IMPORTED_MODULE_3__["default"])(_store__WEBPACK_IMPORTED_MODULE_2__["default"]);

const INITIAL_POPUP_POSITION = { top: 20, left: 'auto', right: 20 };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couli__WEBPACK_IMPORTED_MODULE_0___default().define({
  historyTag: [ HistoryTag ]
}, _markup_html__WEBPACK_IMPORTED_MODULE_4__["default"], {

  selected: {},

  newTagInput: {
    _eku: (e) => {
      e.stopPropagation();
      if (e.keyCode === 13) {
        _store__WEBPACK_IMPORTED_MODULE_2__["default"].addNewTag(e.target.value);
        return;
      }

      _store__WEBPACK_IMPORTED_MODULE_2__["default"].handleInput(e.target.value);
    }
  },

  addTagButton: { _emc: () => _store__WEBPACK_IMPORTED_MODULE_2__["default"].addNewTag() },

  allExistingTags: {

    _ech: (e, ci) => {
      if (e.target.value) {
        _store__WEBPACK_IMPORTED_MODULE_2__["default"].addNewTag(e.target.value);
        ci.set({ selected: e.target.value });
      }
    },

    _a: ($) => ({ value: $.selected }),
  },

  assignedTagsSection: { _c: ($) => ({ hidden: !$.assignedTags.length }) },
  visitedPagesSection: { _c: ($) => ({ hidden: !$.recentlyVisitedPages.length }) },

  recentlyVisitedPages: { listItem: { bindings: {
    url: {},
    icon: {},
    title: {
      html: ($) => $.title || $.url,
      events: { click: (e, ci) => _store__WEBPACK_IMPORTED_MODULE_2__["default"].openPage( ci.get('url') ) },
      attrs: ($) => ({ title: $.title + '\n' + $.url }),
      style: ($) => ({ backgroundImage: 'url(' + $.icon + ')' }),
    }
  }}},

  controlsButton: {
    _emc: () => _store__WEBPACK_IMPORTED_MODULE_2__["default"].openPage('settings')
  },

  helpButton: {
    _emc: () => _store__WEBPACK_IMPORTED_MODULE_2__["default"].openPage('help')
  },

  switchTagsButton: {
    _emc: () => _store__WEBPACK_IMPORTED_MODULE_2__["default"].switchTagPanel(),
    _c: ($) => ({
      rightTriangle: !$.tagPanelShown,
      bottomTriangle: $.tagPanelShown
    }),
  },
  tagsPanel: { _c: ($) => ({ hidden: !$.tagPanelShown }) },
  tagPanelShown: {},

  '': {
    _hm: (el, ci) => {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].addListener((store) => ci.set( store.getState() ));
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].getData();
    }
  }
}, (0,_styles__WEBPACK_IMPORTED_MODULE_1__["default"])({ INITIAL_POPUP_POSITION })));


/***/ }),

/***/ "./src/popup/ui/components/popup/markup.html":
/*!***************************************************!*\
  !*** ./src/popup/ui/components/popup/markup.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div>
  <div x-b="content">
    <div x-b="visitedPagesSection" class="hidden">
      <h3>Recently visited pages</h3>
      <ul x-lb="recentlyVisitedPages">
        <li x-b="title">
      </ul>
    </div>
    <h3 x-b="switchTagsButton">Assaigned tags</h3>
    <div x-b="tagsPanel" class="hidden">
      <div x-b="assignedTagsSection" class="hidden">
        <div x-lb="assignedTags">
          <history-tag>
        </div>
      </div>
      <div class="field">
        <input x-b="newTagInput" /> <button x-b="addTagButton">Add tag</button>
      </div>
      <div class="field">
        <select x-lb="allExistingTags">
          <option x-b="option">
        </select>
      </div>
    </div>
    <button x-b="helpButton" class="link">How to use</button>
    <button x-b="controlsButton" class="link">Controls</button>
  </div>
</div>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/popup/ui/components/popup/styles.js":
/*!*************************************************!*\
  !*** ./src/popup/ui/components/popup/styles.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((vars) => ({
  '': {
    background: 'white',
    border: '3px solid black',
    zIndex: '2147483647',
    boxSizing: 'border-box',
    padding: 0,
    fontSize: 14,
    fontFamily: 'sans-serif',
    lineHeight: 'normal',
    color: '#222',
    overflow: 'auto',
    ...vars.INITIAL_POPUP_POSITION
  },

  content: {
    padding: 10,
  },

  '.field': {
    display: 'flex',
  },

  '.header': {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: '700',
    height: 20,
  },

  newTagInput: {
    flex: 'auto',
    borderWidth: 0,
    borderBottom: '2px solid black',
    paddingTop: 2,
    marginRight: 7,
    fontSize: 15,
  },

  'newTagInput:focus': {
    borderColor: 'rgb(114, 123, 243)',
    outline: 'none'
  },

  button: {
    background: 'none',
    fontSize: 15,
    lineHeight: '1.5',
    color: 'black',
    border: '2px solid black',
  },

  'button:hover': {
    borderColor: 'rgb(114, 123, 243)',
    backgroundColor: 'transparent',
    color: '#2a39fa',
  },

  allExistingTags: {
    width: '100%',
    marginTop: 13,
    background: 'none',
    border: '1px solid black',
  },

  'option:first-child': {
    display: 'none',
  },

  assignedTags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 15,
    paddingBottom: 3,
    borderBottom: '1px solid black',
  },

  'assignedTags > div:hover': {
    borderColor: 'rgb(114, 123, 243)',
    backgroundColor: 'transparent',
    color: '#2a39fa',
  },

  '.link': {
    marginTop: 13,
    marginBottom: 10,
    marginLeft: 5,
    float: 'right',
    cursor: 'pointer',
  },

  recentlyVisitedPages: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 7,
    marginBottom: 23,
    position: 'relative'
  },

  'recentlyVisitedPages:after': {
    content: '""',
    borderBottom: '1px solid black',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -12,
  },

  'recentlyVisitedPages li': {
    padding: '3px 0 5px 23px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px 15px',
    backgroundPosition: '0 5px',
  },

  'recentlyVisitedPages li:hover': {
    backgroundColor: 'rgba(114, 123, 243, 0.1)'
  },

  h3: {
    margin: '0 0 5px 0',
    position: 'relative',
  },

  switchTagsButton: {
    cursor: 'pointer',
  },

  'switchTagsButton:hover': {
    color: 'rgb(114, 123, 243)'
  },

  'switchTagsButton::after': {
    content: '""',
    borderTop: '5px solid transparent',
    borderLeft: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderRight: '5px solid transparent',
    position: 'absolute',
    top: 5,
    left: 125
  },

  '.rightTriangle::after': {
    borderLeftColor: 'black',
  },

  '.rightTriangle:hover::after': {
    borderLeftColor: 'rgb(114, 123, 243)'
  },

  '.bottomTriangle::after': {
    top: 8,
    left: 124,
    borderTopColor: 'black',
  },

  '.bottomTriangle:hover::after': {
    borderTopColor: 'rgb(114, 123, 243)'
  },

}));


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
/*!***********************************!*\
  !*** ./src/popup/popup-script.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! couli */ "./node_modules/couli/dist/couli.js");
/* harmony import */ var couli__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(couli__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_components_popup_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/components/popup/index */ "./src/popup/ui/components/popup/index.js");
/* harmony import */ var _common_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interaction */ "./src/common/interaction.js");
const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");







window.__IS_BACKGROUND_SCRIPT__ = true;

browser.runtime.onMessage.addListener((message) => (0,_common_interaction__WEBPACK_IMPORTED_MODULE_2__.onMessage)(message));

couli__WEBPACK_IMPORTED_MODULE_0___default().apply(document.querySelector('#app'), _ui_components_popup_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;