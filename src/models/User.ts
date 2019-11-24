"use strict";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usr"})
export class User {

  @PrimaryGeneratedColumn({name: "id", type: "bigint"})
  public id: bigint;
  @Column({name: "name", type: "varchar", precision: 30, nullable: false})
  public name: string;
  @Column({name: "fic_name", type: "varchar", precision: 30, nullable: true})
  public fic_name: string;
  @Column({name: "email", type: "varchar", precision: 100, nullable: false})
  public email: string;
  @Column({name: "date_account", type: "timestamp without time zone", nullable: false})
  public date_account: Date;
  @Column({name: "type_user", type: "varchar", precision: 20, nullable: false})
  public type_user: string;
  @Column({name: "password", type: "varchar", precision: 200, nullable: false})
  public password: string;

  constructor(id?: bigint,
              name?: string,
              fic_name?: string,
              email?: string,
              date_account?: Date,
              type_user?: string,
              password?: string) {
    this.id = id;
    this.name = name;
    this.fic_name = fic_name;
    this.email = email;
    this.date_account = date_account;
    this.type_user = type_user;
    this.password = password;
  }
}
