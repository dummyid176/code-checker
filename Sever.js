console.log("Hello World");

const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

console.log("datas are it is running");
console.log("yoo");