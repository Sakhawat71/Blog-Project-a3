import { Router } from "express";
import { authRoute } from "../modules/Auth/auth.route";
import { userRoute } from "../modules/User/user.route";
import { blogRoute } from "../modules/Blog/blog.route";
import { adminRoute } from "../modules/Admin/admin.route";

const route = Router();

const routersModule = [
    {
        path :'/auth',
        route: authRoute
    },
    {
        path :'/users',
        route: userRoute
    },
    {
        path : '/blogs',
        route: blogRoute
    },
    {
        path : '/admin',
        route : adminRoute
    }

];

routersModule.forEach((r) => {
    route.use(r.path, r.route);
});

export default route;