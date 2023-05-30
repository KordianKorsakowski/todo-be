import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from './todos.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { Users } from 'src/users/users.entity';
import { isActiveTodoDto } from './dtos/isActive-todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos) private repo: Repository<Todos>){}
    create(body: CreateTodoDto, user: Users){
        const todo = this.repo.create(body)
        todo.user = user
        return this.repo.save(todo);
    }
    async isActive(body:isActiveTodoDto, id:number){
        const todo = await this.repo.findOne({where:{id}});
        if(!todo){
            throw new NotFoundException('todo not found')
        }
        todo.isActive = body.isActive;
        return this.repo.save(todo);
    }
    async getList(id:number){
        const todo = await this.repo.find({where:{id}})
        return todo;
    }
}
