import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    let users: User[];

    try {
      users = this.listAllUsersUseCase.execute({ user_id: user_id.toString() })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }

    return response.json(users)
  }
}

export { ListAllUsersController };
