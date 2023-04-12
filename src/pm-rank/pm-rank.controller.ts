import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmRankService } from './pm-rank.service';

@Controller('pm-rank')
export class PmRankController {
  constructor(private readonly pmRankService: PmRankService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmRankService.findOne(+id);
  }
}
