import {Router} from "express";
import {login, register} from "../controllers/auth.controller";
import authenticateToken from "../middlewares/auth.middleware";
import requireRole from "../middlewares/role.middleware";


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/owner-test', authenticateToken, requireRole(['OWNER']), (req, res) => {
    res.json({message: 'You are allowed to use this routes', user: req.user});
});

export default router;