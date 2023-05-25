import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  findOne(id: number) {
    if(!id){return null} 
    return this.repo.findOne({ where: { id } });
  }
}
