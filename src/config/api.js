import express from "express";

export function bootstrap() {
  const app = express();

  app.use(express.json());

  // TODO: register routes

  return app;
}
