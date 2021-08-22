import { Module } from '@nestjs/common';
import { ConfectioneryService } from './confectionery.service';
import { ConfectioneryController } from './confectionery.controller';

@Module({
  controllers: [ConfectioneryController],
  providers: [ConfectioneryService]
})
export class ConfectioneryModule {}
