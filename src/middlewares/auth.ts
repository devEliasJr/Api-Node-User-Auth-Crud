import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "../modules/users/DTO/authUserDTO";

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ erro: "Operation is not authorized" });
  }

  const [, token] = authorization?.split(" ");

  try {
    const decode = jwt.verify(token, process.env.SECRET);
    const { id } = decode as TokenPayload;

    req.UserId = id;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
}
