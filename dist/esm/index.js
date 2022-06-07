function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.1.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.1.0';

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		// ATTENTION

		var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
		var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE =  Symbol.for('react.memo');
		var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_development.exports));
	return react_development.exports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "/*\n * Colors are manually kept in sync with Figma\n * See System Colors in  -> https://www.figma.com/file/DdeJrMgKoQqgisZLrcL25N27/Foundation?node-id=576%3A570\n*/\n/*\n * This makes an element as invisible as possible without pxoving it from\n * the accessibility tree.\n */\n.Button_tippy-box__abVwz[data-theme~=ride-report-dark] {\n  border-radius: 3px;\n  background-color: #222a35;\n  color: #ffffff;\n  padding: 8px;\n}\n\n.Button_button__2JA4L {\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.08);\n  transition: all 150ms;\n  text-align: center;\n  height: 36rem;\n  background-color: #ffffff;\n  border: 1rem solid #dfe3e7;\n  border-radius: 6rem;\n  box-sizing: border-box;\n  color: #222a35;\n  padding: 6rem 12rem;\n  text-decoration: none;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n  pointer-events: auto;\n}\n.Button_button__2JA4L.Button_outline-red__Uemck {\n  border: 1rem solid #fe3432;\n  color: #fe3432;\n}\n.Button_button__2JA4L.Button_outline-red__Uemck:not(:disabled):hover {\n  background-color: #fe3432;\n  color: #ffffff;\n}\n.Button_button__2JA4L:not(:disabled):hover {\n  background-color: #dfe3e7;\n  transform: translate(-1rem);\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.12);\n}\n.Button_button__2JA4L:not(:disabled):active {\n  box-shadow: none;\n  transform: none;\n}\n.Button_button__2JA4L.Button_blue__IypMu, .Button_button__2JA4L.Button_red__d0oaQ {\n  border: 1rem solid transparent;\n  color: #ffffff;\n}\n.Button_button__2JA4L.Button_blue__IypMu {\n  background-color: #3b55e6;\n}\n.Button_button__2JA4L.Button_blue__IypMu:not(:disabled):hover:not(:active) {\n  background-color: #293ca1;\n  color: #ffffff;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.Button_button__2JA4L.Button_red__d0oaQ {\n  background-color: #fe3432;\n}\n.Button_button__2JA4L.Button_red__d0oaQ:not(:disabled):hover:not(:active) {\n  background-color: #b22423;\n  color: #ffffff;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.Button_button__2JA4L:disabled {\n  background-color: #dfe3e7;\n  color: #8797a6;\n  border-color: #dfe3e7;\n  box-shadow: none;\n}\n.Button_button__2JA4L svg {\n  margin-right: 4rem;\n  font-size: 20rem;\n}\n.Button_button__2JA4L svg:last-child {\n  margin: 2rem -6rem;\n}\n.Button_button__2JA4L.Button_center__NFqdL {\n  justify-content: center;\n}\n.Button_button__2JA4L.Button_right__nPCiD {\n  flex-direction: row-reverse;\n}\n@media print {\n  .Button_button__2JA4L {\n    display: none;\n  }\n}";
var styles$2 = {"tippy-box":"Button_tippy-box__abVwz","button":"Button_button__2JA4L","outline-red":"Button_outline-red__Uemck","blue":"Button_blue__IypMu","red":"Button_red__d0oaQ","center":"Button_center__NFqdL","right":"Button_right__nPCiD"};
styleInject(css_248z$2);

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var cx = classnames.exports;

