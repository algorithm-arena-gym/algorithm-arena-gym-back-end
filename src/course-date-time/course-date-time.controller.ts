import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseDateTimeService } from './course-date-time.service';
import { CreateCourseDateTimeDto } from './dto/create-course-date-time.dto';
import { UpdateCourseDateTimeDto } from './dto/update-course-date-time.dto';

@Controller('course-date-time')
export class CourseDateTimeController {
  constructor(private readonly courseDateTimeService: CourseDateTimeService) {}

  @Post()
  create(@Body() createCourseDateTimeDto: CreateCourseDateTimeDto) {
    return this.courseDateTimeService.create(createCourseDateTimeDto);
  }

  @Get()
  findAll() {
    return this.courseDateTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseDateTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDateTimeDto: UpdateCourseDateTimeDto) {
    return this.courseDateTimeService.update(+id, updateCourseDateTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseDateTimeService.remove(+id);
  }
}
