import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { AuthUserUseCase } from "./authUserUseCase";

export class AuthUserController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserUseCase = new AuthUserUseCase();

    const result = await authUserUseCase.execute({ email, password });

    return res.json({ result });
  }
}
