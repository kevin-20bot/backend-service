import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Almacenropa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column()
  marca! : string
  
  @Column("tipo de cuerpo")
  talla! : string
}