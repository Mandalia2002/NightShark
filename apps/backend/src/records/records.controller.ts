import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsService } from './records.service';
import { UpdateRecordDto } from './dto/update-record.dto';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) { }

  @Post('/month')
  createMonth() {
    return this.recordsService.createMonthReport();
  }

  @Post('/year')
  createYear() {
    return this.recordsService.createYearReport();
  }

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
    return this.recordsService.update(+id, updateRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }
}
