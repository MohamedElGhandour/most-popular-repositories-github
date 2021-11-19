"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPopularRepositories = void 0;
const request_1 = __importDefault(require("request"));
const qualifierParser_1 = __importDefault(require("../utils/qualifierParser"));
const mostPopularRepositories = (req, res) => {
    const parsedURL = (0, qualifierParser_1.default)(req.query);
    const option = {
        url: parsedURL,
        headers: { "User-Agent": "application / vnd.github.v3 + json" },
        json: true,
    };
    const callback = (error, response, body) => {
        if (!error && !body.error && response.statusCode == 200) {
            res.status(200).json({ body });
        }
        else {
            res.status(response.statusCode).json({ error, body });
        }
    };
    (0, request_1.default)(option, callback);
};
exports.mostPopularRepositories = mostPopularRepositories;
