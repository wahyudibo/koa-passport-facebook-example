const app = require('koa')();
const router = require('koa-router')();
const session = require('koa-session');

require('dotenv').load();

const config = require('./config')
const api = require('./api')(router);
const passport = require('./passport');

app.keys = config.session.keys;

app.use(session(app));
app.use(passport.initialize());
app.use(passport.session());

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port : ${server.address().port}`);
});
