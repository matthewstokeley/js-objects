(function(__) {

	/**
	 * 
	 */
	var arraysToObject = function arraysToObject(array, properties) {

		if (!array ||
			!Array.isArray(array)) {
			throw new Error('map values requires an array');
		}

		if (!properties ||
			!Array.isArray(properties)) {
			throw new Error('properties must be an array');
		}

		if (properties.length !== array.length) {
			throw new Error('properties and array don\'t match');
		}

		var obj = {};

		for (var i = 0; i < array.length; i++) {
			obj[properties[i]] = array[i];
		}

		return obj;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.arraysToObject = arraysToObject;

})(__);