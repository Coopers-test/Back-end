import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import usersGetService from "../../services/users/userGet.service";

const usersGetController = async (req: Request, res: Response) => {
  const users = await usersGetService();

  return res.status(200).json(instanceToPlain(users));
};

export default usersGetController;
