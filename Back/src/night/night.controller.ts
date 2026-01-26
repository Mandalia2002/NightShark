import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NightService } from './night.service';
import { CreateNightDto } from './dto/create-night.dto';
import { UpdateNightDto } from './dto/update-night.dto';

@Controller('night')
export class NightController {
  constructor(private readonly nightService: NightService) {}

  @Post()
  create(@Body() createNightDto: CreateNightDto) {
    return this.nightService.create(createNightDto);
  }

  @Get()
  findAll() {
    return this.nightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNightDto: UpdateNightDto) {
    return this.nightService.update(+id, updateNightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nightService.remove(+id);
  }
}
