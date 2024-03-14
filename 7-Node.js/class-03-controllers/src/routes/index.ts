import { Router } from "express";
import { userControllers } from "../controllers/userControllers";

export const router = Router();

router.get("/user", userControllers.create);
router.post("/user", userControllers.read);
