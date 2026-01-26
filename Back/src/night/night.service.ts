import { Injectable } from '@nestjs/common';
import { CreateNightDto } from './dto/create-night.dto';
import { UpdateNightDto } from './dto/update-night.dto';

@Injectable()
export class NightService {
  create(createNightDto: CreateNightDto) {
    return 'This action adds a new night';
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
