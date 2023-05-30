import { Todos } from 'src/todos/todos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: 'user' })
  role: 'user' | 'admin';
  @OneToMany(() => Todos, (todo) => todo.user)
  todos: Todos[];
}
