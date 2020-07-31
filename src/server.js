const jsonServer = require('json-serve');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(por, () => {
  console.log(`JSON server is running in ${port}`)
});