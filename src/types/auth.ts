export interface JwtUser {
    id: number;
    username: string;
    email: string;
    role: "OWNER" | "ADMIN" | "ACCOUNTANT" | "STAFF";
}