import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfectioneryService } from './confectionery.service';
import { CreateConfectioneryDto } from './dto/create-confectionery.dto';
import { UpdateConfectioneryDto } from './dto/update-confectionery.dto';

@Controller('confectionery')
export class ConfectioneryController {
  constructor(private readonly confectioneryService: ConfectioneryService) {}

  @Post()
  create(@Body() createConfectioneryDto: CreateConfectioneryDto) {
    return this.confectioneryService.create(createConfectioneryDto);
  }

  @Get()
  findAll() {
    return this.confectioneryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confectioneryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfectioneryDto: UpdateConfectioneryDto) {
    return this.confectioneryService.update(+id, updateConfectioneryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confectioneryService.remove(+id);
  }
}