var icons = "<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<defs>\n<!--\n    Navigation & Direction\n-->\n<symbol id=\"icon-Right\" viewBox=\"0 0 24 24\">\n<title>Right</title>\n<path d=\"M8.25 16.59L12.8856 12L8.25 7.41L9.67713 6L15.75 12L9.67713 18L8.25 16.59Z\"/>\n</symbol>\n<symbol id=\"icon-Left\" viewBox=\"0 0 24 24\">\n<title>Left</title>\n<path d=\"M15.75 7.41L11.1144 12L15.75 16.59L14.3229 18L8.25 12L14.3229 6L15.75 7.41Z\"/>\n</symbol>\n<symbol id=\"icon-Up\" viewBox=\"0 0 24 24\">\n<title>Up</title>\n<path d=\"M16.59 15.75L12 11.1144L7.41 15.75L6 14.3229L12 8.25L18 14.3229L16.59 15.75Z\"/>\n</symbol>\n<symbol id=\"icon-Down\" viewBox=\"0 0 24 24\">\n<title>Down</title>\n<path d=\"M7.41 8.25L12 12.8856L16.59 8.25L18 9.67713L12 15.75L6 9.67713L7.41 8.25Z\"/>\n</symbol>\n<symbol id=\"icon-Back\" viewBox=\"0 0 24 24\">\n<title>Back</title>\n<path d=\"M20 11H7.83L11.42 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11Z\"/>\n</symbol>\n<symbol id=\"icon-Forward\" viewBox=\"0 0 24 24\">\n<title>Forward</title>\n<path d=\"M4 11H16.17L12.58 7.41L14 6L20 12L14 18L12.59 16.59L16.17 13H4V11Z\"/>\n</symbol>\n<symbol id=\"icon-Fast-Forward\" viewBox=\"0 0 23 24\">\n<title>Fast Forward</title>\n<path d=\"M4 11H12.17L8.58 7.41L10 6L16 12L10 18L8.59 16.59L12.17 13H4V11Z\"/>\n<rect x=\"17\" y=\"6\" width=\"2\" height=\"12\"/>\n</symbol>\n<symbol id=\"icon-Outbound\" viewBox=\"0 0 24 24\">\n<title>Outbound</title>\n<path d=\"M10 5.00003V7.00003H15.59L5 17.59L6.41 19L17 8.41003V14H19V5.00003H10Z\"/>\n</symbol>\n<symbol id=\"icon-Inbound\" viewBox=\"0 0 24 24\">\n<title>Inbound</title>\n<path d=\"M14 19V17H8.41L19 6.41003L17.59 5.00003L7 15.59L7 10H5L5 19L14 19Z\"/>\n</symbol>\n<symbol id=\"icon-Double-Right\" viewBox=\"0 0 24 24\">\n<title>Double-Right</title>\n<path d=\"M9.58 12L5 16.59L6.41 18L12.41 12L6.41 6L5 7.41L9.58 12Z\"/>\n<path d=\"M16.17 12L11.59 16.59L13 18L19 12L13 6L11.59 7.41L16.17 12Z\"/>\n</symbol>\n<symbol id=\"icon-Double-Left\" viewBox=\"0 0 24 24\">\n<title>Double-Left</title>\n<path d=\"M14.42 12L19 16.59L17.59 18L11.59 12L17.59 6L19 7.41L14.42 12Z\"/>\n<path d=\"M7.83 12L12.41 16.59L11 18L5 12L11 6L12.41 7.41L7.83 12Z\"/>\n</symbol>\n<symbol id=\"icon-Close\" viewBox=\"0 0 24 24\">\n<title>Close</title>\n<path d=\"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z\"/>\n</symbol>\n\n<symbol id=\"icon-Check\" viewBox=\"0 0 24 24\">\n<title>Check</title>\n<path d=\"M8.8114 15.901L4.66273 11.703L3.25 13.1225L8.8114 18.75L20.75 6.66946L19.3472 5.25L8.8114 15.901Z\"/>\n</symbol>\n\n<symbol id=\"icon-Refresh\" viewBox=\"0 0 24 24\">\n<title>Refresh</title>\n<path d=\"M17.6569 17.6569C16.2091 19.1046 14.2091 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C14.3894 4 16.5341 5.04751 18 6.70835V5H20V11H14V9H17.1973C16.1599 7.2066 14.2208 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.6569 18 15.1569 17.3284 16.2426 16.2426L17.6569 17.6569Z\"/>\n</symbol>\n<symbol id='icon-Rewind' viewBox=\"0 0 30 30\">\n<title>Rewind</title>\n<path d=\"M11.2251 23.7061C11.2068 23.6978 11.1885 23.6896 11.1711 23.6795C10.338 23.1985 10.3765 23.2557 10.873 22.3957C11.3535 21.5635 11.5248 21.675 12.223 22.0655L12.2244 22.0629C15.5412 23.9179 20.0426 22.7687 22.0345 19.3187C24.0424 15.8409 22.8433 11.322 19.3655 9.31412C16.0462 7.39768 11.8446 8.31134 9.70233 11.4619L11.1669 12.3074L6.73747 14.7598L6.64764 9.69778L8.03331 10.4978C10.678 6.48256 16.062 5.18507 20.3001 7.63198C24.6974 10.1707 26.1999 15.8323 23.6605 20.2307C21.1515 24.5764 15.5989 26.1216 11.2251 23.7061Z\" />\n<path d=\"M17.1818 10.7954C17.1818 10.3675 16.8381 10 16.4112 10H16.2447C15.8178 10 15.4816 10.3675 15.4816 10.7954V15.368L13.2418 17.6038C12.9111 17.9344 12.9281 18.471 13.2409 18.7997C13.5546 19.1322 14.104 19.1322 14.4347 18.7997L16.9097 16.3247C16.9285 16.304 16.9436 16.2831 16.9625 16.2642C17.0985 16.1235 17.1814 15.9326 17.1814 15.7221L17.1818 10.7954Z\" />\n</symbol>\n<symbol id=\"icon-Expand\" viewBox=\"0 0 24 24\">\n<title>Expand</title>\n<path d=\"M13 3V5H17.59L13 9.59L14.41 11L19 6.41V11H21V3H13Z\"/>\n<path d=\"M11 21V19H6.41L11 14.41L9.59 13L5 17.59V13H3V21H11Z\"/>\n</symbol>\n<symbol id=\"icon-Collapse\" viewBox=\"0 0 24 24\">\n<title>Collapse</title>\n<path d=\"M21 11V9H16.41L21 4.41L19.59 3L15 7.59V3L13 3V11H21Z\"/>\n<path d=\"M3 13V15H7.59L3 19.59L4.41 21L9 16.41V21H11V13H3Z\"/>\n</symbol>\n<symbol id=\"icon-Orientation\" viewBox=\"0 0 24 24\">\n<title>Orientation</title>\n<path d=\"M15.4532 9L12 5.83L8.54684 9L7 7.59L12 3L16.9891 7.59L15.4532 9ZM8.54684 15L12 18.17L15.4532 15L17 16.41L12 21L7.01089 16.41L8.54684 15Z\"/>\n</symbol>\n<symbol id=\"icon-Plus\" viewBox=\"0 0 24 24\">\n<title>Plus</title>\n<path d=\"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z\"/>\n</symbol>\n<symbol id=\"icon-Minus\" viewBox=\"0 0 24 24\">\n<title>Minus</title>\n<path d=\"M19 13H5V11H19V13Z\"/>\n</symbol>\n<symbol id=\"icon-Higher\" viewBox=\"0 0 24 24\">\n<title>Minus</title>\n<path d=\"M17 15L12 9L7 15L17 15Z\"/>\n</symbol>\n<symbol id=\"icon-Lower\" viewBox=\"0 0 24 24\">\n<title>Minus</title>\n<path d=\"M7 9L12 15L17 9H7Z\"/>\n</symbol>\n<symbol id=\"icon-More\" viewBox=\"0 0 24 24\">\n<title>Hamburger</title>\n<path d=\"M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z\"/>\n<path d=\"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z\"/>\n<path d=\"M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z\"/>\n</symbol>\n<symbol id=\"icon-Hamburger\" viewBox=\"0 0 24 24\">\n<title>Hamburger</title>\n<path d=\"M6 8V6H18V8H6Z\"/>\n<path d=\"M6 13H18V11H6V13Z\"/>\n<path d=\"M6 18H18V16H6V18Z\"/>\n</symbol>\n<symbol id=\"icon-Report\" viewBox=\"0 0 24 24\">\n<title>Report</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 2H8C5.79086 2 4 3.79086 4 6V15H2V17C2 19.2091 3.79086 21 6 21H14V19C12.8954 19 12 18.1046 12 17V15H6V6C6 4.89543 6.89543 4 8 4H16.1707C16.0602 4.31278 16 4.64936 16 5V10.5351C14.8044 11.2267 14 12.5194 14 14C14 15.4806 14.8044 16.7733 16 17.4649V22L18 21L20 22V17.4649C21.1956 16.7733 22 15.4806 22 14C22 11.7909 20.2091 10 18 10V8H22V5C22 3.34315 20.6569 2 19 2ZM10 17C10 17.7286 10.1948 18.4117 10.5351 19H6C4.89543 19 4 18.1046 4 17H10ZM20 14C20 15.1046 19.1046 16 18 16C16.8954 16 16 15.1046 16 14C16 12.8954 16.8954 12 18 12C19.1046 12 20 12.8954 20 14ZM19 4C19.5523 4 20 4.44771 20 5V6H18V5C18 4.44771 18.4477 4 19 4Z\"/>\n<path d=\"M8 6H14V8H8V6Z\"/>\n<path d=\"M8 10H11V12H8V10Z\"/>\n</symbol>\n<symbol id=\"icon-Map\" viewBox=\"0 0 24 24\">\n<title>Map</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.2818 21.9186C12.8621 21.9723 12.4343 22 12 22C6.47714 22 2 17.5228 2 12C2 6.47716 6.47714 2 12 2C17.5229 2 22 6.47716 22 12H20C20 10.1513 19.3729 8.44904 18.3199 7.09436L17.2929 8.12132C17.1054 8.30886 17 8.56321 17 8.82843V10H15V8.82843C15 8.03278 15.3161 7.26972 15.8787 6.70711L16.9056 5.68014C15.551 4.62708 13.8487 4 12 4C9.97111 4 8.11862 4.75527 6.70835 6H9.33081C10.0245 6 10.6898 6.27557 11.1803 6.76609C12.4151 8.00085 12.1163 10.0757 10.5833 10.9118L8.02116 12.3094C7.6999 12.4846 7.50001 12.8213 7.50001 13.1873V14.9296C7.50001 15.9327 6.99871 16.8694 6.16411 17.4258L6.13752 17.4435C6.70962 18.0594 7.37758 18.5849 8.11766 18.9965C8.25706 18.5136 8.5169 18.0689 8.87868 17.7071L10.2929 16.2929L11.7071 17.7071L10.2929 19.1213C10.1242 19.29 10.022 19.5127 10.0032 19.7488C10.6415 19.9128 11.3105 20 12 20C12.2935 20 12.5834 19.9842 12.8687 19.9534L13.2818 21.9186ZM4.96869 15.819L5.05471 15.7617C5.33291 15.5762 5.50001 15.264 5.50001 14.9296V13.1873C5.50001 12.0894 6.09967 11.0793 7.06346 10.5536L9.62559 9.15605C9.98639 8.95925 10.0567 8.47092 9.76611 8.18031C9.65066 8.06486 9.49408 8 9.33081 8H5.07026C4.38958 9.17669 4 10.5429 4 12C4 13.383 4.35096 14.6841 4.96869 15.819Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 22C17 22 21 19.0435 21 16C21 13.6948 19.2091 12 17 12C14.7909 12 13 13.6948 13 16C13 19.0435 17 22 17 22ZM17 17C17.8284 17 18.5 16.3285 18.5 15.5C18.5 14.6716 17.8284 14 17 14C16.1716 14 15.5 14.6716 15.5 15.5C15.5 16.3285 16.1716 17 17 17Z\"/>\n</symbol>\n<symbol id=\"icon-MunBoundary\" viewBox=\"0 0 20 20\">\n<title>MunBoundary</title>\n<path d=\"M0 2V4H2V2H4V0H2C0.895431 0 0 0.89543 0 2Z\"/>\n<path d=\"M16 20H18C19.1046 20 20 19.1046 20 18V16H18V18H16V20Z\"/>\n<path d=\"M16 0V2H18V4H20V2C20 0.89543 19.1046 0 18 0H16Z\"/>\n<path d=\"M11 0V2H14V0H11Z\"/>\n<path d=\"M18 9H20V6H18V9Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 8C4.44772 8 4 8.44772 4 9V9.12602C2.27477 9.57005 1 11.1361 1 13H0V15H10V13H9C9 11.1361 7.72523 9.57005 6 9.12602V9C6 8.44772 5.55228 8 5 8ZM7 13C7 11.8954 6.10458 11 5 11C3.89542 11 3 11.8954 3 13H7Z\"/>\n<path d=\"M3 16V18H4V16H6V18H7V16H9V18H10V20H0V18H1V16H3Z\"/>\n<path d=\"M6 0V2H9V0H6Z\"/>\n<path d=\"M18 14H20V11H18V14Z\"/>\n<path d=\"M0 8H2V6H0V8Z\"/>\n<path d=\"M12 20H14V18H12V20Z\"/>\n</symbol>\n<symbol id=\"icon-Area\" viewBox=\"0 0 24 24\">\n<title>Area</title>\n<path d=\"M5.33333 6.14714C5.6707 5.95199 5.952 5.67069 6.14715 5.33333H17.8529C18.048 5.67069 18.3293 5.95199 18.6667 6.14714V8.66666H20.8889V6.14714C21.5531 5.76291 22 5.04475 22 4.22222C22 2.99492 21.0051 2 19.7778 2C18.9552 2 18.2371 2.44689 17.8529 3.11111H6.14715C5.76292 2.44689 5.04476 2 4.22222 2C2.99492 2 2 2.99492 2 4.22222C2 5.04475 2.44689 5.76291 3.11111 6.14714V17.8528C2.44689 18.2371 2 18.9552 2 19.7778C2 21.0051 2.99492 22 4.22222 22C5.04476 22 5.76292 21.5531 6.14715 20.8889H10.8889V18.6666H6.14715C5.952 18.3293 5.6707 18.048 5.33333 17.8528V6.14714Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 15.3333C22 18.715 17.5556 22 17.5556 22C17.5556 22 13.1111 18.715 13.1111 15.3333C13.1111 12.772 15.101 10.8889 17.5556 10.8889C20.0102 10.8889 22 12.772 22 15.3333ZM19.2222 14.7778C19.2222 15.6983 18.476 16.4445 17.5556 16.4445C16.6351 16.4445 15.8889 15.6983 15.8889 14.7778C15.8889 13.8573 16.6351 13.1111 17.5556 13.1111C18.476 13.1111 19.2222 13.8573 19.2222 14.7778Z\"/>\n</symbol>\n<symbol id=\"icon-Audit\" viewBox=\"0 0 24 24\">\n<title>Audit</title>\n<path d=\"M4.00004 9C4.01758 6.71809 5.76511 4.98583 7.94991 4.98583C9.20348 4.98583 10.4297 5.58517 11.2305 6.54299L11.9999 7.46329L12.7693 6.54299C13.5701 5.58517 14.7963 4.98583 16.0499 4.98583C18.2458 4.98583 19.9999 6.73566 19.9999 9.03467C19.9999 11.295 18.8365 13.3031 17.1359 15.0253C15.5846 16.5963 13.657 17.8545 11.9999 18.7537C10.9493 18.1836 9.78997 17.4692 8.68673 16.6222L7.26771 18.0413C8.72014 19.1819 10.25 20.0915 11.5365 20.7594L11.9999 21L12.4633 20.7594C14.3116 19.7998 16.6623 18.3414 18.564 16.4155C20.4633 14.492 21.9999 12.0122 21.9999 9.03467C21.9999 5.68692 19.3981 3 16.0499 3C14.5484 3 13.1098 3.56594 11.9999 4.50246C10.89 3.56594 9.45146 3 7.94991 3C4.61332 3 2.01789 5.66838 2 9H4.00004Z\"/>\n<path d=\"M8 8.58578L11 11.5858L13.5858 9L15 10.4142L11 14.4142L8 11.4142L5.41421 14H2V12H4.58579L8 8.58578Z\"/>\n</symbol>\n<symbol id=\"icon-No-Car\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<title>No-Car</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 1.99998L22 21L23.4142 19.5858L21.8284 18H22V12C22 11.1266 21.4402 10.384 20.6599 10.1114L19.3462 5.26192C19.0087 3.93199 17.8115 2.99998 16.4385 2.99998H7.56156C7.33582 2.99998 7.11483 3.02518 6.90163 3.07319L4.41421 0.585769L3 1.99998ZM8.82843 4.99998L13.8284 9.99998H18.5576L17.411 5.76693L17.4086 5.75744C17.2973 5.31228 16.8973 4.99998 16.4385 4.99998H8.82843ZM18.7987 14.9702L17.0297 13.2013C17.1682 12.516 17.7739 12 18.5 12C19.3284 12 20 12.6716 20 13.5C20 14.2261 19.484 14.8318 18.7987 14.9702ZM20 21L17.5 18.5V21H20ZM9 9.99998L17 18H6.5V21H3.5V18H2V12C2 11.1266 2.55978 10.384 3.34011 10.1114L4.57025 5.57023L6.20067 7.20065L5.44237 9.99998H9ZM5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15Z\"/>\n</symbol>\n<symbol id=\"icon-Beta\" viewBox=\"0 0 24 24\">\n<title>Beta</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2.5C12.2761 2.5 12.5 2.72386 12.5 3V5C12.5 5.27614 12.2761 5.5 12 5.5C11.7238 5.5 11.5 5.27614 11.5 5V3C11.5 2.72386 11.7238 2.5 12 2.5ZM8.64645 3.64645C8.84171 3.45118 9.15829 3.45118 9.35355 3.64645L10.5376 4.83048C10.7328 5.02574 10.7328 5.34232 10.5376 5.53758C10.3423 5.73284 10.0257 5.73284 9.83048 5.53758L8.64645 4.35355C8.45118 4.15829 8.45118 3.84171 8.64645 3.64645ZM14.4884 3.64645C14.6837 3.45118 15.0003 3.45118 15.1955 3.64645C15.3908 3.84171 15.3908 4.15829 15.1955 4.35355L14.0115 5.53758C13.8162 5.73284 13.4997 5.73284 13.3044 5.53758C13.1091 5.34232 13.1091 5.02574 13.3044 4.83048L14.4884 3.64645ZM8 7C8 6.44772 8.44772 6 9 6H10H14H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8V19.3846H14C15 19.3846 15 19.3852 15 19.3858L15 19.3871L15 19.3898L14.9999 19.3956L14.9997 19.4092C14.9995 19.4191 14.9992 19.4308 14.9987 19.444C14.9976 19.4704 14.9956 19.5034 14.9922 19.5421C14.9854 19.6191 14.9725 19.7208 14.9481 19.8391C14.9 20.0725 14.8025 20.392 14.6003 20.7187C14.1566 21.4353 13.3242 22 12 22C10.6758 22 9.84336 21.4353 9.39973 20.7187C9.19753 20.392 9.10004 20.0725 9.05188 19.8391C9.02746 19.7208 9.01461 19.6191 9.00779 19.5421C9.00437 19.5034 9.00243 19.4704 9.00134 19.444C9.00079 19.4308 9.00046 19.4191 9.00026 19.4092L9.00006 19.3956L9.00001 19.3898L9 19.3871L9 19.3858C9 19.3852 9 19.3846 10 19.3846H9V8C8.44772 8 8 7.55228 8 7ZM11 14.4724C11.1417 14.4734 11.3099 14.4807 11.5 14.5C11.8617 14.5367 12.0661 14.7635 12.2741 14.9942C12.4689 15.2103 12.6668 15.4299 13 15.5C13 15.5 13 15.5 13 15.5V8H11V14.4724ZM12.0917 19.9984C11.9757 19.997 11.8673 19.9942 11.7655 19.989C11.8359 19.996 11.9138 20 12 20C12.0317 20 12.0622 19.9995 12.0917 19.9984Z\" />\n</symbol>\n<symbol id=\"icon-Navigation-Chart\" viewBox=\"0 0 24 24\">\n<title>Navigation-Chart</title>\n<path d=\"M14.2071 6.91421L10.7071 10.4142L8.70711 8.41421L4.41421 12.7071L3 11.2929L8.70711 5.58579L10.7071 7.58579L12.7929 5.5L11.2929 4H15.7071V8.41421L14.2071 6.91421Z\"/>\n<path d=\"M3 17H6V20H3V17Z\"/>\n<path d=\"M11 14H8V20H11V14Z\"/>\n<path d=\"M13 11H16V20H13V11Z\"/>\n<path d=\"M21 4H18V20H21V4Z\"/>\n</symbol>\n<symbol id=\"icon-Policy\" viewBox=\"0 0 24 24\">\n<title>Policy</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 2H11V6.07089C7.60771 6.55612 5 9.47353 5 13H3V15H21V13H19C19 9.47353 16.3923 6.55612 13 6.07089V5H15V2ZM17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13H17Z\"/>\n<path d=\"M7 20H9V16H11V20H13V16H15V20H17V16H19V20H21V22H3V20H5V16H7V20Z\"/>\n</symbol>\n<symbol id=\"icon-Street\" viewBox=\"0 0 24 24\">\n<title>Street</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 12C18 12 22 9.04352 22 6.00003C22 3.69484 20.2091 2 18 2C15.7909 2 14 3.69484 14 6.00003C14 9.04352 18 12 18 12ZM18 7.00003C18.8284 7.00003 19.5 6.32846 19.5 5.50003C19.5 4.6716 18.8284 4.00003 18 4.00003C17.1716 4.00003 16.5 4.6716 16.5 5.50003C16.5 6.32846 17.1716 7.00003 18 7.00003Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 4.00003C2 2.89546 2.89543 2.00003 4 2.00003H12V4.00003H8L12 15H20V13H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4.00003ZM4 15H10L6 4.00003H4V15ZM15 20H4V17H15V20ZM17 20H20V17H17V20Z\"/>\n</symbol>\n<symbol id=\"icon-Points\" viewBox=\"0 0 24 24\">\n<title>Points</title>\n<path d=\"M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z\"/>\n<path d=\"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z\"/>\n<path d=\"M8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18C4 16.8954 4.89543 16 6 16C7.10457 16 8 16.8954 8 18Z\"/>\n<path d=\"M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z\"/>\n<path d=\"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z\"/>\n<path d=\"M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z\"/>\n<path d=\"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z\"/>\n</symbol>\n<symbol id=\"icon-Line\" viewBox=\"0 0 14 13\">\n<title>Line</title>\n<rect x=\"0.707107\" y=\"11\" width=\"15\" height=\"3\" rx=\"1.5\" transform=\"rotate(-45 0.707107 11)\"/>\n</symbol>\n<symbol id=\"icon-Heatmap\" viewBox=\"0 0 24 24\">\n<title>Heatmap</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.25 3.5L15.9375 6.5H19.25L21.5 10.5L19.25 14.5H15.9375L14.25 17.5H10.9375L9.25 20.5H4.75L2.5 16.5L4.1875 13.5L2.5 10.5L4.75 6.5H8.0625L9.75 3.5H14.25ZM10.9375 9.5L9.8036 7.48417L10.9197 5.5H13.0803L14.1964 7.48417L13.0625 9.5H10.9375ZM5.91969 12.5H8.0625L9.1875 10.5L8.0625 8.5H5.9197L4.79469 10.5L5.91969 12.5ZM10.9375 15.5L9.8125 13.5L10.9375 11.5H13.0625L14.1964 13.5158L13.0803 15.5H10.9375ZM5.9197 14.5L4.79469 16.5L5.91969 18.5H8.08031L9.1964 16.5158L8.0625 14.5H5.9197ZM18.0803 8.5H15.9375L14.8125 10.5L15.9375 12.5H18.0803L19.2053 10.5L18.0803 8.5Z\"/>\n</symbol>\n<symbol id=\"icon-Satellite\" viewBox=\"0 0 24 24\">\n<title>Satellite</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 6L14 2L10 6V8.58577L8.70712 7.29289L7.29291 8.70711L8.5858 10H6L2 14L6 18L10 14V11.4142L12.2929 13.7071L13.7071 12.2929L11.4142 10H14L18 6ZM12 8V6.82843L14 4.82843L15.1716 6L13.1716 8H12ZM8 13.1716V12H6.82843L4.82843 14L6 15.1716L8 13.1716Z\"/>\n<path d=\"M22 12C22 17.5228 17.5228 22 12 22V20C16.4183 20 20 16.4183 20 12H22Z\"/>\n<path d=\"M12 18C15.3137 18 18 15.3137 18 12H16C16 14.2091 14.2091 16 12 16V18Z\"/>\n</symbol>\n\n<symbol id=\"icon-Trip-End\" viewBox=\"0 0 24 24\">\n<title>Trip-End</title>\n<path d=\"M17.2724 12L15.1295 15.75H10.8705L10.3739 14.8809L8.99005 15.4826L10 17.25H16L19 12L16 6.75H10L8.99005 8.51741L10.3739 9.11907L10.8705 8.25H15.1295L17.2724 12Z\"/>\n<path d=\"M15 12C15 13.1046 14.1046 14 13 14C12.1607 14 11.4421 13.483 11.1454 12.75H5V11.25H11.1454C11.4421 10.517 12.1607 10 13 10C14.1046 10 15 10.8954 15 12Z\"/>\n</symbol>\n\n<symbol id=\"icon-Trip-Start\" viewBox=\"0 0 24 24\">\n<title>Trip-Start</title>\n<path d=\"M6.72763 12L8.87048 15.75H13.1295L13.6261 14.8809L15.01 15.4826L14 17.25H8L5 12L8 6.75H14L15.01 8.51741L13.6261 9.11907L13.1295 8.25H8.87048L6.72763 12Z\"/>\n<path d=\"M19 12C19 13.1046 18.1046 14 17 14C16.1607 14 15.4421 13.483 15.1454 12.75H10V11.25H15.1454C15.4421 10.517 16.1607 10 17 10C18.1046 10 19 10.8954 19 12Z\"/>\n</symbol>\n\n<!--\n    Action\n-->\n<symbol id=\"icon-Search\" viewBox=\"0 0 24 24\">\n<title>Search</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.9447 16.2893C13.5837 17.3608 11.8665 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8665 17.3608 13.5837 16.2893 14.9447L22 20.6554L20.6554 22L14.9447 16.2893ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z\"/>\n</symbol>\n<symbol id=\"icon-Expand\" viewBox=\"0 0 24 24\">\n<title>Expand</title>\n<path d=\"M16 2H22V8H20V5.3995L12.7552 12.6443L11.341 11.2301L18.5711 4H16V2Z\"/>\n<path d=\"M10 8V10H4V20H14V14H16V20C16 21.1046 15.1046 22 14 22H4C2.89543 22 2 21.1046 2 20V10C2 8.89543 2.89543 8 4 8H10Z\"/>\n<path d=\"M22 20H20V22H22V20Z\"/>\n<path d=\"M20 16H22V18H20V16Z\"/>\n<path d=\"M22 12H20V14H22V12Z\"/>\n<path d=\"M4 2H2V4H4V2Z\"/>\n<path d=\"M6 2H8V4H6V2Z\"/>\n<path d=\"M12 2H10V4H12V2Z\"/>\n</symbol>\n<symbol id=\"icon-Collapse\" viewBox=\"0 0 24 24\">\n<title>Collapse</title>\n<path d=\"M14 2H4C2.89543 2 2 2.89543 2 4V6H4V4H14V2Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 10.5711V8H10V14H16V12H13.3995L21.2435 4.15597L19.8293 2.74176L12 10.5711ZM12 11.8891V12H12.1109L12 11.8891Z\"/>\n<path d=\"M14 20H16V22H14V20Z\"/>\n<path d=\"M20 20H18V22H20C21.1046 22 22 21.1046 22 20V10H20V20Z\"/>\n<path d=\"M2 8H4V10H2V8Z\"/>\n<path d=\"M4 20H2V22H4V20Z\"/>\n<path d=\"M6 20H8V22H6V20Z\"/>\n<path d=\"M12 20H10V22H12V20Z\"/>\n<path d=\"M2 16H4V18H2V16Z\"/>\n<path d=\"M4 12H2V14H4V12Z\"/>\n</symbol>\n<symbol id=\"icon-Image\" viewBox=\"0 0 24 24\">\n<title>Image</title>\n<path d=\"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V16H10L14 12H20V4Z\"/>\n</symbol>\n<symbol id=\"icon-Visibility-On\" viewBox=\"0 0 24 24\">\n<title>Visibility-On</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.00384 12.9771C2.00256 12.9795 2.00128 12.9819 2 12.9844L2.00934 12.9897C3.58805 16.6052 7.46351 20 12 20C16.5365 20 20.412 16.6052 21.9907 12.9897L22 12.9844C21.9987 12.9819 21.9974 12.9795 21.9962 12.9771C21.9974 12.9741 21.9987 12.9712 22 12.9683C21.3061 11.3696 20.1629 9.82529 18.7114 8.59846L19.93 6.69441L18.2451 5.52434L17.0366 7.41268C15.8164 6.70089 14.4561 6.21323 13.0125 6.05533V4H10.9875V6.05533C9.54389 6.21323 8.18364 6.70089 6.96344 7.41268L5.75489 5.52434L4.06997 6.69441L5.28858 8.59846C3.83715 9.82529 2.69385 11.3696 2 12.9683C2.00128 12.9712 2.00256 12.9741 2.00384 12.9771ZM15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z\"/>\n</symbol>\n<symbol id=\"icon-Visibility-Off\" viewBox=\"0 0 24 24\">\n<title>Visibility-Off</title>\n<path d=\"M20.2252 7C18.9684 9.38289 15.7697 11.7266 12 11.7266C8.23034 11.7266 5.03156 9.38289 3.77483 7L2 8.01565C2.75923 9.45523 4.02271 10.8317 5.6196 11.8843L4.06997 14.3056L5.75489 15.4757L7.42544 12.8655C8.52483 13.3462 9.72493 13.6737 10.9875 13.7895V17H13.0125V13.7895C14.2751 13.6737 15.4752 13.3462 16.5746 12.8655L18.2451 15.4757L19.93 14.3056L18.3804 11.8843C19.9773 10.8317 21.2408 9.45523 22 8.01565L20.2252 7Z\"/>\n</symbol>\n<symbol id=\"icon-Delete\" viewBox=\"0 0 24 24\">\n<title>Delete</title>\n<path d=\"M16 3V4H19V6H5V4H8V3H16Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7H6V19ZM9 10H11V18H9V10ZM15 10H13V18H15V10Z\"/>\n</symbol>\n<symbol id=\"icon-Camera\" viewBox=\"0 0 24 24\">\n<title>Camera</title>\n<path d=\"M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 2C0.895431 2 0 2.89543 0 4V16C0 17.1046 0.895431 18 2 18H18C19.1046 18 20 17.1046 20 16V4C20 2.89543 19.1046 2 18 2H16L15 0H5L4 2H2ZM10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM4 5C4 5.55228 3.55228 6 3 6C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4C3.55228 4 4 4.44772 4 5Z\"/>\n</symbol>\n<symbol id=\"icon-Download\" viewBox=\"0 0 24 24\">\n<title>Download</title>\n<path d=\"M11 3H13V10.5822L16.59 7L18 8.41L12 14.41L6 8.41L7.41 7L11 10.5822V3Z\"/>\n<path d=\"M19 21C20.1046 21 21 20.1046 21 19V13H19V19H5V13H3V19C3 20.1046 3.89543 21 5 21H19Z\"/>\n</symbol>\n<symbol id=\"icon-Upload\" viewBox=\"0 0 24 24\">\n<title>Upload</title>\n<path d=\"M13 6.82782L16.59 10.41L18 9L12 3L6 9L7.41 10.41L11 6.82782V14H13V6.82782Z\"/>\n<path d=\"M19 21C20.1046 21 21 20.1046 21 19V13H19V19H5V13H3V19C3 20.1046 3.89543 21 5 21H19Z\"/>\n</symbol>\n<symbol id=\"icon-Print\" viewBox=\"0 0 24 24\">\n<title>Print</title>\n<path d=\"M7 3H18V7H7V3Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 21V17H22V10C22 8.89543 21.1046 8 20 8H4C2.89543 8 2 8.89543 2 10V17H6V21H18ZM16 14H8V19H16V14ZM6 11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10C5.55228 10 6 10.4477 6 11Z\"/>\n</symbol>\n<symbol id=\"icon-Email\" viewBox=\"0 0 24 24\">\n<title>Email</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM20 18H4V8L12 13L20 8V18Z\"/>\n</symbol>\n<symbol id=\"icon-Copy-Paste\" viewBox=\"0 0 24 24\">\n<title>Copy-Paste</title>\n<path d=\"M4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H6V14H4V4H14V6H16V4C16 2.89543 15.1046 2 14 2H4Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 10C8 8.89543 8.89543 8 10 8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H10C8.89543 22 8 21.1046 8 20V10ZM10 10H20V20H10V10Z\"/>\n</symbol>\n<symbol id=\"icon-Drawing\" viewBox=\"0 0 24 24\">\n<title>Drawing</title>\n<path d=\"M6 6.73244C6.30363 6.5568 6.5568 6.30363 6.73244 6H17.2676C17.4432 6.30363 17.6964 6.5568 18 6.73244V13H20V6.73244C20.5978 6.38663 21 5.74028 21 5C21 3.89543 20.1046 3 19 3C18.2597 3 17.6134 3.4022 17.2676 4H6.73244C6.38663 3.4022 5.74028 3 5 3C3.89543 3 3 3.89543 3 5C3 5.74028 3.4022 6.38663 4 6.73244V17.2676C3.4022 17.6134 3 18.2597 3 19C3 20.1046 3.89543 21 5 21C5.74028 21 6.38663 20.5978 6.73244 20H13V18H6.73244C6.5568 17.6964 6.30363 17.4432 6 17.2676V6.73244Z\"/>\n<path d=\"M21 15H15V21H21V15Z\"/>\n</symbol>\n<symbol id=\"icon-Layer\" viewBox=\"0 0 24 24\">\n<title>Layer</title>\n<path d=\"M4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H6V14H4V4H14V6H16V4C16 2.89543 15.1046 2 14 2H4Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 10C8 8.89543 8.89543 8 10 8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H10C8.89543 22 8 21.1046 8 20V10Z\"/>\n</symbol>\n<symbol id=\"icon-Pointer\" viewBox=\"0 0 24 24\">\n<title>Pointer</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.64706 19.0588L4 4L19.0588 9.64706L9.64706 19.0588ZM10.3831 15.6607L7.21657 7.21657L15.6607 10.3831L10.3831 15.6607Z\"/>\n<path d=\"M17.1765 14.3529L14.3529 17.1765L17.1765 20L20 17.1765L17.1765 14.3529Z\"/>\n</symbol>\n<symbol id=\"icon-Calendar\" viewBox=\"0 0 24 24\">\n<title>Calendar</title>\n<path d=\"M10 16V12H6V16H10Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2V4H8V2H6V4H4.00001C2.89544 4 2.00001 4.89543 2.00001 6L2 20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4H18V2H16ZM20 20H4V10H20V20Z\"/>\n</symbol>\n<symbol id=\"icon-Day\" viewBox=\"0 0 24 24\">\n<title>Day</title>\n<path d=\"M10 16V12H6V16H10Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2V4H8V2H6V4H4.00001C2.89544 4 2.00001 4.89543 2.00001 6L2 20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4H18V2H16ZM20 20H4V10H20V20Z\"/>\n</symbol>\n<symbol id=\"icon-Week\" viewBox=\"0 0 24 24\">\n<title>Week</title>\n<path d=\"M16 16V12H6V16H16Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2V4H8V2H6V4H4.00001C2.89544 4 2.00001 4.89543 2.00001 6L2 20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4H18V2H16ZM20 20H4V10H20V20Z\"/>\n</symbol>\n<symbol id=\"icon-Month\" viewBox=\"0 0 24 24\">\n<title>Month</title>\n<path d=\"M18 18V12H6V18H18Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2V4H8V2H6V4H4.00001C2.89544 4 2.00001 4.89543 2.00001 6L2 20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4H18V2H16ZM20 20H4V10H20V20Z\"/>\n</symbol>\n<!--\n    Social\n-->\n<symbol id=\"icon-Facebook\" viewBox=\"0 0 24 24\">\n<title>Facebook</title>\n<path d=\"M13.9846 23V11.9987H16.6472L17 8.20761H13.9846L13.9891 6.31012C13.9891 5.32134 14.0715 4.79153 15.3166 4.79153H16.9812V1H14.3182C11.1196 1 9.9938 2.83909 9.9938 5.93187V8.20804H8V11.9991H9.9938V23H13.9846Z\"/>\n</symbol>\n<symbol id=\"icon-Twitter\" viewBox=\"0 0 24 24\">\n<title>Twitter</title>\n<path d=\"M7.91856 20.8761C16.2205 20.8761 20.7613 13.9981 20.7613 8.03342C20.7613 7.83806 20.7613 7.64358 20.7481 7.44998C21.6315 6.81103 22.394 6.01988 23 5.11358C22.1762 5.47861 21.3023 5.71799 20.4075 5.82374C21.3498 5.25965 22.055 4.37242 22.3919 3.32718C21.5059 3.85294 20.5366 4.22348 19.5258 4.42278C18.8452 3.69915 17.9452 3.21997 16.9648 3.05941C15.9845 2.89885 14.9786 3.06586 14.1028 3.53458C13.227 4.00331 12.53 4.74763 12.1198 5.65235C11.7097 6.55708 11.6091 7.57178 11.8337 8.53942C10.0391 8.44946 8.28358 7.98312 6.68096 7.17066C5.07835 6.35821 3.6645 5.21781 2.5312 3.8235C1.954 4.81717 1.77722 5.99346 2.03684 7.11289C2.29647 8.23232 2.97298 9.21071 3.92864 9.84886C3.21033 9.82757 2.50769 9.6338 1.88 9.2839C1.88 9.30238 1.88 9.32174 1.88 9.3411C1.88029 10.3832 2.24103 11.3931 2.90105 12.1996C3.56107 13.0061 4.47972 13.5594 5.5012 13.7657C4.83669 13.947 4.13947 13.9735 3.46312 13.8432C3.75155 14.7401 4.31308 15.5243 5.06918 16.0864C5.82528 16.6484 6.73814 16.9601 7.68008 16.9777C6.08177 18.2339 4.10733 18.9158 2.07448 18.9137C1.71536 18.9131 1.35658 18.8913 1 18.8486C3.06416 20.1733 5.46592 20.8759 7.91856 20.8726\"/>\n</symbol>\n<symbol id=\"icon-LinkedIn\" viewBox=\"0 0 24 24\">\n<title>LinkedIn</title>\n<path d=\"M6.82259 4.22475C6.79477 2.96188 5.89169 2 4.42521 2C2.95873 2 2 2.96188 2 4.22475C2 5.46146 2.9304 6.45104 4.36956 6.45104H4.39696C5.89169 6.45104 6.82259 5.46146 6.82259 4.22475Z\"/>\n<path d=\"M6.54029 8.20901H2.25352V21.089H6.54029V8.20901Z\"/>\n<path d=\"M17.0643 7.90662C19.8852 7.90662 22 9.74788 22 13.704L21.9998 21.089H17.7132V14.1982C17.7132 12.4674 17.0929 11.2864 15.5411 11.2864C14.3568 11.2864 13.6514 12.0826 13.3415 12.8516C13.2282 13.1272 13.2004 13.5112 13.2004 13.8961V21.0894H8.91309C8.91309 21.0894 8.96959 9.41799 8.91309 8.20941H13.2004V10.0337C13.7693 9.15675 14.7883 7.90662 17.0643 7.90662Z\"/>\n</symbol>\n<!--\n    Content\n-->\n<symbol id=\"icon-Bike\" viewBox=\"0 0 24 24\">\n<title>Bike</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 5.5H16.1529L16.4862 7.5H7.3406L6.01106 10.6023C5.68452 10.5352 5.34637 10.5 5 10.5C2.23858 10.5 0 12.7386 0 15.5C0 18.2614 2.23858 20.5 5 20.5C7.76142 20.5 10 18.2614 10 15.5C10 14.9579 9.91374 14.436 9.75419 13.9472L16.8992 9.97776L17.0518 10.8937C15.2583 11.6532 14 13.4297 14 15.5C14 18.2614 16.2386 20.5 19 20.5C21.7614 20.5 24 18.2614 24 15.5C24 12.7432 21.7689 10.5075 19.0138 10.5L17.8471 3.5H14V5.5ZM13.6409 9.5H8.6594L7.84913 11.3906C8.18688 11.6252 8.49434 11.9004 8.76443 12.2091L13.6409 9.5ZM17.3968 12.9638L18.0136 16.6644L19.9864 16.3356L19.3505 12.5203C20.8422 12.6938 22 13.9617 22 15.5C22 17.1569 20.6569 18.5 19 18.5C17.3431 18.5 16 17.1569 16 15.5C16 14.4327 16.5573 13.4956 17.3968 12.9638ZM5.19507 12.5062L4.08085 15.1061L5.91915 15.8939L7.03332 13.2942C7.6277 13.8423 8 14.6277 8 15.5C8 17.1569 6.65685 18.5 5 18.5C3.34315 18.5 2 17.1569 2 15.5C2 13.8431 3.34315 12.5 5 12.5C5.06554 12.5 5.13058 12.5021 5.19507 12.5062Z\"/>\n<path d=\"M5 4.5H10V6.5H5V4.5Z\"/>\n</symbol>\n<symbol id=\"icon-Car\" viewBox=\"0 0 24 24\">\n<title>Car</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.6599 10.1114L19.3462 5.26194C19.0087 3.93201 17.8115 3 16.4385 3H7.56156C6.18854 3 4.99126 3.93202 4.65376 5.26196L3.34011 10.1114C2.55978 10.3841 2 11.1267 2 12V18H3.5V21H6.5V18H17.5V21H20.5V18H22V12C22 11.1267 21.4402 10.3841 20.6599 10.1114ZM7.56156 5C7.10269 5 6.70271 5.3123 6.59141 5.75746L6.58904 5.76695L5.44237 10H18.5576L17.411 5.76695L17.4086 5.75746C17.2973 5.3123 16.8973 5 16.4385 5H7.56156ZM5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15ZM20 13.5C20 14.3284 19.3284 15 18.5 15C17.6716 15 17 14.3284 17 13.5C17 12.6716 17.6716 12 18.5 12C19.3284 12 20 12.6716 20 13.5Z\"/>\n</symbol>\n<symbol id=\"icon-Scooter\" viewBox=\"0 0 24 24\">\n<title>Scooter</title>\n<path d=\"M14 3V5H16.3077L18 16H20L18 3H14Z\"/>\n<path d=\"M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17H19C20.1046 17 21 17.8954 21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19H7Z\"/>\n</symbol>\n<symbol id=\"icon-Moped\" viewBox=\"0 0 24 24\">\n<title>Moped</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 5.5H16.1529L17.0518 10.8938C16.2334 11.2403 15.5265 11.7986 14.9996 12.5H10V9.5H4C1.79086 9.5 0 11.2909 0 13.5V14.5H14.1C14.0344 14.8231 14 15.1575 14 15.5C14 18.2614 16.2386 20.5 19 20.5C21.7614 20.5 24 18.2614 24 15.5C24 12.7432 21.7689 10.5075 19.0138 10.5L17.8471 3.5H14V5.5ZM16.1707 14.5H17.6529L18.0136 16.6644L19.9864 16.3356L19.3505 12.5203C20.8422 12.6938 22 13.9617 22 15.5C22 17.1569 20.6569 18.5 19 18.5C17.3431 18.5 16 17.1569 16 15.5C16 15.1494 16.0602 14.8128 16.1707 14.5Z\"/>\n<path d=\"M5 20.5C2.23858 20.5 0 18.2614 0 15.5H2C2 17.1569 3.34315 18.5 5 18.5C6.65685 18.5 8 17.1569 8 15.5H10C10 18.2614 7.76142 20.5 5 20.5Z\"/>\n<path d=\"M10 6.5H4V8.5H10V6.5Z\"/>\n</symbol>\n<symbol id=\"icon-eBike\" viewBox=\"0 0 24 24\">\n<title>eBike</title>\n<path d=\"M20 7.25L22 3V5.75H24L22 10V7.25H20Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.1529 6H14V4H17.8471L19.0138 11C21.7689 11.0075 24 13.2432 24 16C24 18.7614 21.7614 21 19 21C16.2386 21 14 18.7614 14 16C14 13.9297 15.2583 12.1532 17.0518 11.3937L16.8992 10.4778L9.75419 14.4472C9.91374 14.936 10 15.4579 10 16C10 18.7614 7.76142 21 5 21C2.23858 21 0 18.7614 0 16C0 13.2386 2.23858 11 5 11C5.34637 11 5.68452 11.0352 6.01106 11.1023L7.3406 8H16.4862L16.1529 6ZM8.6594 10H13.6409L8.76443 12.7091C8.49434 12.4004 8.18688 12.1252 7.84913 11.8906L8.6594 10ZM18.0136 17.1644L17.3968 13.4638C16.5573 13.9956 16 14.9327 16 16C16 17.6569 17.3431 19 19 19C20.6569 19 22 17.6569 22 16C22 14.4617 20.8422 13.1938 19.3505 13.0203L19.9864 16.8356L18.0136 17.1644ZM4.08085 15.6061L5.19507 13.0062C5.13058 13.0021 5.06554 13 5 13C3.34315 13 2 14.3431 2 16C2 17.6569 3.34315 19 5 19C6.65685 19 8 17.6569 8 16C8 15.1277 7.6277 14.3423 7.03332 13.7942L5.91915 16.3939L4.08085 15.6061Z\"/>\n<path d=\"M10 5H5V7H10V5Z\"/>\n</symbol>\n<symbol id=\"icon-Alert\" viewBox=\"0 0 24 24\">\n<title>Alert</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23 21L12 3L1 21H23ZM11 9H13V14H11V9ZM13 18V16H11V18H13Z\"/>\n</symbol>\n<symbol id=\"icon-Information\" viewBox=\"0 0 24 24\">\n<title>Information</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM13 7V9H11V7H13ZM13 17L13 11H11L11 17H13Z\"/>\n</symbol>\n<symbol id=\"icon-Time\" viewBox=\"0 0 24 24\">\n<title>Time</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 13.5V7H13V12.5857L15.9498 15.5355L14.5356 16.9497L11 13.5Z\"/>\n</symbol>\n<symbol id=\"icon-Circle\" viewBox=\"0 0 24 24\">\n<title>Circle</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z\"/>\n</symbol>\n<symbol id=\"icon-Triangle\" viewBox=\"0 0 24 24\">\n<title>Triangle</title>\n<path d=\"M23 21L12 3L1 21H23Z\"/>\n</symbol>\n<symbol id=\"icon-Stopwatch\" viewBox=\"0 0 24 24\">\n<title>Stopwatch</title>\n<path d=\"M9 2.5H15V4.5H9V2.5Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21.5C16.4183 21.5 20 17.9183 20 13.5C20 11.8957 19.5277 10.4016 18.7146 9.1493L19.9497 7.91421L18.5355 6.5L17.4199 7.61565C15.9946 6.30221 14.091 5.5 12 5.5C7.58172 5.5 4 9.08172 4 13.5C4 17.9183 7.58172 21.5 12 21.5ZM13 14.5V8.5H11V14.5H13Z\"/>\n</symbol>\n<symbol id=\"icon-Response\" viewBox=\"0 0 24 24\">\n<title>Response</title>\n<path d=\"M15 2.5H9V4.5H15V2.5Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 13.5C20 17.9183 16.4183 21.5 12 21.5C7.58172 21.5 4 17.9183 4 13.5C4 9.08172 7.58172 5.5 12 5.5C16.4183 5.5 20 9.08172 20 13.5ZM12 13.5H7C7 10.7386 9.23858 8.5 12 8.5V13.5Z\"/>\n</symbol>\n<symbol id=\"icon-Compliant\" viewBox=\"0 0 24 24\">\n<title>Compliant</title>\n<path d=\"M2 5H14V7H2V5Z\"/>\n<path d=\"M2 9H14V11H2V9Z\"/>\n<path d=\"M2 15H9V13H2V15Z\"/>\n<path d=\"M22 12L20.5 10.5L15.01 16L12 13L10.5 14.5L15.01 19L22 12Z\"/>\n</symbol>\n<symbol id=\"icon-Non-Compliant\" viewBox=\"0 0 24 24\">\n<title>Non-Compliant</title>\n<path d=\"M2 5H14V7H2V5Z\"/>\n<path d=\"M2 9H11V11H2V9Z\"/>\n<path d=\"M14.9289 10.5147L13.5147 11.9289L16.3431 14.7574L13.5147 17.5858L14.9289 19L17.7574 16.1716L20.5858 19L22 17.5858L19.1716 14.7574L22 11.9289L20.5858 10.5147L17.7574 13.3431L14.9289 10.5147Z\"/>\n<path d=\"M11 15H2V13H11V15Z\"/>\n</symbol>\n<symbol id=\"icon-Code\" viewBox=\"0 0 24 24\">\n<title>Code</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.8 12L7.4 15.6192L6 17.0267L1 12L6 6.97328L7.4 8.38076L3.8 12ZM20.2 12L16.6 15.6192L18 17.0267L23 12L18 6.97328L16.6 8.38076L20.2 12Z\"/>\n<path d=\"M13.3635 3L15.2954 3.5204L10.6366 21L8.70476 20.4796L13.3635 3Z\"/>\n</symbol>\n<symbol id=\"icon-Geography\" viewBox=\"0 0 24 24\">\n<title>Geography</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM14 5H16V11H14V5ZM8 15V13H16V15H8ZM4 13H6V15H4V13ZM12 11H4V5H6.58582L12 10.4142V11ZM12 7.58575V5H9.41425L12 7.58575Z\"/>\n<path d=\"M20 7H22V19C22 20.1046 21.1046 21 20 21H6V19H20V7Z\"/>\n</symbol>\n<symbol id=\"icon-General\" viewBox=\"0 0 24 24\">\n<title>General</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM9 11H19V9H9V11ZM15 15H9V13H15V15ZM9 7H19V5H9V7Z\"/>\n</symbol>\n<symbol id=\"icon-Status\" viewBox=\"0 0 24 24\">\n<title>Status</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.999 2.5H3.991C2.89045 2.5 2 3.4 2 4.5V16.5C2 17.6046 2.89588 18.5 4.001 18.5H7.0025L9.994 21.5L12.9955 18.5H19.999C21.0995 18.5 22 17.6 22 16.5V4.5C22 3.4 21.0995 2.5 19.999 2.5ZM12.9955 14.5H10.9945V12.5H12.9955V14.5ZM10.9945 10.5H12.9955V6.5H10.9945V10.5Z\"/>\n</symbol>\n<symbol id=\"icon-Comment\" viewBox=\"0 0 24 24\">\n<title>Comment</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.991 2.5H19.999C21.0995 2.5 22 3.4 22 4.5V16.5C22 17.6 21.0995 18.5 19.999 18.5H12.9955L9.994 21.5L7.0025 18.5H4C2.89543 18.5 2 17.6046 2 16.5V4.5C2 3.4 2.89045 2.5 3.991 2.5ZM10.9945 11.5H12.9955V9.5H10.9945V11.5ZM16.9975 11.5H14.9965V9.5H16.9975V11.5ZM6.9925 11.5H8.9935V9.5H6.9925V11.5Z\"/>\n</symbol>\n<symbol id=\"icon-Fees\" viewBox=\"0 0 24 24\">\n<title>Fees</title>\n\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 2.5H18C19.6569 2.5 21 3.84315 21 5.5V8.5H17V21.5H15V5.5C15 5.14936 15.0602 4.81278 15.1707 4.5H7C5.89543 4.5 5 5.39543 5 6.5L5 21.5H3V6.5C3 4.29086 4.79086 2.5 7 2.5ZM19 5.5C19 4.94771 18.5523 4.5 18 4.5C17.4477 4.5 17 4.94771 17 5.5V6.5H19V5.5Z\"/>\n<path d=\"M13 6.5H7V8.5H13V6.5Z\"/>\n<path d=\"M7 10.5H13V12.5H7V10.5Z\"/>\n<path d=\"M10 14.5H7V16.5H10V14.5Z\"/>\n<path d=\"M8 21.5V19.5H6V21.5H8Z\"/>\n<path d=\"M11 19.5V21.5H9V19.5H11Z\"/>\n<path d=\"M14 21.5V19.5H12V21.5H14Z\"/>\n</symbol>\n\n<symbol id=\"icon-Missing-File\" viewBox=\"0 0 24 24\">\n<title>Missing-File</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 4C4 2.89543 4.89543 2 6 2H15L20 7V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM9.33333 11L8 12.3333L10.6667 15L8 17.6667L9.33333 19L12 16.3333L14.6667 19L16 17.6667L13.3333 15L16 12.3333L14.6667 11L12 13.6667L9.33333 11ZM14 4L18 8H14V4Z\"/>\n</symbol>\n<symbol id=\"icon-List-File\" viewBox=\"0 0 24 24\">\n<title>List-File</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7L15 2H6ZM18 8L14 4V8H18ZM17 14H7V12H17V14ZM13 18H7V16H13V18Z\"/>\n</symbol>\n<symbol id=\"icon-Document-Agreement\" viewBox=\"0 0 24 24\">\n<title>Document-Agreement</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 4C3 2.89543 3.89543 2 5 2H14L19 7V13H17V10H11V4H5V20H10V22H5C3.89543 22 3 21.1046 3 20V4ZM13 8H17L13 4V8Z\"/>\n<path d=\"M12.9127 16.953L15.0614 19.151L19.5972 14.5L21 15.9195L15.0614 22L11.5 18.3725L12.9127 16.953Z\"/>\n</symbol>\n<symbol id=\"icon-User-Remove\" viewBox=\"0 0 24 24\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 9.91121 6.8936 11.6137 8.28579 12.7125C4.60205 14.187 2 17.7896 2 22H4C4 17.5817 7.58172 14 12 14ZM12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z\"/>\n<path d=\"M16.4 15L15 16.4L17.1 18.5L15 20.6L16.4 22L18.5 19.9L20.6 22L22 20.6L19.9 18.5L22 16.4L20.6 15L18.5 17.1L16.4 15Z\" />\n</symbol>\n\n<symbol id=\"icon-Document-Privacy\" viewBox=\"0 0 24 24\">\n<title>Document-Privacy</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 4C3 2.89543 3.89543 2 5 2H14L19 7V12H17V10H11V4H5V20H12V22H5C3.89543 22 3 21.1046 3 20V4ZM13 8H17L13 4V8Z\"/>\n<path d=\"M17 22C18 22 21 20 21 16C21 16 19 16 17 14C15 16 13 16 13 16C13 20 16 22 17 22Z\"/>\n</symbol>\n<symbol id=\"icon-Spreadsheet\" viewBox=\"0 0 24 24\">\n<title>Spreadsheet</title>\n<path d=\"M9.25 15.5H11.25V13.5H9.25V15.5Z\"/>\n<path d=\"M12.75 15.5H14.75V13.5H12.75V15.5Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 4C4 2.89543 4.89543 2 6 2H15L20 7V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM14 4L18 8H14V4ZM6 13.5V12H18V13.5H16.25V15.5H18V17H16.25V18.5H14.75V17H12.75V18.5H11.25V17H9.25V18.5H7.75V17H6V15.5H7.75V13.5H6Z\"/>\n</symbol>\n<symbol id=\"icon-Archive\" viewBox=\"0 0 24 24\">\n<title>Archive</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 14H3V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14ZM15 16H9C9 17.1046 9.89543 18 11 18H13C14.1046 18 15 17.1046 15 16Z\"/>\n<path d=\"M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V12H18V4H6V12H4V4Z\"/>\n<path d=\"M8 6H16V8H8V6Z\"/>\n<path d=\"M8 10H14V12H8V10Z\"/>\n</symbol>\n<symbol id=\"icon-Marker\" viewBox=\"0 0 12 17\">\n<title>Marker</title>\n<path d=\"M5.76333 0.13208C2.72523 0.13208 0.263184 2.63863 0.263184 5.73206C0.263184 6.94091 0.647287 8.32766 1.29335 9.25204L5.763 16.1321L10.233 9.25204C10.8791 8.32766 11.2632 6.95867 11.2632 5.73206C11.2632 2.63882 8.80132 0.13208 5.76304 0.13208H5.76333ZM5.76333 7.86537C4.61087 7.86537 3.66813 6.90536 3.66813 5.73214C3.66813 4.55876 4.61102 3.5989 5.76333 3.5989C6.91579 3.5989 7.85853 4.55891 7.85853 5.73214C7.85868 6.90536 6.91579 7.86537 5.76333 7.86537Z\" />\n</symbol>\n<symbol id=\"icon-Sunny\" viewBox=\"0 0 24 24\">\n<title>Sunny</title>\n<path d=\"M11 2H13V4H11V2Z\"/>\n<path d=\"M11 22V20H13V22H11Z\"/>\n<path d=\"M22 13.0009L22.0002 11.0009L20.0002 11.0007L20 13.0007L22 13.0009Z\"/>\n<path d=\"M4.00017 10.9993L4 12.9993L2 12.9991L2.00017 10.9991L4.00017 10.9993Z\"/>\n<path d=\"M5.63704 19.7797L4.2227 18.3656L5.6368 16.9513L7.05113 18.3654L5.63704 19.7797Z\"/>\n<path d=\"M16.9495 5.63647L18.3638 7.05057L19.7779 5.63624L18.3636 4.22214L16.9495 5.63647Z\"/>\n<path d=\"M18.3634 19.7796L19.7778 18.3655L18.3637 16.9511L16.9493 18.3652L18.3634 19.7796Z\"/>\n<path d=\"M7.05095 5.63647L5.63662 7.05057L4.22252 5.63624L5.63686 4.22214L7.05095 5.63647Z\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 12C18 15.3137 15.3138 18 12 18C8.68634 18 6.00005 15.3137 6.00005 12C6.00005 8.68629 8.68634 6 12 6C15.3138 6 18 8.68629 18 12ZM16 12C16 14.2091 14.2092 16 12 16C9.79091 16 8.00005 14.2091 8.00005 12C8.00005 9.79086 9.79091 8 12 8C14.2092 8 16 9.79086 16 12Z\"/>\n</symbol>\n<symbol id=\"icon-Cloudy\" viewBox=\"0 0 24 24\">\n<title>Cloudy</title>\n<path d=\"M12 6C10.4176 6 9.04974 6.91891 8.40103 8.25223C9.91916 8.82 11 10.2838 11 12H9C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12H3C3 10.0221 4.43551 8.37957 6.32148 8.05731C7.12876 5.69704 9.3662 4 12 4C14.6338 4 16.8712 5.69704 17.6785 8.05732C19.5645 8.37957 21 10.0221 21 12H19C19 10.8954 18.1046 10 17 10H16C16 7.79086 14.2091 6 12 6Z\"/>\n<path d=\"M2 14H6V16H2V14Z\"/>\n<path d=\"M22 16V14H8V16H22Z\"/>\n<path d=\"M18 20V18H6V20H18Z\"/>\n</symbol>\n<symbol id=\"icon-Rainy\" viewBox=\"0 0 24 24\">\n<title>Rainy</title>\n<path d=\"M8.40103 7.25223C9.04974 5.91891 10.4176 5 12 5C14.2091 5 16 6.79086 16 9H17C18.1046 9 19 9.89543 19 11H21C21 9.02214 19.5645 7.37957 17.6785 7.05732C16.8712 4.69704 14.6338 3 12 3C9.3662 3 7.12876 4.69704 6.32148 7.05731C4.43551 7.37957 3 9.02214 3 11H5C5 9.89543 5.89543 9 7 9C8.10457 9 9 9.89543 9 11H11C11 9.28378 9.91916 7.82 8.40103 7.25223Z\"/>\n<path d=\"M3 13H5V15H3V13Z\"/>\n<path d=\"M7 13H9V17H7V13Z\"/>\n<path d=\"M13 15V13H11V15H13Z\"/>\n<path d=\"M11 19V17H13V19H11Z\"/>\n<path d=\"M19 13H21V17H19V13Z\"/>\n<path d=\"M17 13H15V21H17V13Z\"/>\n</symbol>\n<symbol id=\"icon-Stormy\" viewBox=\"0 0 24 24\">\n<title>Stormy</title>\n<path d=\"M8.40103 8.25223C9.04974 6.91891 10.4176 6 12 6C14.2091 6 16 7.79086 16 10H17C18.1046 10 19 10.8954 19 12H21C21 10.0221 19.5645 8.37957 17.6785 8.05732C16.8712 5.69704 14.6338 4 12 4C9.3662 4 7.12876 5.69704 6.32148 8.05731C4.43551 8.37957 3 10.0221 3 12H5C5 10.8954 5.89543 10 7 10C8.10457 10 9 10.8954 9 12H11C11 10.2838 9.91916 8.82 8.40103 8.25223Z\"/>\n<path d=\"M15 12L13.8 15H17L15 20H13L14.2 17H11L13 12H15Z\"/>\n<path d=\"M2 14H9V16H2V14Z\"/>\n<path d=\"M22 14H19V16H22V14Z\"/>\n</symbol>\n<symbol id=\"icon-Battery-66-100\" viewBox=\"0 0 12 24\">\n<title>Battery-66-100</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 2V4H2C0.895431 4 0 4.89543 0 6V20C0 21.1046 0.895431 22 2 22H10C11.1046 22 12 21.1046 12 20V6C12 4.89543 11.1046 4 10 4H9V2H3ZM2 5H10C10.5523 5 11 5.44772 11 6V20C11 20.5523 10.5523 21 10 21H2C1.44772 21 1 20.5523 1 20V6C1 5.44772 1.44772 5 2 5Z\" fill=\"#C5CDD4\"/>\n<rect x=\"2\" y=\"6\" width=\"8\" height=\"14\" rx=\"1\" fill=\"#0FBE95\"/>\n</symbol>\n<symbol id=\"icon-Battery-33-66\" viewBox=\"0 0 12 24\">\n<title>Battery-33-66</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 2V4H2C0.895431 4 0 4.89543 0 6V20C0 21.1046 0.895431 22 2 22H10C11.1046 22 12 21.1046 12 20V6C12 4.89543 11.1046 4 10 4H9V2H3ZM2 5H10C10.5523 5 11 5.44772 11 6V20C11 20.5523 10.5523 21 10 21H2C1.44772 21 1 20.5523 1 20V6C1 5.44772 1.44772 5 2 5Z\" fill=\"#C5CDD4\"/>\n<path d=\"M2 12H10V19C10 19.5523 9.55228 20 9 20H3C2.44772 20 2 19.5523 2 19V12Z\" fill=\"#FFC700\"/>\n</symbol>\n<symbol id=\"icon-Battery-0-33\" viewBox=\"0 0 12 24\">\n<title>Battery-0-33</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 2V4H2C0.895431 4 0 4.89543 0 6V20C0 21.1046 0.895431 22 2 22H10C11.1046 22 12 21.1046 12 20V6C12 4.89543 11.1046 4 10 4H9V2H3ZM2 5H10C10.5523 5 11 5.44772 11 6V20C11 20.5523 10.5523 21 10 21H2C1.44772 21 1 20.5523 1 20V6C1 5.44772 1.44772 5 2 5Z\" fill=\"#C5CDD4\"/>\n<path d=\"M2 17H10V19C10 19.5523 9.55228 20 9 20H3C2.44772 20 2 19.5523 2 19V17Z\" fill=\"#FE3432\"/>\n</symbol>\n<symbol id=\"icon-Battery-Disabled\" viewBox=\"0 0 12 24\">\n<title>Battery-Disabled</title>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 2V4H2C0.895431 4 0 4.89543 0 6V20C0 21.1046 0.895431 22 2 22H10C11.1046 22 12 21.1046 12 20V6C12 4.89543 11.1046 4 10 4H9V2H3ZM2 5H10C10.5523 5 11 5.44772 11 6V20C11 20.5523 10.5523 21 10 21H2C1.44772 21 1 20.5523 1 20V6C1 5.44772 1.44772 5 2 5Z\" fill=\"#C5CDD4\"/>\n<path d=\"M2 7C2 6.44772 2.44772 6 3 6H9C9.55228 6 10 6.44772 10 7V19C10 19.5523 9.55228 20 9 20H3C2.44772 20 2 19.5523 2 19V7Z\" fill=\"#DFE3E7\"/>\n</symbol>\n<symbol id=\"icon-Fuel-Status-66-100\" viewBox=\"0 0 16 20\">\n<title>Fuel-Status-66-100</title>\n<path d=\"M3.78628 1.78406H8.1815C9.27445 1.78406 10.1605 2.60006 10.1605 3.60006C10.1605 4.60406 9.27054 5.41606 8.1815 5.41606H3.78628C2.69333 5.41606 1.80726 4.60006 1.80726 3.60006C1.80726 2.60006 2.69724 1.78406 3.78628 1.78406ZM3.78628 4.40806H8.1815C8.72017 4.40806 9.17686 4.04006 9.17686 3.60406C9.17686 3.16806 8.72017 2.80006 8.1815 2.80006H3.78628C3.24762 2.80006 2.79092 3.16806 2.79092 3.60406C2.79092 4.04006 3.24762 4.40806 3.78628 4.40806Z\" fill=\"#C5CDD4\"/>\n<path d=\"M3.19298 0H9.68822C9.94975 0 10.1996 0.116 10.3791 0.312L11.1949 1.232L11.9092 0.616C12.3894 0.2 13.1115 0.236 13.5526 0.696L15.5199 2.744C15.9766 3.22 15.9922 3.98 15.5472 4.472L14.9929 5.088L15.7151 5.804C15.8946 5.984 16 6.236 16 6.496V17.736C16 18.984 15.0163 19.996 13.8063 19.996H2.19371C0.983662 19.996 7.62939e-06 18.984 7.62939e-06 17.736V3.288C-0.00389671 1.476 1.42865 0 3.19298 0ZM0.979759 17.74C0.979759 18.428 1.52233 18.988 2.18981 18.988H13.8063C14.4738 18.988 15.0163 18.428 15.0163 17.74V6.52L9.6648 1.012H3.18908C1.97122 1.012 0.975856 2.032 0.975856 3.288V17.74H0.979759Z\" fill=\"#C5CDD4\"/>\n<rect x=\"2\" y=\"7\" width=\"12\" height=\"11\" rx=\"1\" fill=\"#0FBE95\"/>\n</symbol>\n<symbol id=\"icon-Fuel-Status-33-66\" viewBox=\"0 0 16 20\">\n<title>Fuel-Status-33-66</title>\n<path d=\"M3.78628 1.78406H8.1815C9.27445 1.78406 10.1605 2.60006 10.1605 3.60006C10.1605 4.60406 9.27054 5.41606 8.1815 5.41606H3.78628C2.69333 5.41606 1.80726 4.60006 1.80726 3.60006C1.80726 2.60006 2.69724 1.78406 3.78628 1.78406ZM3.78628 4.40806H8.1815C8.72017 4.40806 9.17686 4.04006 9.17686 3.60406C9.17686 3.16806 8.72017 2.80006 8.1815 2.80006H3.78628C3.24762 2.80006 2.79092 3.16806 2.79092 3.60406C2.79092 4.04006 3.24762 4.40806 3.78628 4.40806Z\" fill=\"#C5CDD4\"/>\n<path d=\"M3.19298 0H9.68822C9.94975 0 10.1996 0.116 10.3791 0.312L11.1949 1.232L11.9092 0.616C12.3894 0.2 13.1115 0.236 13.5526 0.696L15.5199 2.744C15.9766 3.22 15.9922 3.98 15.5472 4.472L14.9929 5.088L15.7151 5.804C15.8946 5.984 16 6.236 16 6.496V17.736C16 18.984 15.0163 19.996 13.8063 19.996H2.19371C0.983662 19.996 7.62939e-06 18.984 7.62939e-06 17.736V3.288C-0.00389671 1.476 1.42865 0 3.19298 0ZM0.979759 17.74C0.979759 18.428 1.52233 18.988 2.18981 18.988H13.8063C14.4738 18.988 15.0163 18.428 15.0163 17.74V6.52L9.6648 1.012H3.18908C1.97122 1.012 0.975856 2.032 0.975856 3.288V17.74H0.979759Z\" fill=\"#C5CDD4\"/>\n<rect width=\"12\" height=\"6\" rx=\"1\" transform=\"matrix(-1 0 0 1 14 12)\" fill=\"#F4BD00\"/>\n</symbol>\n<symbol id=\"icon-Fuel-Status-0-33\" viewBox=\"0 0 16 20\">\n<title>Fuel-Status-0-33</title>\n<path d=\"M3.78628 1.78406H8.1815C9.27445 1.78406 10.1605 2.60006 10.1605 3.60006C10.1605 4.60406 9.27054 5.41606 8.1815 5.41606H3.78628C2.69333 5.41606 1.80726 4.60006 1.80726 3.60006C1.80726 2.60006 2.69724 1.78406 3.78628 1.78406ZM3.78628 4.40806H8.1815C8.72017 4.40806 9.17686 4.04006 9.17686 3.60406C9.17686 3.16806 8.72017 2.80006 8.1815 2.80006H3.78628C3.24762 2.80006 2.79092 3.16806 2.79092 3.60406C2.79092 4.04006 3.24762 4.40806 3.78628 4.40806Z\" fill=\"#C5CDD4\"/>\n<path d=\"M3.19298 0H9.68822C9.94975 0 10.1996 0.116 10.3791 0.312L11.1949 1.232L11.9092 0.616C12.3894 0.2 13.1115 0.236 13.5526 0.696L15.5199 2.744C15.9766 3.22 15.9922 3.98 15.5472 4.472L14.9929 5.088L15.7151 5.804C15.8946 5.984 16 6.236 16 6.496V17.736C16 18.984 15.0163 19.996 13.8063 19.996H2.19371C0.983662 19.996 7.62939e-06 18.984 7.62939e-06 17.736V3.288C-0.00389671 1.476 1.42865 0 3.19298 0ZM0.979759 17.74C0.979759 18.428 1.52233 18.988 2.18981 18.988H13.8063C14.4738 18.988 15.0163 18.428 15.0163 17.74V6.52L9.6648 1.012H3.18908C1.97122 1.012 0.975856 2.032 0.975856 3.288V17.74H0.979759Z\" fill=\"#C5CDD4\"/>\n<rect width=\"12\" height=\"3\" rx=\"1\" transform=\"matrix(-1 0 0 1 14 15)\" fill=\"#FE3432\"/>\n</symbol>\n<symbol id=\"icon-Fuel-Status-Disabled\" viewBox=\"0 0 16 20\">\n<title>Fuel-Status-Disabled</title>\n<path d=\"M3.78628 1.78406H8.1815C9.27445 1.78406 10.1605 2.60006 10.1605 3.60006C10.1605 4.60406 9.27054 5.41606 8.1815 5.41606H3.78628C2.69333 5.41606 1.80726 4.60006 1.80726 3.60006C1.80726 2.60006 2.69724 1.78406 3.78628 1.78406ZM3.78628 4.40806H8.1815C8.72017 4.40806 9.17686 4.04006 9.17686 3.60406C9.17686 3.16806 8.72017 2.80006 8.1815 2.80006H3.78628C3.24762 2.80006 2.79092 3.16806 2.79092 3.60406C2.79092 4.04006 3.24762 4.40806 3.78628 4.40806Z\" fill=\"#C5CDD4\"/>\n<path d=\"M3.19298 0H9.68822C9.94975 0 10.1996 0.116 10.3791 0.312L11.1949 1.232L11.9092 0.616C12.3894 0.2 13.1115 0.236 13.5526 0.696L15.5199 2.744C15.9766 3.22 15.9922 3.98 15.5472 4.472L14.9929 5.088L15.7151 5.804C15.8946 5.984 16 6.236 16 6.496V17.736C16 18.984 15.0163 19.996 13.8063 19.996H2.19371C0.983662 19.996 7.62939e-06 18.984 7.62939e-06 17.736V3.288C-0.00389671 1.476 1.42865 0 3.19298 0ZM0.979759 17.74C0.979759 18.428 1.52233 18.988 2.18981 18.988H13.8063C14.4738 18.988 15.0163 18.428 15.0163 17.74V6.52L9.6648 1.012H3.18908C1.97122 1.012 0.975856 2.032 0.975856 3.288V17.74H0.979759Z\" fill=\"#C5CDD4\"/>\n<rect width=\"12\" height=\"11\" rx=\"1\" transform=\"matrix(-1 0 0 1 14 7)\" fill=\"#DFE3E7\"/>\n<path d=\"M2.94003 7.28396C3.13603 7.08796 3.45603 7.08796 3.65203 7.28396L8.00003 11.648L12.348 7.28396C12.544 7.08796 12.864 7.08796 13.06 7.28396C13.256 7.47996 13.256 7.80396 13.06 7.99996L8.71203 12.368L13.06 16.732C13.256 16.928 13.256 17.252 13.06 17.448C12.96 17.548 12.832 17.596 12.704 17.596C12.576 17.596 12.448 17.548 12.348 17.448L8.00003 13.08L3.65203 17.448C3.55203 17.548 3.42403 17.596 3.29603 17.596C3.16803 17.596 3.04003 17.548 2.94003 17.448C2.74403 17.252 2.74403 16.928 2.94003 16.732L7.28803 12.364L2.94003 7.99596C2.74403 7.79996 2.74403 7.47996 2.94003 7.28396Z\" fill=\"#C5CDD4\"/>\n</symbol>\n<!--\n    Map\n-->\n<!--\n    Localization\n-->\n<symbol id=\"icon-United-States\" viewBox=\"0 0 24 24\">\n<title>United-States</title>\n<path d=\"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z\" fill=\"#F0F0F0\"/>\n<path d=\"M22.2387 5.7391H11.4783V2.60864H19.4698C20.5649 3.48089 21.5041 4.54041 22.2387 5.7391Z\" fill=\"#D80027\"/>\n<path d=\"M24 12H11.4783V8.86951H23.5866C23.8556 9.86762 24 10.9169 24 12Z\" fill=\"#D80027\"/>\n<path d=\"M12 24C14.8242 24 17.42 23.0239 19.4698 21.3914H4.53019C6.58003 23.0239 9.17583 24 12 24Z\" fill=\"#D80027\"/>\n<path d=\"M22.2387 18.2608H1.76128C1.17155 17.2985 0.714186 16.2467 0.413389 15.1304H23.5866C23.2858 16.2467 22.8284 17.2985 22.2387 18.2608Z\" fill=\"#D80027\"/>\n<path d=\"M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z\" fill=\"#0052B4\"/>\n</symbol>\n<symbol id=\"icon-European-Union\" viewBox=\"0 0 24 24\">\n<title>European-Union</title>\n<path d=\"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z\" fill=\"#0052B4\"/>\n<path d=\"M12 4.69568L12.3886 5.89141H13.6458L12.6286 6.6304L13.0172 7.82613L12 7.0871L10.9828 7.82613L11.3714 6.6304L10.3542 5.89141H11.6115L12 4.69568Z\" fill=\"#FFDA44\"/>\n<path d=\"M6.83505 6.83505L7.95536 7.4058L8.84434 6.51686L8.64761 7.75858L9.76788 8.32938L8.52611 8.52607L8.32942 9.76788L7.75863 8.64761L6.51691 8.84435L7.40589 7.95536L6.83505 6.83505Z\" fill=\"#FFDA44\"/>\n<path d=\"M4.69568 12L5.89141 11.6115V10.3542L6.63035 11.3714L7.82613 10.9829L7.08705 12L7.82613 13.0172L6.63035 12.6287L5.89141 13.6458V12.3886L4.69568 12Z\" fill=\"#FFDA44\"/>\n<path d=\"M6.83505 17.165L7.40584 16.0447L6.51691 15.1557L7.75867 15.3525L8.32938 14.2322L8.52611 15.474L9.76783 15.6707L8.6477 16.2415L8.84434 17.4832L7.95536 16.5942L6.83505 17.165Z\" fill=\"#FFDA44\"/>\n<path d=\"M12 19.3044L11.6114 18.1086H10.3542L11.3714 17.3696L10.9828 16.174L12 16.9129L13.0172 16.174L12.6286 17.3696L13.6458 18.1086H12.3885L12 19.3044Z\" fill=\"#FFDA44\"/>\n<path d=\"M17.165 17.165L16.0448 16.5942L15.1557 17.4832L15.3525 16.2414L14.2323 15.6707L15.474 15.474L15.6707 14.2322L16.2415 15.3525L17.4832 15.1557L16.5942 16.0448L17.165 17.165Z\" fill=\"#FFDA44\"/>\n<path d=\"M19.3043 12L18.1086 12.3886V13.6458L17.3696 12.6286L16.174 13.0172L16.9129 12L16.174 10.9829L17.3696 11.3714L18.1086 10.3542V11.6115L19.3043 12Z\" fill=\"#FFDA44\"/>\n<path d=\"M17.165 6.83505L16.5942 7.95536L17.4832 8.84435L16.2414 8.64757L15.6707 9.76783L15.474 8.52607L14.2323 8.32933L15.3525 7.75858L15.1557 6.51691L16.0448 7.40585L17.165 6.83505Z\" fill=\"#FFDA44\"/>\n</symbol>\n<symbol id=\"icon-United-Kingdom\" viewBox=\"0 0 24 24\">\n<title>United-Kingdom</title>\n<path d=\"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z\" fill=\"#F0F0F0\"/>\n<path d=\"M2.48063 4.6941C1.53802 5.92049 0.827251 7.334 0.413391 8.86958H6.65611L2.48063 4.6941Z\" fill=\"#0052B4\"/>\n<path d=\"M23.5866 8.86959C23.1728 7.33405 22.4619 5.92054 21.5194 4.69415L17.344 8.86959H23.5866Z\" fill=\"#0052B4\"/>\n<path d=\"M0.413391 15.1304C0.827297 16.666 1.53806 18.0795 2.48063 19.3058L6.65597 15.1304H0.413391Z\" fill=\"#0052B4\"/>\n<path d=\"M19.3058 2.48061C18.0795 1.538 16.666 0.827236 15.1304 0.41333V6.656L19.3058 2.48061Z\" fill=\"#0052B4\"/>\n<path d=\"M4.69416 21.5193C5.92055 22.4619 7.33406 23.1726 8.86959 23.5865V17.3439L4.69416 21.5193Z\" fill=\"#0052B4\"/>\n<path d=\"M8.86955 0.41333C7.33402 0.827236 5.9205 1.538 4.69416 2.48056L8.86955 6.65595V0.41333Z\" fill=\"#0052B4\"/>\n<path d=\"M15.1305 23.5865C16.666 23.1726 18.0795 22.4619 19.3058 21.5193L15.1305 17.3439V23.5865Z\" fill=\"#0052B4\"/>\n<path d=\"M17.344 15.1304L21.5194 19.3059C22.4619 18.0795 23.1728 16.666 23.5866 15.1304H17.344Z\" fill=\"#0052B4\"/>\n<path d=\"M23.8984 10.4348H13.5653L13.5653 0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347L0.101578 10.4347C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347L10.4347 23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653L23.8984 13.5653C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z\" fill=\"#D80027\"/>\n<path d=\"M15.1305 15.1305L20.4853 20.4853C20.7315 20.2391 20.9665 19.9817 21.1906 19.7149L16.6062 15.1305L15.1305 15.1305Z\" fill=\"#D80027\"/>\n<path d=\"M8.86954 15.1305L3.51469 20.4853C3.76087 20.7315 4.01826 20.9665 4.28508 21.1906L8.86954 16.6061V15.1305Z\" fill=\"#D80027\"/>\n<path d=\"M8.86955 8.86964L3.51473 3.51469C3.26845 3.76087 3.03351 4.01826 2.80936 4.28508L7.39387 8.86959L8.86955 8.86964Z\" fill=\"#D80027\"/>\n<path d=\"M15.1305 8.86964L20.4853 3.51473C20.2391 3.26845 19.9817 3.03351 19.7149 2.8094L15.1305 7.39392V8.86964Z\" fill=\"#D80027\"/>\n</symbol>\n<symbol id=\"icon-Germany\" viewBox=\"0 0 24 24\">\n<title>Germany</title>\n<path d=\"M0.746384 16.1739C2.4419 20.7435 6.84041 24 12 24C17.1596 24 21.5581 20.7435 23.2536 16.1739L12 15.1305L0.746384 16.1739Z\" fill=\"#FFDA44\"/>\n<path d=\"M12 0C6.84041 0 2.4419 3.2565 0.746384 7.82611L12 8.86955L23.2536 7.82606C21.5581 3.2565 17.1596 0 12 0Z\" fill=\"black\"/>\n<path d=\"M0.746391 7.82617C0.264047 9.12616 0 10.5322 0 12.0001C0 13.4679 0.264047 14.874 0.746391 16.174H23.2537C23.736 14.874 24 13.4679 24 12.0001C24 10.5322 23.736 9.12616 23.2536 7.82617H0.746391Z\" fill=\"#D80027\"/>\n</symbol>\n<symbol id=\"icon-France\" viewBox=\"0 0 24 24\">\n<title>France</title>\n<path d=\"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z\" fill=\"#F0F0F0\"/>\n<path d=\"M24 11.9999C24 6.84037 20.7435 2.44185 16.1739 0.746338V23.2536C20.7435 21.558 24 17.1595 24 11.9999Z\" fill=\"#D80027\"/>\n<path d=\"M0 11.9999C0 17.1595 3.25655 21.558 7.82611 23.2536V0.746338C3.25655 2.44185 0 6.84037 0 11.9999Z\" fill=\"#0052B4\"/>\n</symbol>\n<symbol id=\"icon-Spain\" viewBox=\"0 0 24 24\">\n<title>Spain</title>\n<path d=\"M0 12C0 13.4678 0.264047 14.8739 0.746391 16.1739L12 17.2173L23.2536 16.1739C23.736 14.8739 24 13.4678 24 12C24 10.5321 23.736 9.12606 23.2536 7.82608L12 6.78259L0.746391 7.82608C0.264047 9.12606 0 10.5321 0 12Z\" fill=\"#FFDA44\"/>\n<path d=\"M23.2536 7.82611C21.5581 3.25655 17.1596 0 12 0C6.84043 0 2.44191 3.25655 0.746399 7.82611H23.2536Z\" fill=\"#D80027\"/>\n<path d=\"M0.746399 16.1739C2.44191 20.7435 6.84043 24 12 24C17.1596 24 21.5581 20.7435 23.2536 16.1739H0.746399Z\" fill=\"#D80027\"/>\n</symbol>\n<symbol id=\"icon-Australia\" viewBox=\"0 0 24 24\">\n<title>Australia</title>\n<path d=\"M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0028 12 0.00135937 12 0C18.6274 0 24 5.37262 24 12Z\" fill=\"#0052B4\"/>\n<path d=\"M12 6.26183C12 4.15035 12 2.76674 12 0.000976562H11.998C5.3715 0.00205469 0 5.37416 0 12.0009H6.26086V8.47537L9.78642 12.0009H11.9679C11.9787 11.9902 11.9894 11.9796 12 11.9688C12 11.1604 12 10.439 12 9.78744L8.47444 6.26183H12Z\" fill=\"#F0F0F0\"/>\n<path d=\"M7.23727 14.087L7.89586 15.4641L9.38306 15.1203L8.71706 16.4939L9.91303 17.4423L8.42395 17.7779L8.42813 19.3043L7.23727 18.3494L6.04645 19.3043L6.05063 17.7779L4.5615 17.4423L5.75752 16.4939L5.09142 15.1203L6.57872 15.4641L7.23727 14.087Z\" fill=\"#F0F0F0\"/>\n<path d=\"M17.9664 16.6957L18.2957 17.3842L19.0394 17.2123L18.7063 17.8991L19.3043 18.3733L18.5598 18.5411L18.5618 19.3043L17.9664 18.8268L17.371 19.3043L17.3731 18.5411L16.6286 18.3733L17.2266 17.8991L16.8936 17.2123L17.6371 17.3842L17.9664 16.6957Z\" fill=\"#F0F0F0\"/>\n<path d=\"M14.9031 9.39131L15.2324 10.0799L15.976 9.90797L15.643 10.5947L16.241 11.069L15.4965 11.2368L15.4985 12L14.9031 11.5225L14.3077 12L14.3097 11.2368L13.5652 11.069L14.1632 10.5947L13.8302 9.90797L14.5738 10.0799L14.9031 9.39131Z\" fill=\"#F0F0F0\"/>\n<path d=\"M17.9664 5.21737L18.2957 5.90597L19.0394 5.73408L18.7064 6.42084L19.3043 6.89503L18.5598 7.06289L18.5618 7.82611L17.9664 7.34859L17.371 7.82611L17.3731 7.06289L16.6286 6.89503L17.2265 6.42084L16.8936 5.73408L17.6371 5.90597L17.9664 5.21737Z\" fill=\"#F0F0F0\"/>\n<path d=\"M20.6422 8.34783L20.9715 9.03642L21.7151 8.86449L21.3821 9.55125L21.9801 10.0255L21.2355 10.1933L21.2376 10.9565L20.6422 10.479L20.0468 10.9565L20.0489 10.1933L19.3043 10.0255L19.9023 9.55125L19.5693 8.86449L20.3129 9.03642L20.6422 8.34783Z\" fill=\"#F0F0F0\"/>\n<path d=\"M18.7289 12L18.9879 12.7972H19.8261L19.148 13.2899L19.407 14.087L18.7289 13.5943L18.0508 14.087L18.3098 13.2899L17.6317 12.7972H18.4699L18.7289 12Z\" fill=\"#F0F0F0\"/>\n<path d=\"M6.07103 1.56519C4.1942 2.63389 2.63392 4.19417 1.56522 6.071V12H4.69567V4.69569L12 4.69564C12 3.70831 12 2.76772 12 1.56519H6.07103Z\" fill=\"#D80027\"/>\n<path d=\"M12 10.5243L7.73659 6.26093H6.26092L12 12C12 12 12 10.9826 12 10.5243Z\" fill=\"#D80027\"/>\n</symbol>\n<symbol id=\"icon-New-Zealand\" viewBox=\"0 0 24 24\">\n<title>New-Zealand</title>\n<path d=\"M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z\" fill=\"#0052B4\"/>\n<path d=\"M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.3715 0.001125 0 5.37323 0 12H6.26086V8.47448L9.78642 12H11.9679C11.9786 11.9893 11.9894 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47444 6.26086H12Z\" fill=\"#F0F0F0\"/>\n<path d=\"M1.56522 6.071C2.63392 4.19417 4.1942 2.63389 6.07103 1.56519H12V4.69564H4.69567V12H1.56522V6.071Z\" fill=\"#D80027\"/>\n<path d=\"M7.73657 6.26086L12 10.5243V12L6.26089 6.26096L7.73657 6.26086Z\" fill=\"#D80027\"/>\n<path d=\"M20.7811 8.9043L21.0401 9.70145H21.8782L21.2001 10.1941L21.4592 10.9912L20.7811 10.4986L20.1029 10.9912L20.362 10.1941L19.6838 9.70145H20.522L20.7811 8.9043Z\" fill=\"#D80027\"/>\n<path d=\"M18.1734 15.8392L17.7849 14.6434L17.3963 15.8392H16.1391L17.1563 16.5782L16.7677 17.7739L17.7849 17.0349L18.8021 17.7739L18.4135 16.5782L19.4307 15.8392H18.1734Z\" fill=\"#D80027\"/>\n<path d=\"M17.898 5.2522L18.2218 6.24871H19.2696L18.4219 6.86442L18.7457 7.86088L17.898 7.24499L17.0504 7.86088L17.3742 6.86442L16.5266 6.24871H17.5743L17.898 5.2522Z\" fill=\"#D80027\"/>\n<path d=\"M15.4036 10.0653L15.0151 8.86951L14.6266 10.0653H13.3693L14.3865 10.8042L13.9979 12L15.0151 11.261L16.0323 12L15.6437 10.8042L16.6609 10.0653H15.4036Z\" fill=\"#D80027\"/>\n</symbol>\n</defs>\n</svg>";

