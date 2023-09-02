import { User } from "@prisma/client";
import { prisma } from "../../../../utils/prismaClient";

import { getUserDTO } from "../../DTO/userOperationsDTO";
import { AppError } from "../../../../errors/AppError";

export class GetUserByIdUseCase {
  async execute({ id }: getUserDTO): Promise<User> {
    //Verificar User
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError("User is not exist");
    }

    return userAlreadyExists;
  }
}
