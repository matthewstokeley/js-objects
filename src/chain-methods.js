(function(__) {

	/**
	 * 
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	var chainMethods = function chainMethods(options) {
		/**
		 * [if description]
		 * @param  {[type]} !Array.isArray(options.functions) [description]
		 * @return {[type]}                                   [description]
		 */
		if (!Array.isArray(options.functions)) {
			throw new Error('the functions option must be an array');
		}

		/**
		 * [if description]
		 * @todo   refactor args
		 * @param  {[type]} !options.args [description]
		 * @return {[type]}               [description]
		 */
		if (!options.args) {
			throw new Error('options must include an options value');
		}

		/**
		 * [if description]
		 * @param  {[type]} !options.scope [description]
		 * @return {[type]}                [description]
		 */
		if (!options.scope) {
			options.scope = this;
		}
// // 
// 		*
// 		 * execute function
// 		 * @param  {Function} fn  [description]
// 		 * @param  {[type]}   arg [description]
// 		 * @return {[type]}       [description]
		 
// 		function runMethod(fn, arg) {
// 			arg = [arg];
// 			return fn.apply(this, arg);
// 		}

		/**
		 * execute all functions with the result of the previous function
		 * @param  {[type]} arg [description]
		 * @return {[type]}     [description]
		 */
		function loop(arg) {

			for (var i = 0; i < options.functions.length; i++) {
				arg = options.functions[i].apply(options.scope, [arg]);
			}
			return arg;
		}

		return loop.call(options.scope, options.args);

	};

	__.chainMethods = chainMethods;

})(__);