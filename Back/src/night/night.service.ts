import { Injectable } from '@nestjs/common';
import { CreateNightDto } from './dto/create-night.dto';
import { UpdateNightDto } from './dto/update-night.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Night } from './entities/night.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NightService {

  constructor(
    @InjectRepository(Night)
    private readonly NightRepository: Repository<Night>
  ){}

  create(createNightDto: CreateNightDto) {
        const a = {
      ...createNightDto
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
      cleanDesk: createNightDto.cleanDesk.value,
      skinNigh: createNightDto.skinNigh.value,
      teethNigh: createNightDto.teethNigh.value,
      hair: createNightDto.hair.value,
      read: createNightDto.read.value,
      prepare: createNightDto.prepare.value,
      clothes: createNightDto.clothes.value,
      percentage: nume,
      date: new Date()
    }

    const night = this.NightRepository.create(contrus)
    this.NightRepository.save(night)

    return nume
  }

  findAll() {
    return `This action returns all night`;
  }

  findOne(id: number) {
    return `This action returns a #${id} night`;
  }

  update(id: number, updateNightDto: UpdateNightDto) {
    return `This action updates a #${id} night`;
  }

  remove(id: number) {
    return `This action removes a #${id} night`;
  }
}
