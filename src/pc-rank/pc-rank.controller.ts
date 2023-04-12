import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcRankService } from './pc-rank.service';

@Controller('pc-rank')
export class PcRankController {
  constructor(private readonly pcRankService: PcRankService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcRankService.findOne(+id);
  }

}
