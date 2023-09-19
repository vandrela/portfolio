"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const TheModel = require('./db');
const app = (0, express_1.default)();
const port = 3001;
// allow CORS for all routes
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.get("/", (req, res) => {
    res.json({ foo: "bar" });
});
app.listen(port, () => {
    console.log("Server is running on port 3001");
});
