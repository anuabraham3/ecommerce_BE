import { PartialType } from '@nestjs/swagger';
import { CreateConfectioneryDto } from './create-confectionery.dto';

export class UpdateConfectioneryDto extends PartialType(CreateConfectioneryDto) {}
