import { forwardRef, Module } from '@nestjs/common';
import { NightService } from './night.service';
import { NightController } from './night.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Night } from './entities/night.entity';
import { HabitModule } from 'src/habit/habit.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Night]),
    forwardRef(() => HabitModule)
  ],
  controllers: [NightController],
  providers: [NightService],
  exports: [NightService]
})
export class NightModule { }
