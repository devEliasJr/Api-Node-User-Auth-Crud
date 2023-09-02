import { User } from "@prisma/client";
import { prisma } from "../../../../utils/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { updateUserDTO } from "../../DTO/userOperationsDTO";
import { hash } from "bcryptjs";

export class UpdateUserUseCase {
  async execute({ id, name, email, password }: updateUserDTO): Promise<User> {
    const userExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new AppError("Usuário não encontrado");
    }

    if (password) {
      password = await hash(password, 8);
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }
}
