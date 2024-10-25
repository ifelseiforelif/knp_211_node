import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Post } from "./post-model.js";

@Table({
  tableName: "users",
  timestamps: false,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
  })
  login!: string;

  @HasMany(() => Post)
  posts!: Post[];
}
