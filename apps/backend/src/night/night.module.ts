import { Module } from '@nestjs/common';
import { NightService } from './night.service';
import { NightController } from './night.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Night } from './entities/night.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Night])
  ],
  controllers: [NightController],
  providers: [NightService],
  exports: [NightService]
})
export class NightModule {}
