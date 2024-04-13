import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { cookie } = req.headers;
  console.log(cookie);
  if (!cookie) return res.status(401).json({ message: "Token obrigatório!" });

  const splitCookieToken = cookie.split("=");

  if (splitCookieToken.length != 2)
    return res.status(401).json({ message: "Token obrigatório!" });

  const [key, token] = splitCookieToken;

  if (key != process.env.KEY_TOKEN)
    return res.status(401).json({ message: "Chave do token inválido!" });

  verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error)
      throw res
        .status(401)
        .json({ message: error.message || "Error no oken!" });
    const { id } = decoded as JwtPayload;
    req.userID = id;
    return next();
  });
  next();
}
