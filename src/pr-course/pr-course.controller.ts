import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrCourseService } from './pr-course.service';


@Controller('pr-course')
export class PrCourseController {
  constructor(private readonly prCourseService: PrCourseService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prCourseService.findOne(+id);
  }

}
