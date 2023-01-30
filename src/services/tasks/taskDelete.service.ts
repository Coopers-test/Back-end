import AppDataSource from "../../data-source";
import { Task } from "../../entities/task.entity";

const taskDeleteService = async (id: string) => {
  const taskRepository = AppDataSource.getRepository(Task);

  await taskRepository.delete({ id });

  return true;
};

export default taskDeleteService;
