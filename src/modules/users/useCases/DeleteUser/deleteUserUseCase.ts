import { User } from "@prisma/client";
import { prisma } from "../../../../utils/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { deleteUserDTO } from "../../DTO/userOperationsDTO";


export class DeleteUserUseCase {
  async execute({ id }: deleteUserDTO): Promise<User> {
    const userExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist");
    }

    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
