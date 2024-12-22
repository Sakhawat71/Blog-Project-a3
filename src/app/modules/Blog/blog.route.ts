import { Router } from "express";
import { blogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";

const router = Router();

router.post(
    '/',
    validateRequest(blogValidation.createBlogValidation),
    blogController.createBlog
);

router.patch(
    '/:id',
    validateRequest(blogValidation.updateBlogValidation),
    blogController.updateBlog
);

router.get(
    '/:id',
    blogController.getSingleBlog
);

router.delete(
    '/:id',
    blogController.deleteBlog
)


export const blogRoute = router;