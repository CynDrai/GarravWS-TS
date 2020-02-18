"use strict";

import {Router} from "express";
import * as controller from "../controllers/ReportController";
const router: Router = Router();

// Rotas da entidade
router.post("/bug_report", controller.insertReport);

export default router;
