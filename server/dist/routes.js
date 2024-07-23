"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./controllers/userController"));
const unitController_1 = __importDefault(require("./controllers/unitController"));
const api = (0, express_1.Router)();
api.get('/hello', (req, res) => {
    res.send('Hello World');
});
// creating
api.post('/create-user', userController_1.default.createUser);
api.post('/create-unit', unitController_1.default.createUnit);
exports.default = api;
