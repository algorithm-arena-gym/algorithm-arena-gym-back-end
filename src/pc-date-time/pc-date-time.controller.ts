import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcDateTimeService } from './pc-date-time.service';

@Controller('pc-date-time')
export class PcDateTimeController {
  constructor(private readonly pcDateTimeService: PcDateTimeService) {}

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcDateTimeService.findOne(+id);
  }

}
