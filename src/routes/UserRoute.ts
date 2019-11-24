"use strict";

import {Router} from "express";
import * as controller from "../controllers/UserController";
const router: Router = Router();

// Rotas da Entidade
router.get("/login/:email", controller.getJsonLogin);
router.post("/register", controller.postJsonLogin);

export default router;
