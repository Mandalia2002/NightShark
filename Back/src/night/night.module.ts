import { Module } from '@nestjs/common';
import { NightService } from './night.service';
import { NightController } from './night.controller';

@Module({
  controllers: [NightController],
  providers: [NightService],
})
export class NightModule {}
