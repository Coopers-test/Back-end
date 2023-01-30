import { Router } from "express";
import taskCreateController from "../controllers/tasks/taskCreate.controller";
import taskDeleteController from "../controllers/tasks/taskDelete.controller";
import tasksGetController from "../controllers/tasks/taskGet.controller";
import taskUpdateController from "../controllers/tasks/taskUpdate.controller";

const routes = Router();

export const taskRoutes = () => {
  routes.get("", tasksGetController);
  routes.post("", taskCreateController);
  routes.patch("/:id", taskUpdateController);
  routes.delete("/:id", taskDeleteController);

  return routes;
};
