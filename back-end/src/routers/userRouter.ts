import { Router } from "express";
import { loginController, registerController } from "../controllers/userController";

const user = Router();

user.post("/sign-up", registerController);
user.post("/sign-in", loginController);

export default user;
