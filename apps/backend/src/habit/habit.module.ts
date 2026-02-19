import { forwardRef, Module } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitController } from './habit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
import { MorningModule } from '../morning/morning.module';
import { DayModule } from '../day/day.module';
import { NightModule } from '../night/night.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Habit]),
        forwardRef(() => MorningModule),
        forwardRef(() => DayModule),
        forwardRef(() => NightModule),
  ],
  controllers: [HabitController],
  providers: [HabitService],
  exports:[TypeOrmModule, HabitService]
})
export class HabitModule {}
