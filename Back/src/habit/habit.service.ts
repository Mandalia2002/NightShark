import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
import { Repository } from 'typeorm';
import { MorningService } from 'src/morning/morning.service';
import { DayService } from 'src/day/day.service';
import { NightService } from 'src/night/night.service';

@Injectable()
export class HabitService {

  constructor(
    @InjectRepository(Habit)
    private readonly HabitRepository: Repository<Habit>,
    private Morning:MorningService,
    private Day: DayService,
    private Night: NightService
  ){}

  create(createHabitDto: CreateHabitDto) {
    const man = this.Morning.createMorning()
    const dia = this.Day.createDay()
    const noc = this.Night.createNight()

    
  }

  findAll() {
    return `This action returns all habit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
