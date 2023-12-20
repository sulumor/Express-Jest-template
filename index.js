import { createServer } from "node:http";
import "./app/helpers/env.load.js";
import expressApp from "./app/index.app.js";

const httpServer = createServer(expressApp);
const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Running on : http://localhost:${PORT}`);
});
