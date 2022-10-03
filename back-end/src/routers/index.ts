import { Router } from "express";
import post from "./postRouter";
import user from "./userRouter";


const router = Router();

router.use(user);
router.use(post);

export default router;