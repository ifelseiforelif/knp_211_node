import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import { Post } from "./post-model.js";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "./profile-model.js";

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
  scopes: {
    adminUsers: {
      where: { role: UserRole.ADMIN },
    },
    guestUsers: {
      where: { role: UserRole.GUEST },
    },
    userUsers: {
      where: { role: UserRole.USER },
    },
  },
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4(),
    primaryKey: true,
  })
  id!: string;

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

  @HasOne(() => Profile)
  profile!: Profile;
}
