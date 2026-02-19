import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './daily/daily.module';
import { DayModule } from './day/day.module';
import { NightModule } from './night/night.module';
import { MorningModule } from './morning/morning.module';
import { HabitModule } from './habit/habit.module';
import { WeightModule } from './weight/weight.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [
    DailyModule,
    DayModule,
    NightModule,
    MorningModule,
    HabitModule,
    WeightModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      // database: 'nightshark.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
      // synchronize: false,
    }),
    RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// host: 'localhost',
// port: 3306,
// username: 'root',
// password: '123456',
// database: 'nightshark',