import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NightService } from './night.service';
import { UpdateNightDto } from './dto/update-night.dto';

@Controller('night')
export class NightController {
  constructor(private readonly nightService: NightService) {}

  @Post()
  create() {
    return this.nightService.createNight();
  }

  @Get('/present')
  findOne() {
    return this.nightService.findOne();
  }

  @Patch()
  update( @Body() updateNightDto: UpdateNightDto) {
    return this.nightService.update(updateNightDto);
  }

}
