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
    const sun = await this.DailyRepository.findOne({where:{date:dateNow}}) 
    if(sun) {return sun}
    const habit = await this.Habit.create()
    const all = {
      habit: habit.id,
      date: new Date()
    }

    const a = this.DailyRepository.create(all)
    await this.DailyRepository.save(a)
    return a
  }

  async HowManyDays() {
    const a = await this.DailyRepository.count()
    return a
  }

  async findAllFromMonthORYear(month?: string, year?: number) {
    if (!month && year) {
      const all = this.DailyRepository.createQueryBuilder('find').where('YEAR(find.date) = :year', { year: year }).getMany()
      return all
    }
    if (!year && month) {
      const all = this.DailyRepository.createQueryBuilder('find').where('MONTH(find.date) = :month', { month: month }).getMany()
      return all
    }
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
