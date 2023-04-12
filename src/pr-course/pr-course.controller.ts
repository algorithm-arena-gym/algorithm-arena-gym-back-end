import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrCourseService } from './pr-course.service';
import { CreatePrCourseDto } from './dto/create-pr-course.dto';
import { UpdatePrCourseDto } from './dto/update-pr-course.dto';

@Controller('pr-course')
export class PrCourseController {
  constructor(private readonly prCourseService: PrCourseService) {}

  @Post()
  create(@Body() createPrCourseDto: CreatePrCourseDto) {
    return this.prCourseService.create(createPrCourseDto);
  }

  @Get()
  findAll() {
    return this.prCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrCourseDto: UpdatePrCourseDto) {
    return this.prCourseService.update(+id, updatePrCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prCourseService.remove(+id);
  }
}
