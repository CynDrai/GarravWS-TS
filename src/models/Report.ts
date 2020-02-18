"use strict";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name: "bug_report"})
export class Report {

  @PrimaryGeneratedColumn({name: "id", type: "bigint"})
  public id: bigint;
  @Column({name: "id_user", type: "bigint", nullable: false})
  public id_user: bigint;
  @Column({name: "bug_report", type: "varchar", precision: 2000, nullable: false})
  public bugReport: string;
  @Column({name: "date_report", type: "timestamp without time zone", nullable: false})
  public dateReport: Date;

  constructor(id?: bigint,
              id_user?: bigint,
              bugReport?: string,
              dateReport?: Date) {
    this.id = id;
    this.id_user = id_user;
    this.bugReport = bugReport;
    this.dateReport = dateReport;
  }
}
