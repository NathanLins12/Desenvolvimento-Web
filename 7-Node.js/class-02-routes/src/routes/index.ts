import { Router } from "express";

export const router = Router();

router.get("/", (_req, res) => {
  res.send({ name: "Nathan" });
});

router.get("/pokemon", (_req, res) => {
  res.send([
    { id: 1, name: "bulba" },
    { id: 7, name: "chari" },
    { id: 32, name: "mew" },
  ]);
});
