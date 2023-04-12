import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmCourseService } from './pm-course.service';
import { CreatePmCourseDto } from './dto/create-pm-course.dto';
import { UpdatePmCourseDto } from './dto/update-pm-course.dto';

@Controller('pm-course')
export class PmCourseController {
  constructor(private readonly pmCourseService: PmCourseService) {}

  @Post()
  create(@Body() createPmCourseDto: CreatePmCourseDto) {
    return this.pmCourseService.create(createPmCourseDto);
  }

  @Get()
  findAll() {
    return this.pmCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmCourseDto: UpdatePmCourseDto) {
    return this.pmCourseService.update(+id, updatePmCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmCourseService.remove(+id);
  }
}
