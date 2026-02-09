import { HttpException, Injectable } from '@nestjs/common';
import { UpdateDayDto } from './dto/update-day.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Day } from './entities/day.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DayService {

  constructor(
    @InjectRepository(Day)
    private readonly DayRepository: Repository<Day>
  ) { }

  async createDay() {
    try {
      const dateNow = new Date()
      dateNow.setHours(0, 0, 0, 0)
      const dayExists = await this.DayRepository.findOne({ where: { date: dateNow } })
      if (!dayExists) {

        const contrus = {
          exercise: false,
          dailies: false,
          food: false,
          work: false,
          water: false,
          study: false,
          percentage: 0,
          date: dateNow
        }

        const day = this.DayRepository.create(contrus)
        const dayCreated = await this.DayRepository.save(day)

        return dayCreated
      } else {
        return dayExists
      }
    } catch (error) {
      return {
        message: "An Error has ocurred",
        error: error
      }
    }
  }

  async findOne() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const dayExists = await this.DayRepository.findOne({ where: { date: dateNow } })
    if (!dayExists) throw new HttpException("Day of this date:" + dateNow + "does not exists", 404);
    return dayExists
  }

  async update(updateDayDto: UpdateDayDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const dayExists = await this.DayRepository.findOne({ where: { date: dateNow } })
    if (!dayExists) throw new HttpException('Day on this date: ' + dateNow + " not found", 404)
    const a = {
      ...updateDayDto
    }
    const b = Object.values(a)
    const c = b.reduce((accu, curr) => {
      const attributeValue = curr.value;
      if (!accu[attributeValue]) {
        accu[attributeValue] = [];
      }
      accu[attributeValue].push(curr);
      return accu;
    }, {});

    if (c.true != undefined || c.true != null) {
      let changes = Object.values(c.true)
      const d = changes.length
      const nume: any = ((d * 100) / 6) / 100
      let crotus = {
        exercise: updateDayDto.exercise.value || false,
        dailies: updateDayDto.dailies.value || false,
        food: updateDayDto.food.value || false,
        work: updateDayDto.work.value || false,
        water: updateDayDto.water.value || false,
        study: updateDayDto.study.value || false,
        percentage: nume
      }
      const morning = await this.DayRepository.update(dayExists, crotus)
      return morning
    } else {
      return { message: "No changes" }
    }
  }
}
