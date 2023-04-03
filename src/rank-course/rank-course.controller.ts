import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RankCourseService } from './rank-course.service';
import { CreateRankCourseDto } from './dto/create-rank-course.dto';
import { UpdateRankCourseDto } from './dto/update-rank-course.dto';

@Controller('rank-course')
export class RankCourseController {
  constructor(private readonly rankCourseService: RankCourseService) {}

  @Post()
  create(@Body() createRankCourseDto: CreateRankCourseDto) {
    return this.rankCourseService.create(createRankCourseDto);
  }

  @Get()
  findAll() {
    return this.rankCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rankCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRankCourseDto: UpdateRankCourseDto) {
    return this.rankCourseService.update(+id, updateRankCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rankCourseService.remove(+id);
  }
}
