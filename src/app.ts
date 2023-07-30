import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "./routes/routes";
import cors from 'cors';

export const app = express();

const corsOptions = {
  origin: 'https://playground.easylaunch.ai',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
