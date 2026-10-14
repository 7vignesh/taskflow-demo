import { Router, type RequestHandler } from "express";

const router = Router();

const postregister: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "Register a new user",
    status: "not_implemented",
  });
};
router.post("/register", postregister);

const postlogin: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "Login user and return JWT",
    status: "not_implemented",
  });
};
router.post("/login", postlogin);

export { router as authRouter };
