import { Injectable } from '@nestjs/common';
import { CreateConfectioneryDto } from './dto/create-confectionery.dto';
import { UpdateConfectioneryDto } from './dto/update-confectionery.dto';

@Injectable()
export class ConfectioneryService {
  create(createConfectioneryDto: CreateConfectioneryDto) {
    return 'This action adds a new confectionery';
  }

  findAll() {
    return `This action returns all confectionery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} confectionery`;
  }

  update(id: number, updateConfectioneryDto: UpdateConfectioneryDto) {
    return `This action updates a #${id} confectionery`;
  }

  remove(id: number) {
    return `This action removes a #${id} confectionery`;
  }
}
