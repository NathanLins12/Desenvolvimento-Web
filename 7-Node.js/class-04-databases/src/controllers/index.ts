import { Request, Response, NextFunction } from "express";
import { sqliteContection } from "../databases/sqlite3";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, password } = req.body;
      const db = await sqliteContection();

      await db.run(
        "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
        [id, name, email, password]
      );
      return res.json({ mensage: "User created!", id });
    } catch (error) {
      return next(error);
    }
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
