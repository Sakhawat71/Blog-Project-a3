import { Router } from "express";
import { userController } from "./auth.controller";

const route = Router();

route.post(
    '/register',
    userController.register
);

export const authRoute = route;