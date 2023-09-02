import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";

export class UpdateUserController {
  async update(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const { id } = req.params;

    const updateUserUseCase = new UpdateUserUseCase();

    const result = await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
    });

    res.status(200).json({ message: `User ${name} opdated successfully` });
  }
}
