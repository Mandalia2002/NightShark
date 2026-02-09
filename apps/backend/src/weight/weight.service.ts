import { Injectable } from '@nestjs/common';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Weight } from './entities/weight.entity';
import { Repository } from 'typeorm';
import { truncate } from 'fs';

@Injectable()
export class WeightService {

  constructor(
    @InjectRepository(Weight)
    private readonly WeightRepository: Repository<Weight>
  ) { }

  async create(createWeightDto: CreateWeightDto) {
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (goal) return "There is a goal that isnt finished"
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const dateT = createWeightDto.date_goal
    const dateThen = new Date(dateT)
    dateThen.setHours(0, 0, 0, 0)
    const base = {
      ...createWeightDto,
      date_weight: dateNow,
      date_goal: dateThen,
      created_at: dateNow,
      worked_days: 0,
      done: false
    }
    const entry = this.WeightRepository.create(base)
    const assasas = await this.WeightRepository.save(entry)
    return assasas
  }

  async findOne() {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (!goal) return "Not Found"
    const dateThen = new Date(goal.date_goal)
    const days = Math.abs(dateThen.getTime() - dateNow.getTime())
    const differenceInDays = Math.ceil(days / 86400000);
    const weightLeft = goal.weight - goal.goal_weight
    return {
      ...goal,
      days_left: differenceInDays,
      weight_left: weightLeft
    }
  }

  async update(updateWeightDto: UpdateWeightDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (!goal) return "Not Found"
    let done = updateWeightDto.done
    if (updateWeightDto.weight === goal.goal_weight) done = true

    goal.date_weight = dateNow
    goal.done = done
    goal.weight = updateWeightDto.weight
    goal.worked_days = goal.worked_days + 1
    if (updateWeightDto.date_goal) {
      const dateThen = new Date(updateWeightDto.date_goal)
      dateThen.setHours(0, 0, 0, 0)
      goal.date_goal = dateThen
    }

    const assasas = await this.WeightRepository.save(goal)
    return assasas
  }

  async reset(crear: CreateWeightDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (!goal) return 'Not Found'
    let done = true
    goal.done = done
    const assasas = await this.WeightRepository.save(goal)

    return assasas
  }

}
