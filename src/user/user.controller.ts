import { Body, Controller, Get, Request, Logger, Post, UseGuards, Put,Req } from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginDto, RegisterDto, ChangePasswordDto,ResetPasswordDto, ForgetPasswordDtoDto } from './dto';
import { AuthGuard } from '@nestjs/passport';


@ApiTags('Auth Management')
@Controller('auth')
export class UserController {
  private logger = new Logger('User Controller');
  constructor(private readonly userService: UserService) {
  }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    getUser(@Request() req: any) {
      this.logger.verbose(`User Retrieved `);
      return this.userService.getUser(req);
    }
  
   // @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Req() req,@Body() loginDto:LoginDto) {
      this.logger.verbose(`user Logged in `,loginDto.email);
      console.log(loginDto.email)
      return this.userService.login(loginDto);
    }
  
  
    @Post('register')
    register(@Body() registerDto: RegisterDto):Promise<any>{
      return this.userService.register(registerDto);
    }
  
  
}