import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./getUserUseCase";




export class GetUserByIdController {
  async index(req: Request, res: Response) {
    const { id } = req.params;

    const getUserUseCase = new GetUserByIdUseCase();

    const result = await getUserUseCase.execute({ id });

    const { password, ...rest } = result;

    res.status(200).json(rest);
  }
}
