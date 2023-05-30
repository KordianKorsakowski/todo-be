import { IsString } from 'class-validator';
export class CreateTodoDto {
  @IsString()
  priority: 'low' | 'medium' | 'high';
  @IsString()
  description: string;
}
