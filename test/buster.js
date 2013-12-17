var config = exports;

config['Browser tests'] = {
	rootPath: '../',

	environment: 'browser',

	libs: [
		'lib/components/requirejs/require.js',
		'lib/components/lodash/dist/lodash.js',
		'lib/components/primish/*.js',
		'lib/index.js',
		'lib/require.config.js'
	],

	sources: [
		'lib/index.js',
		'lib/model.js',
		'lib/collection.js'
	],

	tests: [
		// find matching test specs as above sources
		'test/specs/*-test.js'
	],

	extensions: [require('buster-amd')]

//	resources: [
//		// used as a static response json stub for model.sync
//		'example/data/1234-5123/*',
//		'example/data/collection/*'
//	]
};

/*
// tests disabled as buster-test with both groups right now does not proc.exit
config['Node tests'] = {
	rootPath: '../',

	environment: 'node',

	libs: [
		// server-only, no request or element.
		'test/lib/mootools-core-1.4.5-server.js'
	],

	sources: [
		// core
		'src/epitome.js',
		// utils
		'src/epitome-isequal.js',
		// model core
		'src/epitome-model.js',
		// controller/collection
		'src/epitome-collection.js',

		// template
		'src/epitome-template.js'
	],

	tests: [
		// find matching test specs as above sources
		'test/tests/epitome-isequal-test.js',

		'test/tests/epitome-model-test.js',

		'test/tests/epitome-collection-test.js'
	]
};
*/