var css_248z$1 = "/*\n * Colors are manually kept in sync with Figma\n * See System Colors in  -> https://www.figma.com/file/DdeJrMgKoQqgisZLrcL25N27/Foundation?node-id=576%3A570\n*/\n/*\n * This makes an element as invisible as possible without pxoving it from\n * the accessibility tree.\n */\n.icon-module_tippy-box__eyrDd[data-theme~=ride-report-dark] {\n  border-radius: 3px;\n  background-color: #222a35;\n  color: #ffffff;\n  padding: 8px;\n}\n\n.icon-module_icon__8TVNS {\n  height: 16rem;\n  width: 16rem;\n  fill: currentColor;\n}\n.icon-module_icon__8TVNS.icon-module_half__h6uhg {\n  width: 8rem;\n}";
var styles$1 = {"tippy-box":"icon-module_tippy-box__eyrDd","icon":"icon-module_icon__8TVNS","half":"icon-module_half__h6uhg"};
styleInject(css_248z$1);

const HALF_ICONS = [
    "Battery-0-33",
    "Battery-33-66",
    "Battery-66-100",
    "Battery-Disabled",
];
/**
 * An Icon component that renders an svg of the chosen icon. Its size is
 * determined by the parent's font size, and the color by the font color.
 */
function Icon({ icon, style, className = "" }) {
    return (React.createElement("svg", { className: cx(styles$1.icon, className, {
            half: HALF_ICONS.includes(icon),
        }), style: style },
        React.createElement("use", { xlinkHref: `${icons}#icon-${icon}` })));
}

