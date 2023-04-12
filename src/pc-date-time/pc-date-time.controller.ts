import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcDateTimeService } from './pc-date-time.service';
import { CreatePcDateTimeDto } from './dto/create-pc-date-time.dto';
import { UpdatePcDateTimeDto } from './dto/update-pc-date-time.dto';

@Controller('pc-date-time')
export class PcDateTimeController {
  constructor(private readonly pcDateTimeService: PcDateTimeService) {}

  @Post()
  create(@Body() createPcDateTimeDto: CreatePcDateTimeDto) {
    return this.pcDateTimeService.create(createPcDateTimeDto);
  }

  @Get()
  findAll() {
    return this.pcDateTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcDateTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcDateTimeDto: UpdatePcDateTimeDto) {
    return this.pcDateTimeService.update(+id, updatePcDateTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcDateTimeService.remove(+id);
  }
}
