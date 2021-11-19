"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repositories_1 = __importDefault(require("./router/repositories"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/repositories", repositories_1.default);
app.get("*", (_, res) => {
    res.status(404).json({
        error: "Not Found",
        status: 404,
        message: "/repositories/popular route is avaliable for most popular repositories api",
    });
});
app.listen(port, () => console.log(`server listening at http://localhost:${port}/`));
