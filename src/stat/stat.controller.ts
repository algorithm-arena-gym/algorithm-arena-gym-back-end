import { Controller, Get,Param } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
  constructor(private readonly statService: StatService) {}
  @Get()
  findAll() {
    return this.statService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statService.findOne(+id);
  }
}
