import { Router } from "express";
import { authControllers } from "../controllers/authControllers";
import { userControllers } from "../controllers/userControllers";

export const authRoutes = Router();

authRoutes.post("/login", authControllers.login);
authRoutes.get("/", userControllers.read);