/** A common button */
const Button = React.forwardRef(({ children, onClick, color = "blue", 
// className,
disabled = false, loading = false, center = false, iconPosition = "left", icon, style, type = "button", }, ref) => {
    return (React.createElement("button", { type: type, ref: ref, onClick: onClick, disabled: disabled || loading, className: cx(styles$2.button, styles$2[color], iconPosition && styles$2[iconPosition], center && styles$2.center), style: style },
        icon ? React.createElement(Icon, { icon: icon }) : null,
        children ? React.createElement("span", null, children) : null));
});

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

v35('v5', 0x50, sha1);

var css_248z = "/*\n * Colors are manually kept in sync with Figma\n * See System Colors in  -> https://www.figma.com/file/DdeJrMgKoQqgisZLrcL25N27/Foundation?node-id=576%3A570\n*/\n/*\n * This makes an element as invisible as possible without pxoving it from\n * the accessibility tree.\n */\n.Toggle-module_tippy-box__A8Alf[data-theme~=ride-report-dark] {\n  border-radius: 3px;\n  background-color: #222a35;\n  color: #ffffff;\n  padding: 8px;\n}\n\n/*\n----------- TOGGLES -----------\n\nA toggle is an input of type \"check\" or \"radio\" that has had the native box\nhidden and replaced with a custom-styled one of our own.\n\nFor accessibility reasons, we need to insure that there is a real (hidden) input\nthat is driving all of the states, which is why there's all this effort to make\nall the selectors start from the input element.\n*/\n/*\nToggles can be re-themed to match certain colors (such as operator colors), and\nuse the following three css variables to determine color.\n\nCSS variables are scoped by parents and determined at runtime. Here we place\nthe default colors in html so all children have access to them.\n*/\nhtml {\n  --ride-report-inactive-toggle-color: #667380;\n  --ride-report-active-toggle-color: #3b55e6;\n  --ride-report-hover-toggle-color: #7688ee;\n}\n\n/*\nFetching a nonexistent CSS variable won't throw any errors, which can make\ndebugging confusing. You can use these sass variables instead, which will\ncomplain at compile-time if you make a typo.\n*/\n/*\nThere's one part of the toggle that works nearly consistently between all of,\nthem but that part might be the whole label itself, a div inside it, or\nan :after element.\n\nGiving a selector that describes how to find it starting from the input\n(like ' + label' or ' + label > svg'), this will set that input up with all the\ndefault styles, including for :focus, :hover, :checked, :disabled states.\n*/\n.Toggle-module_toggle__yX2ZD {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.Toggle-module_toggle__yX2ZD + label {\n  font-family: Work Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 1.5em;\n  font-weight: 500;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: #222a35;\n  user-select: none;\n  position: relative;\n}\n.Toggle-module_toggle__yX2ZD + label:before {\n  transition: 150ms all;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4rem;\n  background-color: #ffffff;\n  border: 1rem solid var(--ride-report-inactive-toggle-color);\n  font-size: 20rem;\n  margin-right: 8rem;\n}\n.Toggle-module_toggle__yX2ZD:not(:disabled):hover + label:before, .Toggle-module_toggle__yX2ZD:not(:disabled):focus + label:before {\n  box-shadow: 0rem 0rem 4rem var(--ride-report-hover-toggle-color);\n}\n.Toggle-module_toggle__yX2ZD:not(:disabled):hover:not(:checked) + label:before, .Toggle-module_toggle__yX2ZD:not(:disabled):focus:not(:checked) + label:before {\n  border-color: var(--ride-report-hover-toggle-color);\n}\n.Toggle-module_toggle__yX2ZD:checked + label:before {\n  border-color: transparent;\n  background-color: var(--ride-report-active-toggle-color);\n}\n.Toggle-module_toggle__yX2ZD:disabled + label:before {\n  border-color: transparent;\n  background-color: #dfe3e7;\n}\n.Toggle-module_toggle__yX2ZD + label:before {\n  content: \"\";\n  width: 40rem;\n  height: 24rem;\n  border-radius: 64rem;\n  margin-right: 0;\n}\n.Toggle-module_toggle__yX2ZD.Toggle-module_label__sWGr1 + label:before {\n  margin-right: 8rem;\n  color: blue;\n}\n.Toggle-module_toggle__yX2ZD.Toggle-module_label__sWGr1:not(:checked) + label {\n  color: #667380;\n}\n.Toggle-module_toggle__yX2ZD + label:after {\n  content: \"\";\n  height: 16rem;\n  width: 16rem;\n  position: absolute;\n  border-radius: 32rem;\n  left: 4rem;\n  top: calc(50% - 8rem);\n  background-color: var(--ride-report-inactive-toggle-color);\n  transition: 150ms all;\n}\n.Toggle-module_toggle__yX2ZD:checked + label:after {\n  left: 18rem;\n  background-color: #ffffff;\n}\n.Toggle-module_toggle__yX2ZD:not(:disabled):not(:checked):hover + label:after, .Toggle-module_toggle__yX2ZD:not(:disabled):not(:checked):focus + label:after {\n  background-color: var(--ride-report-hover-toggle-color);\n}\n.Toggle-module_toggle__yX2ZD:disabled + label:after {\n  background-color: #ffffff;\n}\n\n.Toggle-module_checkbox__2vcJq {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.Toggle-module_checkbox__2vcJq + label {\n  font-family: Work Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 1.5em;\n  font-weight: 500;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: #222a35;\n  user-select: none;\n  position: relative;\n}\n.Toggle-module_checkbox__2vcJq + label > :first-child {\n  transition: 150ms all;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4rem;\n  background-color: #ffffff;\n  border: 1rem solid var(--ride-report-inactive-toggle-color);\n  font-size: 20rem;\n  margin-right: 8rem;\n}\n.Toggle-module_checkbox__2vcJq:not(:disabled):hover + label > :first-child, .Toggle-module_checkbox__2vcJq:not(:disabled):focus + label > :first-child {\n  box-shadow: 0rem 0rem 4rem var(--ride-report-hover-toggle-color);\n}\n.Toggle-module_checkbox__2vcJq:not(:disabled):hover:not(:checked) + label > :first-child, .Toggle-module_checkbox__2vcJq:not(:disabled):focus:not(:checked) + label > :first-child {\n  border-color: var(--ride-report-hover-toggle-color);\n}\n.Toggle-module_checkbox__2vcJq:checked + label > :first-child {\n  border-color: transparent;\n  background-color: var(--ride-report-active-toggle-color);\n}\n.Toggle-module_checkbox__2vcJq:disabled + label > :first-child {\n  border-color: transparent;\n  background-color: #dfe3e7;\n}\n.Toggle-module_checkbox__2vcJq + label > :first-child {\n  width: 20rem;\n  height: 20rem;\n}\n.Toggle-module_checkbox__2vcJq + label > :first-child svg {\n  color: white;\n}\n.Toggle-module_checkbox__2vcJq:not(:checked):disabled + label > :first-child svg {\n  color: transparent;\n}\n\n.Toggle-module_checkbox-wrapper__N1IJT {\n  position: relative;\n}";
var styles = {"tippy-box":"Toggle-module_tippy-box__A8Alf","toggle":"Toggle-module_toggle__yX2ZD","label":"Toggle-module_label__sWGr1","checkbox":"Toggle-module_checkbox__2vcJq","checkbox-wrapper":"Toggle-module_checkbox-wrapper__N1IJT"};
styleInject(css_248z);

