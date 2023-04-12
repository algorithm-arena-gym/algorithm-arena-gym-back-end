import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcRankService } from './pc-rank.service';
import { CreatePcRankDto } from './dto/create-pc-rank.dto';
import { UpdatePcRankDto } from './dto/update-pc-rank.dto';

@Controller('pc-rank')
export class PcRankController {
  constructor(private readonly pcRankService: PcRankService) {}

  @Post()
  create(@Body() createPcRankDto: CreatePcRankDto) {
    return this.pcRankService.create(createPcRankDto);
  }

  @Get()
  findAll() {
    return this.pcRankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcRankService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcRankDto: UpdatePcRankDto) {
    return this.pcRankService.update(+id, updatePcRankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcRankService.remove(+id);
  }
}
