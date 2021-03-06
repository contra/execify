/*jshint node:true */

"use strict";

module.exports = function (task, args) {
	if (typeof task !== 'function') {
		throw new Error('first arg is not a function');
	}
	if (args && !Array.isArray(args)) {
		throw new Error('second arg is not an array');
	}
	// we're still here, we're good
};
