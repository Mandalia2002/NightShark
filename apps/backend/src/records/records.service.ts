import { Injectable } from '@nestjs/common';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DailyService } from 'src/daily/daily.service';
import { Not, Repository } from 'typeorm';
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
    const a = dateNow.toLocaleDateString('default', { month: '2-digit' })
    const recordMes = await this.RecordRepository.findOne({ where: { date_month: a } })
    if (recordMes) await this.RecordRepository.delete(recordMes.id)
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

    const manana = habitsMor.flat(Infinity)
    const dia = habitsDay.flat(Infinity)
    const noche = habitsNig.flat(Infinity)

    const haMa: any = []
    for (const num of manana) {
      haMa[num] = habits[num] ? habits[num] + 1 : 1;
    }
    const haDa: any = []
    for (const num of dia) {
      haDa[num] = habits[num] ? habits[num] + 1 : 1;
    }
    const haNo: any = []
    for (const num of noche) {
      haNo[num] = habits[num] ? habits[num] + 1 : 1;
    }

    const habitMa: any = []
    const order1 = Object.entries(haMa).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitMa.push(order1[0], order1[1], order1[2])
    const habitsMa = Object.fromEntries(habitMa)

    const habitDa: any = []
    const order2 = Object.entries(haDa).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitDa.push(order2[0], order2[1], order2[2])
    const habitsDa = Object.fromEntries(habitDa)

    const habitNo: any = []
    const order3 = Object.entries(haNo).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitNo.push(order3[0], order3[1], order3[2])
    const habitsNo = Object.fromEntries(habitNo)

    const habitsImp = {
      "morning": habitsMa,
      "day": habitsDa,
      "night": habitsNo
    }

    const as = {}
    for (const num of mood) {
      as[num] = as[num] ? as[num] + 1 : 1;
    }

    const recordMonth = this.RecordRepository.create({
      percentages: monthPercentage,
      habits_improve: habitsImp,
      mood_statistics: as,
      date_month: `${dateNow.toLocaleDateString('default', { month: '2-digit' })}`,
      year: Number(dateNow.toLocaleDateString('default', { year: 'numeric' }))
    })

    this.RecordRepository.save(recordMonth)
    return recordMonth
  }

  async createYearReport() {
    const dateNow = new Date()
    const year = dateNow.toLocaleDateString('default', { year: 'numeric' })
    const recordYear = await this.RecordRepository.findOne({ where: { date_month: 'año', year: Number(year) } })
    if (recordYear) await this.RecordRepository.delete(recordYear.id)
    const monthly = await this.RecordRepository.find({ where: { year: Number(year), date_month: Not('año') } })
    let percentages: any[] = []
    let habitsMor: any[] = []
    let habitsDay: any[] = []
    let habitsNoc: string[] = []
    let mood: any[] = []

    function recurse(currentObj: any) {
      for (const key in currentObj) {
        if (Object.hasOwn(currentObj, key)) {
          const months = currentObj[key]
          mood.push(months.mood_statistics)
          percentages.push(months.percentages);
          const a = months.habits_improve.morning
          const b = Object.getOwnPropertyNames(a)
          habitsMor.push(...b)
          const a1 = months.habits_improve.day
          const b1 = Object.getOwnPropertyNames(a1)
          habitsDay.push(...b1)
          const a2 = months.habits_improve.night
          const b2 = Object.getOwnPropertyNames(a2)
          habitsNoc.push(...b2)
        }
      }
    }
    recurse(monthly)

    const con = monthly.length
    const total: number = percentages.reduce((a, c) => a + c, 0)
    const monthPercentage = ((total * 100) / con) / 100

    const habits = {}

    const manana = habitsMor.flat(Infinity)
    const dia = habitsDay.flat(Infinity)
    const noche = habitsNoc.flat(Infinity)

    const haMa: any = []
    for (const num of manana) {
      haMa[num] = habits[num] ? habits[num] + 1 : 1;
    }
    const haDa: any = []
    for (const num of dia) {
      haDa[num] = habits[num] ? habits[num] + 1 : 1;
    }
    const haNo: any = []
    for (const num of noche) {
      haNo[num] = habits[num] ? habits[num] + 1 : 1;
    }

    const habitMa: any = []
    const order1 = Object.entries(haMa).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitMa.push(order1[0], order1[1], order1[2])
    const habitsMa = Object.fromEntries(habitMa)
    const habitDa: any = []
    const order2 = Object.entries(haDa).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitDa.push(order2[0], order2[1], order2[2])
    console.log(habitDa)
    const habitsDa = Object.fromEntries(habitDa)
    const habitNo: any = []
    const order3 = Object.entries(haNo).toSorted(([, a]: [string, number], [, b]: [string, number]) => b - a)
    habitNo.push(order3[0], order3[1], order3[2])
    const habitsNo = Object.fromEntries(habitNo)

    const habitsImp = {
      "morning": habitsMa,
      "day": habitsDa,
      "night": habitsNo
    }

    const moods = mood.reduce((acc, obj) => {
      for (const [key, value] of Object.entries(obj)) {
        acc[key] = (acc[key] || 0) + value
      }
      return acc
    }, {} as { [key: string]: number })

    const recordMonth = this.RecordRepository.create({
      percentages: monthPercentage,
      habits_improve: habitsImp,
      mood_statistics: moods,
      date_month: `año`,
      year: Number(dateNow.toLocaleDateString('default', { year: 'numeric' }))
    })

    this.RecordRepository.save(recordMonth)
    return recordMonth
  }

  findAll() {
    return `This action returns all records`;
  }

  async findOne() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const a = dateNow.toLocaleDateString('default', { month: '2-digit' })
    const monthReport = await this.RecordRepository.findOne({ where: { date_month: a } })
    if (!monthReport) return {
      message: "There isnt a report for this month"
    }
    return monthReport
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
