import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from './User';

@Table({
  tableName: 'todos',
})

export class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  userId: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  title: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.BOOLEAN,
  })
  completed: boolean;

  @Default(DataTypes.NOW)
  @Column({
    type: DataTypes.DATE,
  })
  createdAt: Date;

  @Default(DataTypes.NOW)
  @Column({
    type: DataTypes.DATE,
  })
  updatedAt: Date;
}
