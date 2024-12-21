import { Router } from "express";
import { authRoute } from "../modules/Auth/auth.route";

const route = Router();

const routersModule = [
    {
        path :'/auth',
        route: authRoute
    },
];

routersModule.forEach((r) => {
    route.use(r.path, r.route);
});

export default route;