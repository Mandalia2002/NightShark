import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habit } from './entities/habit.entity';
import { JsonContains, Repository } from 'typeorm';
import { MorningService } from 'src/morning/morning.service';
import { DayService } from 'src/day/day.service';
import { NightService } from 'src/night/night.service';

@Injectable()
export class HabitService {

  constructor(
    @InjectRepository(Habit)
    private readonly HabitRepository: Repository<Habit>,
    private Morning: MorningService,
    private Day: DayService,
    private Night: NightService
  ) { }

  async create(createHabitDto: CreateHabitDto) {
    try {
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

      console.log(manFalse)


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
