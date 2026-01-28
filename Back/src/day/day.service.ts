import { Injectable } from '@nestjs/common';
import { CreateDayDto } from './dto/create-day.dto';
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

  create(createDayDto: CreateDayDto) {
    const a = {
      ...createDayDto
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

    const d = Object.values(c.true).length

    const nume = ((d * 100) / 6)

    const contrus = {
      exercise: createDayDto.exercise.value,
      dailies: createDayDto.dailies.value,
      food: createDayDto.food.value,
      work: createDayDto.work.value,
      water: createDayDto.water.value,
      study: createDayDto.study.value,
      percentage: nume,
      date: new Date()
    }

    const day = this.DayRepository.create(contrus)
    this.DayRepository.save(day)

    return nume
  }

  findAll() {
    return `This action returns all day`;
  }

  findOne(id: number) {
    return `This action returns a #${id} day`;
  }

  update(id: number, updateDayDto: UpdateDayDto) {
    return `This action updates a #${id} day`;
  }

  remove(id: number) {
    return `This action removes a #${id} day`;
  }
}
