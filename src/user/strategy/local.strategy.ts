import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      usernameField: 'email'
    }); 
  }

  async validate(email: string, password: string): Promise<any> { 
    const user = await this.userService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException({detail:'No active account found with the given credentials', code :'no_active_account'});
    }
    return user;
  }
}
