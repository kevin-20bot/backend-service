import "reflect-metadata";
import { DataSource } from "typeorm";
import { Almacenropa } from "./entities/Almacenropa";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Almacenropa],
  migrations:[],
  subscribers:[]
});