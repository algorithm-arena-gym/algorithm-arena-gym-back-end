import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmTrainerService } from './pm-trainer.service';
import { CreatePmTrainerDto } from './dto/create-pm-trainer.dto';
import { UpdatePmTrainerDto } from './dto/update-pm-trainer.dto';

@Controller('pm-trainer')
export class PmTrainerController {
  constructor(private readonly pmTrainerService: PmTrainerService) {}

  @Post()
  create(@Body() createPmTrainerDto: CreatePmTrainerDto) {
    return this.pmTrainerService.create(createPmTrainerDto);
  }

  @Get()
  findAll() {
    return this.pmTrainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmTrainerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmTrainerDto: UpdatePmTrainerDto) {
    return this.pmTrainerService.update(+id, updatePmTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmTrainerService.remove(+id);
  }
}
