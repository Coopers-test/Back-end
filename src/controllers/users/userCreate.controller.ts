import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  const newUser = await userCreateService({
    email,
    name,
    password,
  });
  return res.status(201).json(instanceToPlain(newUser));
};

export default userCreateController;
