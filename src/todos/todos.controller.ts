import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { Users } from 'src/users/users.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { TodotDto } from './dtos/todo.dto';
import { isActiveTodoDto } from './dtos/isActive-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Post('/create')
  @UseGuards(AuthGuard)
  @Serialize(TodotDto)
  createReport(@Body() body: CreateTodoDto, @CurrentUser() user: Users) {
    return this.todosService.create(body, user);
  }
  @Patch('/:id')
  @UseGuards(AuthGuard)
  isActive(@Param('id') id: string, @Body() body: isActiveTodoDto) {
    return this.todosService.isActive(body, parseInt(id));
  }
  @Get('/list/:id')
  @UseGuards(AuthGuard)
  getList(@Param('id') id: string) {
    return this.todosService.getList(parseInt(id));
  }
}
