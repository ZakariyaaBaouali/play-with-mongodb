import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

const ConnectToDB = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log(`Connect to db 🚀🚀`))
    .catch((ex) => console.log(`Failed to connect to db + ${ex}`))
    .finally(() => console.log(`Finish up`));
};

export { ConnectToDB };
