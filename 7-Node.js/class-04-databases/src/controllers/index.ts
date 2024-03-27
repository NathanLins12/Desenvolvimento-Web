import { Request, Response, NextFunction } from "express";
import { sqliteContection } from "../databases/sqlite3";
import { randomUUID } from "node:crypto";
import { hash, compare } from "bcrypt";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const db = await sqliteContection();
      const passwordHash = await hash(password, 10);
      const uuid = randomUUID();
      await db.run(
        "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
        [uuid, name, email, passwordHash]
      );
      return res.status(201).json({ mensage: "User created!", id: uuid });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteContection();

      if (!password) {
        throw res
          .status(400)
          .json({ mensage: "Please confirm your password!" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(400).json({ message: "User not found!" });
      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "Invalid password!" });
      }

      const { name, email } = user;
      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, password, newPassword } = req.body;
      const db = await sqliteContection();

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "User not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userEmail = await db.get("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      if (userEmail && userEmail.id != id)
        throw res.status(400).json({ message: "Email already exists!" });

      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;
      const passwordHash = await hash(newPassword, 10);
      await db.run(updateQuery, [name, email, passwordHash, id]);
      return res.status(200).json({ message: "User update!" });
    } catch (error) {
      return next(error);
    }
  },

  delete(req: Request, res: Response) {
    res.send({ mensage: "deleted!" });
  },
};
