import { Controller, Get, Post, Patch } from '@nestjs/common';
import { HabitService } from './habit.service';

@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Post()
  create() {
    return this.habitService.create();
  }

  @Get()
  findAll() {
    return this.habitService.findAll();
  }

  @Patch()
  update() {
    return this.habitService.update();
  }
}
