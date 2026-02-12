import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { UpdateMorningDto } from './dto/update-morning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Morning } from './entities/morning.entity';
import { Repository } from 'typeorm';
import { HabitService } from 'src/habit/habit.service';

@Injectable()
export class MorningService {

  constructor(
    @InjectRepository(Morning)
    private readonly MorningRepository: Repository<Morning>,
    @Inject(forwardRef(() => HabitService))
    private readonly Day: HabitService,
  ) { }

  async createMorning() {
    try {
      const dateNow = new Date()
      dateNow.setHours(0, 0, 0, 0)
      const morningExists = await this.MorningRepository.findOne({ where: { date: dateNow } })
      if (!morningExists) {

        const contrus = {
          wakeUp: false,
          bed: false,
          clean: false,
          teethMorn: false,
          skinMorn: false,
          body: false,
          percentage: 0,
          date: dateNow
        }

        const morning = this.MorningRepository.create(contrus)
        const morningCreated = await this.MorningRepository.save(morning)

        return morningCreated
      } else {
        return morningExists
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
    const morningExists = await this.MorningRepository.findOne({ where: { date: dateNow } })
    if (!morningExists) throw new HttpException("Morning of this date:" + dateNow + "does not exists", 404);
    return morningExists
  }

  async update(updateMorningDto: UpdateMorningDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const morningExists = await this.MorningRepository.findOne({ where: { date: dateNow } })
    if (!morningExists) throw new HttpException('Morning on this date: ' + dateNow + " not found", 404)
    const a = {
      ...updateMorningDto
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
        wakeUp: updateMorningDto.wakeUp.value || false,
        bed: updateMorningDto.bed.value || false,
        clean: updateMorningDto.clean.value || false,
        teethMorn: updateMorningDto.teethMorn.value || false,
        skinMorn: updateMorningDto.skinMorn.value || false,
        body: updateMorningDto.body.value || false,
        percentage: nume
      }
      const morning = await this.MorningRepository.update(morningExists, crotus)
      this.Day.update()
      return morning
    } else {
      return { message: "No changes" }
    }
  }
}
