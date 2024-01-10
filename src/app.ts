import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors);

app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 11;

  res.send(a);
});

export default app;
