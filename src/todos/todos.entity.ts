import { Users } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Todos {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: false })
    isActive: boolean;
    @Column({default: "medium"})
    priority: "low"|"medium"|"high";
    @Column()
    description: string;
    @Column({default: new Date()})
    date: Date;
    @ManyToOne(() => Users, (user) => user.todos)
    user: Users;
}