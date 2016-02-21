(() => {
	"use strict";
	let koa = require('koa');
	let views = require('koa-views');

	let app = koa();

	app.use(views(`${__dirname}/../views`, {
		extension: 'jade',
		map      : {
			jade: 'jade'
		}
	}));
	app.use(function *() {
		yield this.render('index');
	});

	app.listen(8080, () => {
		console.log(`Server is up at http://localhost:8080`);
	});
})();
