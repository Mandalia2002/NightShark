import { forwardRef, Module } from '@nestjs/common';
import { MorningService } from './morning.service';
import { MorningController } from './morning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Morning } from './entities/morning.entity';
import { HabitModule } from 'src/habit/habit.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Morning]),
    forwardRef(()=>HabitModule)
  ],
  controllers: [MorningController],
  providers: [MorningService],
  exports:[MorningService]
})
export class MorningModule {}
