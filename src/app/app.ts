import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

export const app: Application = express();

app.use(express.json());
app.use(cors());
// app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running!",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Api not found!",
  });
});
