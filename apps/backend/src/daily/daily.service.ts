import { Injectable } from '@nestjs/common';
import { Daily } from './entities/daily.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HabitService } from 'src/habit/habit.service';

@Injectable()
export class DailyService {

  constructor(
    @InjectRepository(Daily)
    private readonly DailyRepository: Repository<Daily>,
    private readonly Habit: HabitService
  ) { }

  async createNewDay() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const sun = await this.DailyRepository.findOne({ where: { date: dateNow } })
    if (sun) { return sun }
    const habit = await this.Habit.create()
    const all = {
      habit: habit.id,
      date: dateNow
    }

    const a = this.DailyRepository.create(all)
    await this.DailyRepository.save(a)
    return a
  }

  async HowManyDays() {
    const a = await this.DailyRepository.count()
    return a
  }

  async findAllFromMonth(dat: Date) {
    const month = dat.toLocaleDateString('default', { month: '2-digit' })
    const year = dat.toLocaleDateString('default', { year: 'numeric' })
    const start = new Date(`${year}-${month}-01T00:00:00Z`)
    const end = new Date(`${year}-${month}-31T00:00:00Z`)
    const all = this.DailyRepository.createQueryBuilder('find')
      .leftJoinAndSelect("find.habit", "habit")
      .where('find.date BETWEEN :start AND :end', { start, end })
      .getMany()
    return all

  }

  async findAllFromYear(dat: Date) {
    const year = dat.toLocaleDateString('default', { year: 'numeric' })
    const start = new Date(`${year}-01-01T00:00:00Z`)
    const end = new Date(`${year}-12-31T00:00:00Z`)
    const all = this.DailyRepository.createQueryBuilder('find')
      .leftJoinAndSelect("find.habit", "habit")
      .where('find.date BETWEEN :start AND :end', { start, end })
      .getMany()
    return all
  }

  // async findOne(id: number) {
  //   return `This action returns a #${id} daily`;
  // }

  // update(id: number, updateDailyDto: UpdateDailyDto) {
  //   return `This action updates a #${id} daily`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} daily`;
  // }
}
