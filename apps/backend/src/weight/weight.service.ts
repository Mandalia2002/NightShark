import { HttpException, Injectable } from '@nestjs/common';
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
    if (!goal) return {
      message: "Not Found"
    }
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

  async advance(info: any) {
    try {
      if (!info) throw new HttpException("Weight is missing", 400)
      const weight = info.weight
      const goal = await this.WeightRepository.findOne({ where: { done: false } })
      if (!goal) return "Not Found"
      const dateNow = new Date()
      dateNow.setHours(0, 0, 0, 0)
      const dateGoal = new Date(goal.date_weight+"T23:01:06.316Z")
      dateGoal.setHours(0,0,0,0)
      let days
      let dat = goal.worked_days
      if (dateGoal.getTime() === dateNow.getTime()) {
        days = goal.date_weight
      } else {
        days = dateNow
        dat = dat + 1
      }
      let done = false
      if (weight === goal.goal_weight) done = true

      goal.date_weight = days
      goal.done = done
      goal.weight = weight
      goal.worked_days = dat

      const assasas = await this.WeightRepository.save(goal)
      return assasas
    } catch (error) {
      return {
        message: "An Error has Ocurred",
        error: error
      }
    }
  }

  async update(updateWeightDto: UpdateWeightDto) {
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (!goal) return "Not Found"
    let dat 
    if(updateWeightDto.date_goal) dat =  new Date(updateWeightDto.date_goal)
    goal.date_goal = dat || goal.date_goal
    goal.goal_weight = updateWeightDto.goal_weight || goal.goal_weight
    const sas = await this.WeightRepository.save(goal)
    return sas
  }

  async reset(crear: CreateWeightDto) {
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    const goal = await this.WeightRepository.findOne({ where: { done: false } })
    if (!goal) return 'Not Found'
    let done = true
    goal.done = done
    const assasas = await this.WeightRepository.save(goal)
    const a = await this.create(crear)

    return a
  }

}
