"use strict";

import cors from "cors";
import express, {Express} from "express";
const app: Express = express();

// Import de Rotas
import userRoute from "./UserRoute";

// Uso de Rotas
app.use("/user", userRoute);

// Habilita o CORS
app.use(cors());

export default app;
