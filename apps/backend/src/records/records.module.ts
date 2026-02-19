import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { DailyModule } from '../daily/daily.module';
import { Record } from './entities/record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record]),
    DailyModule
  ],
  controllers: [RecordsController],
  providers: [RecordsService],
  
})
export class RecordsModule { }
