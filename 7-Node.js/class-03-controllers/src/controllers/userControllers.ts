import { Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      res.json({ status: `user ${id} created!` });
    }
    res.json({ status: `user not created!` });
  },

  read(req: Request, res: Response) {
    res.json({ user: "1" });
  },
};
