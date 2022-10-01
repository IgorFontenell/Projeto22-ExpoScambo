import { Router } from "express";
import user from "./userRouter";


const router = Router();

router.use(user);

export default router;