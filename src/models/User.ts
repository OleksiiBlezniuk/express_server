import { AllowNull, AutoIncrement, Column, CreatedAt, Default, HasMany, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Todo } from './Todo';

@Table({
  tableName: 'users',
})

export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  name: string;

  @AllowNull(false)
  @Default('example@gmail.com')
  @Column({
    type: DataTypes.STRING,
  })
  email: string;

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

  @HasMany(() => Todo)
  todos: Todo[];
}
