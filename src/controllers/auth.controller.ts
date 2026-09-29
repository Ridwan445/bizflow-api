import {Request, Response} from 'express';
import {registerUser} from '../services/auth.service';

const register = async (req: Request, res: Response) => {
    const {username, email, password} = req.body;
    try {
        const user = await registerUser(username, email, password);
        res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
        res.status(400).json({message: (error as Error).message});
    }
};

export {
    register
};