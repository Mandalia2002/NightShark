import { Injectable } from '@nestjs/common';
import { CreateMorningDto } from './dto/create-morning.dto';
import { UpdateMorningDto } from './dto/update-morning.dto';

@Injectable()
export class MorningService {
  create(createMorningDto: CreateMorningDto) {
    return 'This action adds a new morning';
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
