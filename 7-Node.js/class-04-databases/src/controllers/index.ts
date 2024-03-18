import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    res.send({ mensage: "created!" });
  },

  read(req: Request, res: Response) {
    res.send({ mensage: "read!" });
  },

  update(req: Request, res: Response) {
    res.send({ mensage: "updated!" });
  },

  delete(req: Request, res: Response) {
    res.send({ mensage: "deleted!" });
  },
};
