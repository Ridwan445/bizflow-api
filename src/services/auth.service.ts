import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (
    username: string, email: string, password: string
) => {
    if (!username || !email || !password) {
        throw new Error("Username, email, and password are required");
    }
    if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Invalid email format");
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
});
return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
};
};

const loginUser = async (email: string, password: string) => {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }
    const token = jwt.sign(
        { id: user.id, username: user.username, email: user.email, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );
    return {
        token,
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
    };
};

export {
    registerUser,
    loginUser,
};