import express from "express";
import path from "node:path";
import cors from "cors";
import helmet from "helmet";
import createDoc from "./helpers/swagger.doc.js";
import corsOptions from "./helpers/cors.options.js";
import Limiter from "./helpers/rateLimiter.config.js";
import router from "./routers/index.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

//* A decommenter si on veux logger toutes les connexions sur notre serveur
// import logger from "./logger/index.logger.js";
// app.use((req, _, next) => {
//   logger.http(`${req.ip} ${req.url}`, { httpStatus: 200 });
//   next();
// });

app.set("view engine", "ejs");
app.set("views", path.resolve("app/views"));

app.use("/static", express.static(path.resolve("public")));

createDoc(app);

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(Limiter.base);
app.use(router);
app.use(errorMiddleware);

export default app;
