import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsOptional} from 'class-validator';

export class AddConfectioneryDto {
    

    @ApiProperty({ example:null })
    @IsString()
    name:string;

    @ApiProperty({ example:null })
    @IsString()
    address:string;

    @ApiProperty({ example:null })
    @IsString()
    panchayath:string;

    @ApiProperty({ example:null })
    @IsString()
    district:string;


    @ApiProperty({ example:null })
    @IsOptional()
    starCategory:number;

    @ApiProperty({ example:null })
    @IsString()
    latitude:string;

    @ApiProperty({ example:null })
    @IsString()
    longitude:string;

    @ApiProperty({ example:null })
    @IsString()
    @IsOptional()
    facilities:string;

    @ApiProperty({ example:null })
    @IsString()
    contact:string;

    @ApiProperty({ example:null})
    @IsString()
    policy:string;

}