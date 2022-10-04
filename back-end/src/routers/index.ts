import { Router } from "express";
import chat from "./chatRouter";
import post from "./postRouter";
import user from "./userRouter";


const router = Router();

router.use(user);
router.use(post);
router.use(chat);

export default router;