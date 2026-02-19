import { forwardRef, Module } from '@nestjs/common';
import { DayService } from './day.service';
import { DayController } from './day.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Day } from './entities/day.entity';
import { HabitModule } from '../habit/habit.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Day]),
    forwardRef(() => HabitModule)
  ],
  controllers: [DayController],
  providers: [DayService],
  exports: [DayService]
})
export class DayModule {}
