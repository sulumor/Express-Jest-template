import express from "express";
import router from "./routers/index.router.js";

const app = express();

app.use(router);

export default app;
