import express from "express";
import router from "./routers/index.router.js";
import errorHandler from "./helpers/error.handler.js";
import createDoc from "./helpers/swagger.doc.js";

const app = express();

//* A decommenter si on veux logger toutes les connexions sur notre serveur
// import logger from "./logger/index.logger.js";
// app.use((req, _, next) => {
//   logger.http(`${req.ip} ${req.url}`, { httpStatus: 200 });
//   next();
// });
createDoc(app);

app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
