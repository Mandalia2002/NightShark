import { Module } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitController } from './habit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
import { MorningService } from 'src/morning/morning.service';
import { MorningModule } from 'src/morning/morning.module';
import { DayModule } from 'src/day/day.module';
import { NightModule } from 'src/night/night.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Habit]),
    MorningModule,
    DayModule,
    NightModule
  ],
  controllers: [HabitController],
  providers: [HabitService],
  exports:[TypeOrmModule, HabitService]
})
export class HabitModule {}
