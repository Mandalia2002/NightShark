import { Module } from '@nestjs/common';
import { MorningService } from './morning.service';
import { MorningController } from './morning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Morning } from './entities/morning.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Morning])
  ],
  controllers: [MorningController],
  providers: [MorningService],
  exports:[MorningService]
})
export class MorningModule {}
