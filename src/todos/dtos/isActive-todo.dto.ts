import { IsBoolean } from 'class-validator';

export class isActiveTodoDto {
  @IsBoolean()
  isActive: boolean;
}
