import { Injectable } from '@nestjs/common';
import { CreateDailyDto } from './dto/create-daily.dto';
import { UpdateDailyDto } from './dto/update-daily.dto';
import { Daily } from './entities/daily.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DailyService {

  constructor(
    @InjectRepository(Daily)
    private readonly DailyRepository:Repository<Daily>,
  ) { }

  async createNewDay(createDailyDto: CreateDailyDto) {

    const all = {
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
