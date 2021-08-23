import {Injectable, Logger, UnauthorizedException, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserRepository} from './user.repository';
import * as bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt';
import {User} from './entities/User.entity';
import {ChangePasswordDto, ResetPasswordDto} from './dto';
import * as uuidv1 from 'uuid';

@Injectable()
export class UserService {
  private logger = new Logger('Auth Service');

  constructor(
      @InjectRepository(UserRepository)
      private readonly userRepository: UserRepository,
      private readonly jwtService: JwtService
  ) {
  }

  async getAllUsers(): Promise<any> {
    return await this.userRepository.find();
  }

  async getUser(req: any): Promise<any> {
    const {id} = req.user;
    const user = await this.userRepository.findOne({id});
    //this.logger.verbose(`User Logged In ${user.name}`);
    if (user) {
      const {...result} = user;
      //delete result.password;
      //delete result.id;
      return {
        success: true,
        message: 'Success',
        data: result,
      };
    }
    throw new UnauthorizedException();
  }


  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userRepository.findOne({email});
      console.log('user', user);
      if (user) {
        //const match = await bcrypt.compare(password, user.password);
        if (user) {
          return user;
        }
      }
      return null;
    } catch (err) {
      global.console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Login failed.',
      };
    }
  }

  async register(data: any): Promise<any> {
    try {
      if (data.password !== data.confirm) {
        return {
          success: false,
          message: 'Error',
          data: {
            confirm: 'Password and confirm password must be same.',
          },
        };
      }
      const user = await this.userRepository.findOne({email: data.email});
      if (!user) {
        data.password = await bcrypt.hash(data.password, 10);
        data.status = 'ACTIVE';

        const registerUser = await this.userRepository.save(data);
        const {...result} = registerUser;
        delete result.password;
        delete result.confirm;
        return {
          success: true,
          message: 'Success',
          data: result,
        };
      }
      return {
        success: false,
        message: 'Error',
        data: {
          uniqueId: 'User already exist, please login.',
        },
      };
    } catch (e) {
      global.console.log('err', e);
      return {
        success: false,
        message: 'Something went wrong..! Registration failed.',
      };
    }
  }


  async login(user1: any) {
    const user = await this.validateUser(user1.email,user1.password)
    if(user){
    const {email, id} = user;
    const payload = {email, id};
    return {
      success: true,
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload)
    }
  }
  else{
    throw new UnauthorizedException({detail:'No active account found with the given credentials', code :'no_active_account'})
  }
  }

 
  

 
}