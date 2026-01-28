import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NightService } from './night.service';
import { CreateNightDto } from './dto/create-night.dto';
import { UpdateNightDto } from './dto/update-night.dto';

@Controller('night')
export class NightController {
  constructor(private readonly nightService: NightService) {}

  @Post()
  create() {
    return this.nightService.createNight();
  }

  @Get()
  findAll() {
    return this.nightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nightService.findOne(+id);
  }

  @Patch()
  update( @Body() updateNightDto: UpdateNightDto) {
    return this.nightService.update(updateNightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nightService.remove(+id);
  }
}
