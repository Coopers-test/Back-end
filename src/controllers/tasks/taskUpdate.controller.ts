import { Request, Response } from "express";
import taskUpdateService, {
  ITaskUpdate,
} from "../../services/tasks/taskUpdate.service";

const taskUpdateController = async (req: Request, res: Response) => {
  const newTaskData: ITaskUpdate = req.body;
  const taskId = req.params.id;
  //   const userId = req.user.id;

  const newTask = await taskUpdateService(newTaskData, taskId);
  return res.status(200).json(newTask);
};

export default taskUpdateController;
