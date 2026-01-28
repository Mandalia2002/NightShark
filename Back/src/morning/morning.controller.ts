import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MorningService } from './morning.service';
import { CreateMorningDto } from './dto/create-morning.dto';
import { UpdateMorningDto } from './dto/update-morning.dto';

@Controller('morning')
export class MorningController {
  constructor(private readonly morningService: MorningService) {}

  @Post()
  create() {
    return this.morningService.createMorning();
  }

  @Get()
  findAll() {
    return this.morningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.morningService.findOne(+id);
  }

  @Patch()
  update(@Body() updateMorningDto: UpdateMorningDto) {
    return this.morningService.update(updateMorningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.morningService.remove(+id);
  }
}
