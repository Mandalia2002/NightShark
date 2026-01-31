import { Module } from '@nestjs/common';
import { WeightService } from './weight.service';
import { WeightController } from './weight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weight } from './entities/weight.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Weight])
  ],
  controllers: [WeightController],
  providers: [WeightService],
})
export class WeightModule {}
