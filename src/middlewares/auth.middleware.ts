import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JwtUser } from "../types/auth";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        const decodedUser = user as JwtUser;
        req.user = decodedUser;
        next();
    });
};

export default authenticateToken;