// src/middlewares/roleMiddleware.ts

import { Response, NextFunction } from "express";

export const roleGuard = (...allowedRoles: number[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "No tienes permisos" });
    }
    next();
  };
};
