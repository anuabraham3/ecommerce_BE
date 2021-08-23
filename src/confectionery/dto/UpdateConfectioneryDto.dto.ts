import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumberString , IsOptional } from 'class-validator';

export class UpdateConfectioneryDto {


    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly name:string;

    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly address:string;

    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly panchayath:string;

    @ApiProperty({ required:false, example:null })
    @IsOptional()
    @IsString()
    readonly district:string;

    @ApiProperty({ example:null })
    @IsOptional()
    readonly policy:string;


    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly latitude:string;

    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly longitude:string;

    @ApiProperty({ example:null })
    @IsOptional()
    readonly starCategory:number;

    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly facilities:string;

    @ApiProperty({ example:null })
    @IsOptional()
    contact:string;

    @ApiProperty({ example:null })
    @IsOptional()
    photos:any;

    @ApiProperty({ example:null })
    @IsOptional()
    status:string;

}