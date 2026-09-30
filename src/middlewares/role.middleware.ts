import { Request, Response, NextFunction } from 'express';
import { JwtUser } from '../types/auth';

type Role = JwtUser["role"];

const requireRole = (roles: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }

        next();
    };
};

export default requireRole;