import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from 'src/booking/booking.module';
import { UserRepository } from 'src/user/user.repository';
import { ItemRepository } from './item.repository';
import { BookingRepository } from 'src/booking/booking.repository';
import { ConfectioneryRepository } from 'src/confectionery/confectionery.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Item, ItemRepository]),
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([ConfectioneryRepository]),
    TypeOrmModule.forFeature([BookingRepository]),
    BookingModule
  ],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
