(() => {
	"use strict";
	let views = require('koa-views');
	let serve = require('koa-static');
	let app = require('koa')();

	// Serve all build artifacts as static resources
	app.use(serve(`./build`));
	// Allows "yield this.render('myJadeFile')" throughout routes
	app.use(views(`./views`, {
		extension: 'jade',
		map      : {
			jade: 'jade'
		}
	}));
	// Catch-all requests and redirect to index.jade for now
	app.use(function *() {
		yield this.render('index');
	});
	// Start up server on 8080
	app.listen(8080, () => {
		console.log(`Server is totally up at http://localhost:8080`);
	});
})();
