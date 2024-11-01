import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Post } from "./post-model.js";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
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

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
    defaultValue: UserRole.GUEST,
  })
  role!: UserRole;

  @HasMany(() => Post)
  posts!: Post[];
}
