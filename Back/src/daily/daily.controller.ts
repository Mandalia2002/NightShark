import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyService } from './daily.service';
import { UpdateDailyDto } from './dto/update-daily.dto';

@Controller('daily')
export class DailyController {
  constructor(private readonly dailyService: DailyService) {}

  @Post()
  create() {
    return this.dailyService.createNewDay();
  }

  @Get()
  findAll() {
    return this.dailyService.HowManyDays();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dailyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDailyDto: UpdateDailyDto) {
  //   return this.dailyService.update(+id, updateDailyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dailyService.remove(+id);
  // }
}
