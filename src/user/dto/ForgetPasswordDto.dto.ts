import {ApiProperty} from "@nestjs/swagger";
import {IsEmail} from "class-validator";

export class ForgetPasswordDtoDto {
    @ApiProperty({example: null})
    @IsEmail()
    readonly email: string;
}
