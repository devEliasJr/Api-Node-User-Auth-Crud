import { compare, hash } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../utils/prismaClient";
import { authUserDTO } from "../../DTO/authUserDTO";

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

export class AuthUserUseCase {
  async execute({ email, password }: authUserDTO) {
    //Usuario existe no DB?
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      throw new AppError("User not exist");
    }

    const isValuePassword = await compare(password, userExists.password);

    if (!isValuePassword) {
      throw new AppError("Invalid credentials");
    }

    const acess_token = jwt.sign({ id: userExists.id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    const { id, name } = userExists;

    return { user: { id, name, email }, acess_token };
  }
}
