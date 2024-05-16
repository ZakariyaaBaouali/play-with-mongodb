import express, { Request, Response, urlencoded } from "express";
import { BASE_ROUTE, SERVER_PORT } from "./config";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(`${BASE_ROUTE}`, (req: Request, res: Response) => {
  return res.status(200).send("🧑‍🚀Server working...!");
});

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT} 🧑‍🚀`)
);
