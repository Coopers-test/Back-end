import { Express } from "express";
import { sessionsRoutes } from "./session.routes";
import { taskRoutes } from "./task.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("", sessionsRoutes());
  app.use("/users", userRoutes());
  app.use("/tasks", taskRoutes());
};
