import AppDataSource from "../../data-source";
import { Task } from "../../entities/task.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export interface ITaskUpdate {
  description?: string;
  status?: "todo" | "done";
}

const taskUpdateService = async (
  { description, status }: ITaskUpdate,
  taskId: string,
  userId?: string
) => {
  const taskRepository = AppDataSource.getRepository(Task);

  const tasks = await taskRepository.find();

  const findTask = tasks.find((task) => task.id === taskId);

  if (!findTask) throw new AppError("Task not found");

  await taskRepository.update(taskId, {
    description: description ? description : findTask.description,
    status: status ? status : findTask.status,
  });

  const task = await taskRepository.findOneBy({ id: taskId });

  return task;
};

export default taskUpdateService;
