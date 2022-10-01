import { Router } from "express";

const user = Router();

user.post("/sign-up");
user.post("/sign-in");

export default user;
