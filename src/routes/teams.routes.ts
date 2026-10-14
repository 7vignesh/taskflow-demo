import { Router, type RequestHandler } from "express";

const router = Router();

const get: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get teams for the authenticated user",
    status: "not_implemented",
  });
};
router.get("/", get);

const post: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Create a new team",
    status: "not_implemented",
  });
};
router.post("/", post);

const getid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Get a team by ID",
    status: "not_implemented",
  });
};
router.get("/:id", getid);

const putid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Update a team",
    status: "not_implemented",
  });
};
router.put("/:id", putid);

const deleteid: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Delete a team",
    status: "not_implemented",
  });
};
router.delete("/:id", deleteid);

const getidmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) List members of a team",
    status: "not_implemented",
  });
};
router.get("/:id/members", getidmembers);

const postidmembers: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Add a user to a team",
    status: "not_implemented",
  });
};
router.post("/:id/members", postidmembers);

const deleteidmembersuserId: RequestHandler = (_req, res) => {
  res.status(501).json({
    message: "(auth required) Remove a user from a team",
    status: "not_implemented",
  });
};
router.delete("/:id/members/:userId", deleteidmembersuserId);

export { router as teamsRouter };
