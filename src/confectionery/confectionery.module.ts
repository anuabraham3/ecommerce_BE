import { Module } from '@nestjs/common';
import { ConfectioneryService } from './confectionery.service';
import { ConfectioneryController } from './confectionery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfectioneryRepository } from './confectionery.repository';
import { UserRepository } from 'src/user/user.repository';
import { ItemRepository } from 'src/item/item.repository';
import { Confectionery } from './entities/confectionery.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Confectionery, ConfectioneryRepository]),
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([ItemRepository]),
  ],
  controllers: [ConfectioneryController],
  providers: [ConfectioneryService],
  exports:[ConfectioneryService]
})
export class ConfectioneryModule {}
