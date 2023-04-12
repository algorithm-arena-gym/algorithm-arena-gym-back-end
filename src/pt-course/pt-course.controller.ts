import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PtCourseService } from './pt-course.service';

@Controller('pt-course')
export class PtCourseController {
  constructor(private readonly ptCourseService: PtCourseService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ptCourseService.findOne(+id);
  }
}
