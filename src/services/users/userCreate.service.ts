import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

export interface IUserRequest {
  email: string;
  name: string;
  password: string;
}

const userCreateService = async ({
  email,
  name,
  password,
}: IUserRequest): Promise<IUserRequest> => {
  const userRepository = AppDataSource.getRepository(User);
  const userAlreadyExists = await userRepository.findOneBy({
    email,
  });
  if (userAlreadyExists) {
    throw new AppError("Email already exists");
  }
  const user = new User();

  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);

  userRepository.create(user);
  const newUser = await userRepository.save(user);

  return newUser;
};

export default userCreateService;
