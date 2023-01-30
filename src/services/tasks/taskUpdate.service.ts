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
  const userRepository = AppDataSource.getRepository(User);

  //   const tasks = await taskRepository.find({ relations: { user: true } });
  const tasks = await taskRepository.find();

  const findTask = tasks.find((task) => task.id === taskId);

  if (!findTask) throw new AppError("Task not found");

  await taskRepository.update(taskId, {
    description: description ? description : findTask.description,
    status: status ? status : findTask.status,
  });

  //   const owner = await userRepository.findOneBy({ id: taskFound.user.id });

  //   if (!owner) throw new AppError("Owner not found");

  //   if (owner.id === userId) {
  //     await taskRepository.update(taskId, {
  //       name: newTaskData.name,
  //       vaccinated: newTaskData.vaccinated,
  //       neutered: newTaskData.neutered,
  //       docile: newTaskData.docile,
  //     });
  //   } else {
  //     throw new AppError("You don't have permission", 403);
  //   }

  const task = await taskRepository.findOneBy({ id: taskId });

  return task;
};

export default taskUpdateService;
