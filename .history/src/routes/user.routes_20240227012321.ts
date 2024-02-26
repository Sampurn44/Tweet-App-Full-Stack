import { Router } from "express";

const userRouter = Router();

//Define route paths

userRouter.get("/:userId",getUserController);
userRouter.post("/",createUserController);
userRouter.delete("/:userId",getUserController);
