import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get list of users (admin)",
    status: "not_implemented",
  });
};
router.get("/", get);

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get a user by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update user details",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete a user",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

export { router as usersRouter };
