import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { number, z } from "zod";

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
            .min(3, { message: "Mínimo de 3 caracteres!" }),

          email: z
            .string({
              required_error: "Email obrigatório!",
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" }),

          password: z
            .string({
              required_error: "Senha obrigatória!",
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .min(7, "Senha com mínimo de 7 caracteres")
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail) {
        throw res.status(400).json({ message: "email already exists!" });
      }

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "user created!", ...userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res
          .status(400)
          .json({ message: "please confirm your password!" });
      }

      const user = await userRepository.getByID(id);

      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
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

      const user = await userRepository.getByID(id);

      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userEmail = await userRepository.getByEmail(email);

      if (userEmail && userEmail.id != id) {
        throw res.status(400).json({ message: "email already exists!" });
      }

      const userUpdated = await userRepository.update({
        id,
        name,
        email,
        newPassword,
      });

      return res.status(200).json(userUpdated);
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const user = await userRepository.getByID(id);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const userDeleted = await userRepository.delete(id);
      return res.status(200).send(userDeleted);
    } catch (error) {
      return next(error);
    }
  },
};
