import express from "express";
import router from "./routers/index.router.js";
import errorHandler from "./helpers/error.handler.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
