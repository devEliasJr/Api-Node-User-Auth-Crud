import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export class DeleteUserController {
  async remove(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserUseCase = new DeleteUserUseCase();

    const result = await deleteUserUseCase.execute({ id });

    const { name } = result;

    res.status(200).json({ message: `User ${name} removed successfully` });
  }
}
