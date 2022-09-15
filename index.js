// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

const PORT = process.env.PORT || 3000;
