import "dotenv/config";
import express from "express";
import { authRouter } from "./routes/auth.routes.js";
import { rolesRouter } from "./routes/roles.routes.js";
import { tasksRouter } from "./routes/tasks.routes.js";
import { teamsRouter } from "./routes/teams.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json());
app.get("/healthz", (_req, res) => {
  res.json({ status: "ok", service: "generated-stackforge-app" });
});
app.use("/api/auth", authRouter);
app.use("/api/roles", rolesRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log("taskflow server listening on http://localhost:${port}");
});
