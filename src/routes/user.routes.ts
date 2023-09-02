import { Router } from "express";
import { CreateuserController } from "../modules/users/useCases/CreateUser/createUserController";
import { GetAllUserController } from "../modules/users/useCases/GetAllUsers/getAllUserController";
import { AuthUserController } from "../modules/users/useCases/AuthUser/authUserController";
import { AuthMiddleware } from "../middlewares/auth";
import { DeleteUserController } from "../modules/users/useCases/DeleteUser/deleteUserController";
import { UpdateUserController } from "../modules/users/useCases/UpdateUser/updateUserController";
import { GetUserByIdController } from "../modules/users/useCases/getUser/getUserController";

const userRoutes = Router();

const createuserController = new CreateuserController();
const getUserByIdController = new GetUserByIdController();
const getAllUserController = new GetAllUserController();
const authUserController = new AuthUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

userRoutes.post("/", createuserController.store);
userRoutes.get("/", AuthMiddleware, getAllUserController.index);
userRoutes.get("/:id", AuthMiddleware, getUserByIdController.index);
userRoutes.post("/auth", authUserController.authenticate);
userRoutes.delete("/:id", deleteUserController.remove);
userRoutes.put("/:id", updateUserController.update);

export { userRoutes };
