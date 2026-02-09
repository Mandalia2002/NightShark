import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { DayService } from './day.service';
import { UpdateDayDto } from './dto/update-day.dto';

@Controller('day')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  @Post()
  create() {
    return this.dayService.createDay();
  }

  @Get('/present')
  findOne() {
    return this.dayService.findOne();
  }

  @Patch()
  update(@Body() updateDayDto: UpdateDayDto) {
    return this.dayService.update(updateDayDto);
  }
}
