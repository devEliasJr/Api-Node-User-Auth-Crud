import { hash } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../utils/prismaClient";
import { createUserDTO } from "../../DTO/userOperationsDTO";


export class CreateUserUseCase {
  async execute({ name, email, password }: createUserDTO) {
    //Verificar User
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const hash_password = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password,
      },
    });
    return user;
  }
}
