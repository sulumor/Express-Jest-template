import expressJSDocSwagger from "express-jsdoc-swagger";
import * as url from "node:url";

const dirname = url.fileURLToPath(new URL("..", import.meta.url));

const options = {
  info: {
    version: "1.0.0",
    title: "New API",
    description: "",
  },

  // Base directory which we use to locate your JSDOC files
  baseDir: dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: "./**/*.js",
  // URL where SwaggerUI will be rendered
  swaggerUIPath: "/api-docs",
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: "/api-docs/json",
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
};

export default (app) => expressJSDocSwagger(app)(options);
