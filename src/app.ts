import express from "express";
import repoRoute from "./router/repositories";

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/repositories", repoRoute);

app.get("*", (_, res) => {
  res.status(404).json({
    error: "Not Found",
    status: 404,
    message:
      "/repositories/popular route is avaliable for most popular repositories api",
  });
});

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}/`)
);
