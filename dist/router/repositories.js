"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repositories_1 = require("../controllers/repositories");
const route = (0, express_1.Router)();
route.get("/popular", repositories_1.mostPopularRepositories);
exports.default = route;