/**
 * A pretty toggle switch
 */
function Toggle({ checked, disabled, onChange, 
// tooltipLabel,
// tooltipPlacement = 'right',
color, label = "", }) {
    // Generate a unique id for matching the input and label
    // NOTE -> REMOVING USE OF USEMEMO FOR ERRORS
    //   const id = useMemo(uuid4, []);
    const id = v4();
    // const [tippy] = useTippy<HTMLDivElement>(tooltipLabel ?? null, {
    //     placement: tooltipPlacement
    // });
    return (React.createElement("div", { 
        //   ref={tippy}
        style: {
            "--ride-report-active-toggle-color": color,
            "--ride-report-hover-toggle-color": color,
        } // css variables aren't included in CSSProperties by default
     },
        React.createElement("input", { className: cx(styles.toggle, label && styles.label), type: "checkbox", id: id, checked: checked, onChange: (e) => onChange(e.target.checked), disabled: disabled }),
        React.createElement("label", { htmlFor: id }, label)));
}

/** A common checkbox */
function Checkbox({ checked, disabled, onChange, label, ariaLabel, color, }) {
    // Generate a unique id for matching the input and label
    const id = v4();
    return (React.createElement("div", { className: styles["checkbox-wrapper"], style: color
            ? {
                "--ride-report-inactive-toggle-color": color,
                "--ride-report-active-toggle-color": color,
                "--ride-report-hover-toggle-color": color,
            } // css variables aren't included in CSSProperties by default
            : undefined },
        React.createElement("input", { className: styles.checkbox, type: "checkbox", id: id, checked: checked, onChange: (e) => onChange(e.target.checked), disabled: disabled }),
        React.createElement("label", { "aria-label": ariaLabel, htmlFor: id },
            React.createElement("div", null,
                React.createElement(Icon, { icon: "Check" })),
            label)));
}

export { Button, Checkbox, Icon, Toggle };
//# sourceMappingURL=index.js.map
