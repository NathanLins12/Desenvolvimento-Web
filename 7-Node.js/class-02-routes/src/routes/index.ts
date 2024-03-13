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

// route params
router.get("/user/:id/:name", (req, res) => {
  const { id, name } = req.params;
  res.send({ id, name });
});

// query params
router.get("/user", (req, res) => {
  const { id, name, age } = req.query;
  res.send({ id, name, age });
});

// body params
router.post("/user", (req, res) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  
  res.send({status: "User create!"});
});
