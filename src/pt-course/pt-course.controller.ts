import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PtCourseService } from './pt-course.service';
import { CreatePtCourseDto } from './dto/create-pt-course.dto';
import { UpdatePtCourseDto } from './dto/update-pt-course.dto';

@Controller('pt-course')
export class PtCourseController {
  constructor(private readonly ptCourseService: PtCourseService) {}

  @Post()
  create(@Body() createPtCourseDto: CreatePtCourseDto) {
    return this.ptCourseService.create(createPtCourseDto);
  }

  @Get()
  findAll() {
    return this.ptCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ptCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePtCourseDto: UpdatePtCourseDto) {
    return this.ptCourseService.update(+id, updatePtCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ptCourseService.remove(+id);
  }
}
