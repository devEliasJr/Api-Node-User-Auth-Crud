import { Request, Response } from "express";
import { GetAllUserUseCase } from "./getAllUserUseCase";

export class GetAllUserController {
  async index(req: Request, res: Response) {
    const getAllUserUseCase = new GetAllUserUseCase();

    const result = await getAllUserUseCase.execute();

    const defaultResult = result.map(({ password, ...rest }) => rest);

    res.status(200).json(defaultResult);
  }
}
