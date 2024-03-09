import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FreeCare API",
      version: "1.0.0",
      description: "the api for FreeCare Network charity Platform",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Update the path to your route files
};

const specs = swaggerJsdoc(options);

export default specs;
