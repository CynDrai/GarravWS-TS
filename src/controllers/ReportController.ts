"use strict";

import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Report } from "../models/Report";

export async function insertReport(req: Request, res: Response) {
  try {
    // Entity Manager
    const entityManager: Repository<Report> = getRepository(Report);

    let report: Report = req.body;
    report.dateReport = new Date(report.dateReport);
    const result: Report = await entityManager.save(report);

    res.status(200).send(result).end();
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
    res.status(500).send({
			cause: "Falha ao processar sua requisição",
			message: e.message
		});
  }
}
