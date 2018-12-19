(function(__) {

	/**
	 * @param  {[type]} methods [description]
	 * @param  {[type]} object  [description]
	 * @return {[type]}         [description]
	 */
	var assignMethodsToObject = function assignMethodsToObject(methods, object) {

		if (!object) {
			object = {};
		}

		if (typeof object !== 'object') {
			object = {};
		}

		if (!methods || !Array.isArray(methods)) {
			return false;
		}

		function assignMethods(value) {
		
			if (value.name === '') {
				throw new Error('anonymous functions have no names');
				return false;
			}

			object[value.name] = value;

		}

		methods.forEach(assignMethods);

		return object;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.assignMethodsToObject = assignMethodsToObject;

})(__);
