import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmRankService } from './pm-rank.service';
import { CreatePmRankDto } from './dto/create-pm-rank.dto';
import { UpdatePmRankDto } from './dto/update-pm-rank.dto';

@Controller('pm-rank')
export class PmRankController {
  constructor(private readonly pmRankService: PmRankService) {}

  @Post()
  create(@Body() createPmRankDto: CreatePmRankDto) {
    return this.pmRankService.create(createPmRankDto);
  }

  @Get()
  findAll() {
    return this.pmRankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmRankService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmRankDto: UpdatePmRankDto) {
    return this.pmRankService.update(+id, updatePmRankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmRankService.remove(+id);
  }
}
