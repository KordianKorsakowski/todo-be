import { Body, Controller, Post, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const { password, email } = body;
    console.log(body);
    const user = await this.authService.signup(email, password);
    session.userId = user.id;
    return user;
  }
  @Post('/login')
  async login(@Body() body: CreateUserDto, @Session() session: any) {
    const { password, email } = body;
    const user = await this.authService.login(email, password);
    session.userId = user.id;
    return user;
  }
  @UseGuards(AuthGuard)
  @Post("/logout")
  async logout(@Session() session: any){
    session.userId = null;
  }
}
