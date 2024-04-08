import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userRepositorie } from "../repositories/userRepositories";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Nome obrigatório!",
              invalid_type_error: "Para o nome use somente texto!",
            })
            .min(3, { message: "Mínimo de 3 caracteres para o nome!" })
            .max(255, "Tamanho máximo atingido por nome"),

          email: z
            .string({
              required_error: "Email obrigatório!",
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" })
            .max(255, "Tamanho máximo atingido por email"),

          password: z
            .string({
              required_error: "Senha obrigatória!",
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .min(7, "Senha com mínimo de 7 caracteres")
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.",
            })
            .max(255, "Tamanho máximo atingido por por senha"),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const usersExists = await userRepositorie.getByEmail(email);
      if (usersExists)
        throw res.status(400).json({
          message: "email already exists!",
        });
      console.log(name, email, password);

      const usersCreated = await userRepositorie.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "User created!", usersCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = "9edd08bb-ab78-4e29-8149-b944ca5fdf4b";

      const user = await userRepositorie.getByID(userID);
      if (!user) throw res.status(404).json({ message: " User not found" });

      const { name, email } = user;
      console.log(user);

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};
