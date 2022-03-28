import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const foundUser = this.usersRepository.findById(user_id)

    if (!foundUser || !foundUser.admin) {
      throw new Error("You need to be a administrador to list all users.")
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
