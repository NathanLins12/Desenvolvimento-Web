import { Request, Response, NextFunction } from "express";
import { userRepositorie } from "../repositories/userRepositories";
import { compare } from "bcrypt";
import { z } from "zod";
import { sign } from "jsonwebtoken";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          email: z
            .string({
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" })
            .max(255, "Tamanho máximo atingido por email"),

          password: z
            .string({
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .max(255, "Tamanho máximo atingido por por senha"),
        })
        .strict();

      const { email, password } = userSchema.parse(req.body);

      const user = await userRepositorie.getByEmail(email);

      if (!user) throw res.status(401).json({ message: "email or password invalid!" });

      const passwordcheck = await compare(password, user.password);

      if (!passwordcheck) {
        throw res.status(401).json({ message: "email or password invalid!" });
      }

      const token = sign({ id: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      res.cookie(process.env.KEY_TOKEN, token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 15,
      });

      return res.status(200).json({ message: "User logged in!", token });
    } catch (error) {
      return next(error);
    }
  },
};
