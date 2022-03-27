import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const foundUser = this.usersRepository.findByEmail(email)

    if (foundUser) {
      throw new Error("Email is already registred")
    }

    const newUser = this.usersRepository.create({ name, email })
    return newUser

  }
}

export { CreateUserUseCase };
