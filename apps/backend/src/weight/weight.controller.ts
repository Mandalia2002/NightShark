import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WeightService } from './weight.service';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';

@Controller('weight')
export class WeightController {
  constructor(private readonly weightService: WeightService) {}

  @Post()
  create(@Body() createWeightDto: CreateWeightDto) {
    return this.weightService.create(createWeightDto);
  }

  @Post("/new")
  new(@Body() createWeightDto: CreateWeightDto) {
    return this.weightService.reset(createWeightDto);
  }

  // @Get()
  // findAll() {
  //   return this.weightService.findAll();
  // }

  @Get()
  findOne() {
    return this.weightService.findOne();
  }

  @Patch()
  advance(@Body() weight: number) {
    return this.weightService.advance(weight);
  }

  @Put()
  update(@Body() updateWeightDto: UpdateWeightDto) {
    return this.weightService.update(updateWeightDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.weightService.remove(+id);
  // }
}
