import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { MorningService } from './morning.service';
import { UpdateMorningDto } from './dto/update-morning.dto';

@Controller('morning')
export class MorningController {
  constructor(private readonly morningService: MorningService) {}

  @Post()
  create() {
    return this.morningService.createMorning();
  }

  @Get('/present')
  findOne() {
    return this.morningService.findOne();
  }

  @Patch()
  update(@Body() updateMorningDto: UpdateMorningDto) {
    return this.morningService.update(updateMorningDto);
  }
}
