import { Expose, Transform } from 'class-transformer';

export class TodotDto {
  @Expose()
  id: number;
  @Expose()
  isActive: boolean;
  @Expose()
  priority: "low"|"medium"|"high";
  @Expose()
  description: string;
  @Expose()
  date: Date;
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
