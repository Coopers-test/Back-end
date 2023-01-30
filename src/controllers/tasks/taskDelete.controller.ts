import { Request, Response } from "express";
import taskDeleteService from "../../services/tasks/taskDelete.service";

const taskDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await taskDeleteService(id);
  return res.status(204).send();
};

export default taskDeleteController;
