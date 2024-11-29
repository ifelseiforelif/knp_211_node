import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users_groups",
  timestamps: false,
})
export class UserGroup extends Model {}
