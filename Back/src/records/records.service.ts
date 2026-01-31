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

    percentages.push(40)

    recurse(dailies)
    const con = dailies.length + 1
    console.log(con)
    const total:number = percentages.reduce((a, c) => a + c, 0)
    const monthPercentage = ((total * 100) / con) / 100 //---------------------

    const habits ={}

    const plano = habitsMor.flat(Infinity)

    for (const num of plano ){
      habits[num] = habits[num] ? habits[num] + 1 : 1;
    }

    console.log(habits)
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
