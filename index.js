// server.js
const express = require("express");
const app = express();
const jsonServer = require("json-server");
const routes = jsonServer.router("outb.json");
const middlewares = jsonServer.defaults();

app.use(routes);
app.use(middlewares);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
