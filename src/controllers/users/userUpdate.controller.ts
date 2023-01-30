import { Request, Response } from "express";
import { IUserUpdate } from "../../services/users/userUpdate.service";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const { id } = req.params;
  const updatedUser = await userUpdateService(user, id);

  return res.status(200).json(updatedUser);
};

export default userUpdateController;
