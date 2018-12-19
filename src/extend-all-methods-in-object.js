/**
 * [extend description]
 * @param  {[type]} obj        [description]
 * @param  {[type]} middleware [description]
 * @param  {[type]} context    [description]
 * @return {[type]}            [description]
 */

var extend = function(obj, middleware, context) {

	if (!Array.isArray(middleware)) {
	   return false;
	}

	if (typeof obj !== 'function') {
		return false;
	}

	if (typeof context !== 'object') {
		return false;
	}

	/**
	 * [processMiddleware description]
	 * @param  {[type]} args [description]
	 * @return {[type]}      [description]
	 */
    this.processMiddleware = function(args) {
	
		/**
		 * [description]
		 * @param  {[type]} method) {            runMethod(method, args); }.bind(this) [description]
		 * @return {[type]}         [description]
		 */
		middleware.forEach(function(method) { runMethod(method, args); }.bind(this));
		
		return this;
    
    };

    /**
     * [runMethod description]
     * @param  {[type]} method [description]
     * @param  {[type]} args   [description]
     * @return {[type]}        [description]
     */
    this.runMethod = function(method, args) {
	    
	    if (typeof method !== 'function') {
			return false;
	    }
	    
	    method.apply(context, args);
	    return this;
	    
    };

    /**
     * [childMethod description]
     * @param  {[type]} methods [description]
     * @param  {[type]} prop    [description]
     * @return {[type]}         [description]
     */
    this.childMethod = function(methods, prop) {
    	return function() {
		    methods[prop].apply(context, arguments);
		    processMiddleware.call(context, arguments);
    	};
	};

	var methods = {};

	/**
	 * [for description]
	 * @param  {[type]} var prop          in obj.prototype [description]
	 * @return {[type]}     [description]
	 */
    for (var prop in obj.prototype) {
		if (obj.prototype.hasOwnProperty(prop)) {
		    if (typeof obj.prototype[prop] === 'function') {
				methods[prop] = obj.prototype[prop];
				obj.prototype[prop] = childMethod(methods, prop);
		    }
		}
    }
};

