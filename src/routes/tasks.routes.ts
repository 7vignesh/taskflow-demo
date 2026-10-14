import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get tasks (optionally filter by team)",
    status: "not_implemented",
  });
};
router.get("/", get);

const post: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a new task",
    status: "not_implemented",
  });
};
router.post("/", post);

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get a task by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update a task",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete a task",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

export { router as tasksRouter };
