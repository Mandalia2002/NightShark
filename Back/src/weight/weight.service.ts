import { Injectable } from '@nestjs/common';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Weight } from './entities/weight.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeightService {

  constructor(
    @InjectRepository(Weight)
    private readonly WeightRepository: Repository<Weight>
  ){}

  async create(createWeightDto: CreateWeightDto) {
    const base = {
      ...createWeightDto,
      date_weight: new Date(),
      done: false
    }
    const entry = this.WeightRepository.create(base)
    const assasas = await this.WeightRepository.save(entry)
    return assasas
  }

  findAll() {
    return `This action returns all weight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weight`;
  }

  async update(updateWeightDto: UpdateWeightDto) {
    const weight = await this.WeightRepository.find()
  }

  remove(id: number) {
    return `This action removes a #${id} weight`;
  }
}
