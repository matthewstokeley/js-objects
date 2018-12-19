(function(__) {

	/**
	 * validate options for undefined properties
	 * and dom elements that are not found
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */

	var doesObjectOwnProperties = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				if (options[property] === undefined) {
					return false;
				}
			}
		}
		return true;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateAllProperties = validateAllProperties;

})(__);