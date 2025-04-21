const Modbus = require("jsmodbus");
const Net = require("net");

const netServer = new Net.Server()
const server = new Modbus.server.TCP(netServer)

netServer.listen(502)

server.on("connect", (client) => {
    console.log("Client connected")
});

server.on("disconnect", (client) => {
    console.log("Client disconnected")
});

server.on("data", (client, data) => {
    console.log(data)
});

server.on("error", (client, error) => {
    console.log(error)
});

server.on("timeout", (client) => {
    console.log("Client timeout")
});
