import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { AuthUserUseCase } from "./authUserUseCase";

export class AuthUserController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserUseCase = new AuthUserUseCase();

    const result = await authUserUseCase.execute({ email, password });
    const { user, acess_token } = result;

    return res.json({ user, acess_token });
  }
}
