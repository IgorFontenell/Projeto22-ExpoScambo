import { Router } from "express";
import { loginController, registerController, sendScoreController } from "../controllers/userController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";

const user = Router();

user.post("/sign-up", registerController);
user.post("/sign-in", loginController);
user.post("/user/sendScore/:courierId", autenticateMiddleware, sendScoreController);
user.post("/user")

export default user;
