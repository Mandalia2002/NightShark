import { Injectable } from '@nestjs/common';
import { CreateMorningDto } from './dto/create-morning.dto';
import { UpdateMorningDto } from './dto/update-morning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Morning } from './entities/morning.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MorningService {

  constructor(@InjectRepository(Morning)
  private readonly MorningRepository: Repository<Morning>
  ) { }

  async createMorning(createMorningDto: CreateMorningDto) {
    const a = {
      ...createMorningDto
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

    // const d = Object.values(c.true).length

    return c.length

    // const nume = ((d*100)/6)

    // const contrus = {
    //   wakeUp: createMorningDto.wakeUp.value||false,
    //   bed: createMorningDto.bed.value||false,
    //   clean: createMorningDto.clean.value||false,
    //   teethMorn: createMorningDto.teethMorn.value||false,
    //   skinMorn: createMorningDto.skinMorn.value||false,
    //   body: createMorningDto.body.value||false,
    //   percentage: nume,
    //   date: new Date()
    // }

    // const morning = this.MorningRepository.create(contrus)
    // await this.MorningRepository.save(morning)

    // return nume
  }

  findAll() {
    return `This action returns all morning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} morning`;
  }

  update(id: number, updateMorningDto: UpdateMorningDto) {
    return `This action updates a #${id} morning`;
  }

  remove(id: number) {
    return `This action removes a #${id} morning`;
  }
}
