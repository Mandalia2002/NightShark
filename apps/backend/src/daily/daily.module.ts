import { forwardRef, Module } from '@nestjs/common';
import { DailyService } from './daily.service';
import { DailyController } from './daily.controller';
import { Daily } from './entities/daily.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitModule } from '../habit/habit.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Daily]),
    HabitModule,
  ],
  controllers: [DailyController],
  providers: [DailyService],
  exports: [TypeOrmModule, DailyService]
})
export class DailyModule { }
