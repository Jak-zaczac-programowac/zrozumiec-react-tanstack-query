const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.use((req, res, next) => {
    req.db = router.db;
    next();
});

server.get("/people", (req, res) => {
    const people = req.db.get("people").value();
    const filteredPeople = people.map(({ id, name }) => ({ id, name }));
    res.jsonp(filteredPeople);
});

server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
