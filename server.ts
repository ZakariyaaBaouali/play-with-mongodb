import express, { Request, Response, urlencoded } from "express";
import { BASE_ROUTE, SERVER_PORT } from "./config";
import { ConnectToDB } from "./db";
import movieController from "./controllers/Movie.controller";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.disable("X-Powered-By");

app.get(`${BASE_ROUTE}`, (req: Request, res: Response) => {
  return res.status(200).send("🧑‍🚀Server working...!");
});

//movies handler
app.use(`${BASE_ROUTE}/movies`, movieController);

//ConnectToDB();

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT} 🧑‍🚀`)
);

declare global {
  namespace Express {
    interface Request {
      thumb?: string;
    }
  }
}
