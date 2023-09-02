import { prisma } from "../../../../utils/prismaClient";
import { User } from "@prisma/client";

export class GetAllUserUseCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
}
