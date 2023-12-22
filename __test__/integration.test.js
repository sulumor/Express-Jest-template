import request from "supertest";
import app from "../app/index.app.js";

test("route GET /", async () => {
  await request(app)
    .get("/")
    .expect(200);
});
