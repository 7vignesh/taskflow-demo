import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List all roles",
    status: "not_implemented",
  });
};
router.get("/", get);

const post: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a new role (admin)",
    status: "not_implemented",
  });
};
router.post("/", post);

export { router as rolesRouter };
