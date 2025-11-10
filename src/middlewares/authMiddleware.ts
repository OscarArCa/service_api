import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: number;
    [key: string]: any;
  };
}

// Middleware que puede recibir un role requerido
export const authGuard = (requiredRole?: number) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Token requerido" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded;

      // Validar rol si se requiere
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ message: "No autorizado" });
      }

      next();
    } catch (error) {
      return res.status(403).json({ message: "Token inválido" });
    }
  };
};

