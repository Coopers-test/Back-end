import AppDataSource from "../../data-source";
import { Task } from "../../entities/task.entity";

const tasksGetService = async () => {
  const tasksRepository = AppDataSource.getRepository(Task);

  const tasks = await tasksRepository.find();

  return tasks;
};

export default tasksGetService;
