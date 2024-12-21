"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 3000;
app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'welcome to Blog Project Assignment api ...... ..... ....',
    });
});
exports.default = app;
