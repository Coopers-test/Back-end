import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import usersGetController from "../controllers/users/userGet.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("", userCreateController);
  routes.get("", usersGetController);
  routes.patch("/:id", userUpdateController);
  routes.delete("/:id", userDeleteController);

  return routes;
};
