import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmCourseService } from './pm-course.service';
@Controller('pm-course')
export class PmCourseController {
  constructor(private readonly pmCourseService: PmCourseService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmCourseService.findOne(+id);
  }
}
