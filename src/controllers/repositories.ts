import { RequestHandler } from "express";
import request, { RequestCallback } from "request";
import qualifierParser from "../utils/qualifierParser";

export const mostPopularRepositories: RequestHandler = (req, res) => {
  const parsedURL = qualifierParser(req.query);
  const option = {
    url: parsedURL,
    headers: { "User-Agent": "application / vnd.github.v3 + json" },
    json: true,
  };

  const callback: RequestCallback = (error, response, body) => {
    if (!error && !body.error && response.statusCode == 200) {
      res.status(200).json({ body });
    } else {
      res.status(response.statusCode).json({ error, body });
    }
  };

  request(option, callback);
};
