import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './daily/daily.module';
import { DayModule } from './day/day.module';
import { NightModule } from './night/night.module';
import { MorningModule } from './morning/morning.module';
import { HabitModule } from './habit/habit.module';
import { GoalModule } from './goal/goal.module';
import { WeightModule } from './weight/weight.module';

@Module({
  imports: [DailyModule, DayModule, NightModule, MorningModule, HabitModule, GoalModule, WeightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
