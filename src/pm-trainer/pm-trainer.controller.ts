import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmTrainerService } from './pm-trainer.service';
@Controller('pm-trainer')
export class PmTrainerController {
  constructor(private readonly pmTrainerService: PmTrainerService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmTrainerService.findOne(+id);
  }
}
