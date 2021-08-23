import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class SearchByDistrictDto {
    @ApiProperty({ example:null })
    @IsOptional()
    @IsString()
    readonly district:string;
}