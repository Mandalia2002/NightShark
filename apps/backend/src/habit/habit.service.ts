import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
import { Repository } from 'typeorm';
import { MorningService } from '../morning/morning.service';
import { DayService } from '../day/day.service';
import { NightService } from '../night/night.service';

@Injectable()
export class HabitService {

  constructor(
    @InjectRepository(Habit)
    private readonly HabitRepository: Repository<Habit>,
    private readonly Morning: MorningService,
    private readonly Day: DayService,
    private readonly Night: NightService
  ) { }

  async create() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const habitExists = await this.HabitRepository.findOne({ where: { date: dateNow } })
    if (!habitExists) {
      const man = await this.Morning.createMorning()
      const dia = await this.Day.createDay()
      const noc = await this.Night.createNight()

      const manFalse = this.extractFalseValues(man)
      const diaFalse = this.extractFalseValues(dia)
      const nocFalse = this.extractFalseValues(noc)

      let manPor: number
      let diaPor: number
      let nocPor: number
      let total
      if ('percentage' in man && 'percentage' in dia && 'percentage' in noc) {
        manPor = man.percentage
        diaPor = dia.percentage
        nocPor = noc.percentage
        total = ((manPor + diaPor + nocPor) * 100) / 3
      }

      const habit = this.HabitRepository.create({
        morning_habit: manFalse,
        day_habit: diaFalse,
        night_habit: nocFalse,
        date: dateNow,
        percentage: total
      })

      const habitCreated = await this.HabitRepository.save(habit)

      return habitCreated
    } else {
      return habitExists
    }
  }

  async findAll() {
    const all = await this.HabitRepository.find()
    return all
  }

  async findOne() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const habitExists = await this.HabitRepository.findOne({ where: { date: dateNow } })
    if (!habitExists) throw new HttpException("Habit of this date: " + dateNow + " does not exists", 404)
    return habitExists
  }

  async update() {
    try {
      const dateNow = new Date()
      dateNow.setHours(0, 0, 0, 0)
      const habitExists = await this.HabitRepository.findOne({ where: { date: dateNow } })
      if (!habitExists) throw new HttpException("Habit of this date: " + dateNow + " does not exists", 404)
      const morningExists = await this.Morning.findOne()
      const dayExists = await this.Day.findOne()
      const nightExists = await this.Night.findOne()
      let total = 0

      const manFalse = this.extractFalseValues(morningExists)
      const diaFalse = this.extractFalseValues(dayExists)
      const nocFalse = this.extractFalseValues(nightExists)

      total = (morningExists.percentage * 100 + dayExists.percentage * 100 + nightExists.percentage * 100) / 3

      habitExists.percentage = total
      habitExists.morning_habit = manFalse
      habitExists.day_habit = diaFalse
      habitExists.night_habit = nocFalse
      const habitUpdated = await this.HabitRepository.save(habitExists)
      return habitUpdated
    } catch (error) {
      return {
        message: "An Error has Ocurred",
        error: error
      }
    }
  }

  extractFalseValues(obj: any) {
    const keys: string[] = [];

    function recurse(currentObj: any) {
      for (const key in currentObj) {
        if (Object.hasOwn(currentObj, key)) {
          const value = currentObj[key];

          if (value === false) {
            keys.push(key);
          } else if (typeof value === 'object' && value !== null) {
            recurse(value);
          }
        }
      }
    }

    recurse(obj);
    return keys;
  }
}