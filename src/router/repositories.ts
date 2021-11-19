import { Router } from "express";
import { mostPopularRepositories } from "../controllers/repositories";

const route = Router();

route.get("/popular", mostPopularRepositories);

export default route;
