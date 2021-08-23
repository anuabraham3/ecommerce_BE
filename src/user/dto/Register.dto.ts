import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: null })
  @IsString()
  name: string;

  @ApiProperty({ example: null })
  @IsString()
  email: string;

  @ApiProperty({ required: false, example: null })
  @IsOptional()
  @IsString()
  readonly referal: string;

  @ApiProperty({ example: null })
  @IsString()
  @MinLength(8)
  @MaxLength(49)
  @Matches(/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*]).{8,}$/, { message: 'Password too Weak' })
  password: string;

  @ApiProperty({ example: null })
  @IsString()
  confirm: string;

  @ApiProperty({ example: null })
  @IsString()
  type: string;
}
