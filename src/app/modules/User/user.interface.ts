export interface IUser {
    id?: string; 
    name: string;
    email: string;
    password: string;
    role ?: "admin" | "user";
    isBlocked?: boolean;
};

