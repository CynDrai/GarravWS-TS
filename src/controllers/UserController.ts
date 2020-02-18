"use strict";

import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { User } from "../models/User";

export async function getJsonLogin(req: Request, res: Response) {
  try {
  // Entity Manager
  const entityManager: Repository<User> = getRepository(User);
  // Find User by Email
  const user: User = await entityManager.findOne({email: req.params.email});
  user.date_account = new Date(user.date_account);
  
  res.status(200).send(user).end();
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
    res.status(500).send({
			cause: "Falha ao processar sua requisição",
			message: e.message
		});
  }
}

export async function postJsonLogin(req: Request, res: Response) {
  try {
    // Entity Manager
    const entityManager: Repository<User> = getRepository(User);
    // User Instance from client side
    const user: User = req.body;
    // Find User by Email
    const userSearch: User = await entityManager.findOne({email: user.email});
    if (!userSearch) {
      await entityManager.save(user);
      res.status(200).send("Sucess").end();
    } else {
      res.status(200).send(null).end();
    }
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
    res.status(500).send({
			cause: "Falha ao processar sua requisição",
			message: e.message
		});
  }
}
