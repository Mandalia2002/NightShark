import { Injectable } from '@nestjs/common';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DailyService } from 'src/daily/daily.service';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {

  constructor(
    @InjectRepository(Record)
    private readonly RecordRepository: Repository<Record>,
    private readonly Daily: DailyService
  ) { }

  async createMonthReport() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const dailies = await this.Daily.findAllFromMonth(dateNow)
    let percentages: any[] = []
    let habitsMor: any[] = []
    let habitsDay: any[] = []
    let habitsNig: any[] = []
    let mood: any[] = []
    function recurse(currentObj: any) {
      for (const key in currentObj) {
        if (Object.hasOwn(currentObj, key)) {
          const days = currentObj[key]
          const value = currentObj[key].habit;
          mood.push(days.mood)
          percentages.push(value.percentage);
          habitsMor.push(value.morning_habit)
          habitsDay.push(value.day_habit)
          habitsNig.push(value.night_habit)
        }
      }
    }
    recurse(dailies)
    const con = dailies.length
    const total: number = percentages.reduce((a, c) => a + c, 0)
    const monthPercentage = ((total * 100) / con) / 100

    const habits = {}
    const habitsImprove: any[] = []

    const manana = habitsMor.flat(Infinity)
    const dia = habitsDay.flat(Infinity)
    const noche = habitsNig.flat(Infinity)

    for (const num of manana) {
      habits[num] = habits[num] ? habits[num] + 1 : 1;
    }
    for (const num of dia) {
      habits[num] = habits[num] ? habits[num] + 1 : 1;
    }
    for (const num of noche) {
      habits[num] = habits[num] ? habits[num] + 1 : 1;
    }

    const order = Object.entries(habits).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitsImprove.push(order[0], order[1], order[2])
    const habitsImp = Object.fromEntries(habitsImprove)

    const as = {}
    for (const num of mood) {
      as[num] = as[num] ? as[num] + 1 : 1;
    }
    const orderMood = Object.entries(as).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)

    const recordMonth = this.RecordRepository.create({
      percentages: monthPercentage,
      habits_improve: habitsImp,
      mood_statistics: orderMood,
      date_month: `${dateNow.toLocaleDateString('default', { month: '2-digit' })}`,
      year: Number(dateNow.toLocaleDateString('default', { year: 'numeric' }))
    })

    this.RecordRepository.save(recordMonth)
    return recordMonth
  }

  async createYearReport() {
    const dateNow = new Date()
    dateNow.setFullYear(2025)
    dateNow.setHours(0, 0, 0, 0)
    const dailies = await this.Daily.findAllFromYear(dateNow)
    let percentages: any[] = []
    let habitsMor: any[] = []
    let habitsDay: any[] = []
    let habitsNig: any[] = []
    let mood: any[] = []

    function recurse(currentObj: any) {
      for (const key in currentObj) {
        if (Object.hasOwn(currentObj, key)) {
          const days = currentObj[key]
          const value = currentObj[key].habit;
          mood.push(days.mood)
          percentages.push(value.percentage);
          habitsMor.push(value.morning_habit)
          habitsDay.push(value.day_habit)
          habitsNig.push(value.night_habit)
        }
      }
    }
    recurse(dailies)

    return {
      percentages,
      habitsMor,
      habitsDay,
      habitsNig,
      mood
    }
  }

  findAll() {
    return `This action returns all records`;
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
