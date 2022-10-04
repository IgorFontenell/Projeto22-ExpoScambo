import { Router } from "express";
import { getUserInformationController, loginController, registerController, sendScoreController } from "../controllers/userController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";

const user = Router();

user.post("/sign-up", registerController);
user.post("/sign-in", loginController);
user.post("/user/sendScore/:courierId", autenticateMiddleware, sendScoreController);
user.get("/user/:userId", getUserInformationController);

export default user;
