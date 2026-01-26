import { Module } from '@nestjs/common';
import { MorningService } from './morning.service';
import { MorningController } from './morning.controller';

@Module({
  controllers: [MorningController],
  providers: [MorningService],
})
export class MorningModule {}
