import { Request, Response } from "express";
import taskCreateService, {
  ITaskRequest,
} from "../../services/tasks/taskCreate.service";

const taskCreateController = async (req: Request, res: Response) => {
  const newTaskData: ITaskRequest = req.body;
  //   const userId = req.user.id;
  const newTask = await taskCreateService(newTaskData);
  return res.status(201).json(newTask);
};

export default taskCreateController;
