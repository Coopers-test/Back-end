import { Request, Response } from "express";
import tasksGetService from "../../services/tasks/taskGet.service";

const tasksGetController = async (req: Request, res: Response) => {
  const tasks = await tasksGetService();

  return res.status(200).json(tasks);
};

export default tasksGetController;
