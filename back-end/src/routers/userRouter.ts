import { Router } from "express";
import { registerController } from "../controllers/userController";

const user = Router();

user.post("/sign-up", registerController);
user.post("/sign-in");

export default user;
