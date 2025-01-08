"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const allowedOrigins = ['https://killians.club', 'http://localhost', 'http://localhost:5173'];
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies if needed
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (req, res) => {
    res.send('Express with TypeScript is working!!!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
