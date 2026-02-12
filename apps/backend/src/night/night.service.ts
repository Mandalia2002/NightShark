import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateNightDto } from './dto/create-night.dto';
import { UpdateNightDto } from './dto/update-night.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Night } from './entities/night.entity';
import { Repository } from 'typeorm';
import { HabitService } from 'src/habit/habit.service';

@Injectable()
export class NightService {

  constructor(
    @InjectRepository(Night)
    private readonly NightRepository: Repository<Night>,
    @Inject(forwardRef(() => HabitService))
    private readonly Day: HabitService,
  ) { }

  async createNight() {
    try {
      const dateNow = new Date()
      dateNow.setHours(0, 0, 0, 0)
      const nightExists = await this.NightRepository.findOne({ where: { date: dateNow } })
      if (!nightExists) {

        const contrus = {
          cleanDesk: false,
          skinNigh: false,
          teethNigh: false,
          hair: false,
          read: false,
          prepare: false,
          clothes: false,
          percentage: 0,
          date: dateNow
        }

        const night = this.NightRepository.create(contrus)
        const nightCreated = await this.NightRepository.save(night)

        return nightCreated
      } else {
        return nightExists
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
    const nightExists = await this.NightRepository.findOne({ where: { date: dateNow } })
    if (!nightExists) throw new HttpException("Night of this date:" + dateNow + "does not exists", 404);
    return nightExists
  }

  async update(updateNightDto: UpdateNightDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const nightExists = await this.NightRepository.findOne({ where: { date: dateNow } })
    if (!nightExists) throw new HttpException('Night on this date: ' + dateNow + " not found", 404)
    const a = {
      ...updateNightDto
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
      const nume: any = ((d * 100) / 7) / 100
      let crotus = {
        cleanDesk: updateNightDto.cleanDesk.value || false,
        skinNigh: updateNightDto.skinNigh.value || false,
        teethNigh: updateNightDto.teethNigh.value || false,
        hair: updateNightDto.hair.value || false,
        read: updateNightDto.read.value || false,
        prepare: updateNightDto.prepare.value || false,
        clothes: updateNightDto.clothes.value || false,
        percentage: nume
      }
      const night = await this.NightRepository.update(nightExists, crotus)
      this.Day.update()
      return night
    } else {
      return { message: "No changes" }
    }
  }
}
