import AppDataSource from "../../data-source";
import { Task } from "../../entities/task.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export interface ITaskRequest {
  description: string;
  status: "todo" | "done";
}

const taskCreateService = async (
  newTaskData: ITaskRequest,
  userId?: string
) => {
  const taskRepository = AppDataSource.getRepository(Task);

  const newTask = taskRepository.create(newTaskData);

  await taskRepository.save(newTask);
  return newTask;
};

export default taskCreateService;
