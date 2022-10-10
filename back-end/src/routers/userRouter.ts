import { Router } from "express";
import { getUserInformationByToken, getUserInformationController, loginController, registerController, sendScoreController } from "../controllers/userController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";

const user = Router();

user.post("/sign-up", registerController);
user.post("/sign-in", loginController);
user.post("/user/sendScore/:courierId", autenticateMiddleware, sendScoreController);
user.get("/user/:userId", getUserInformationController);
user.get("/user/profile/me", autenticateMiddleware, getUserInformationByToken);

export default user;
