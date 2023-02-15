import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseMemberService } from './course-member.service';
import { CreateCourseMemberDto } from './dto/create-course-member.dto';
import { UpdateCourseMemberDto } from './dto/update-course-member.dto';

@Controller('course-member')
export class CourseMemberController {
  constructor(private readonly courseMemberService: CourseMemberService) {}

  @Post()
  create(@Body() createCourseMemberDto: CreateCourseMemberDto) {
    return this.courseMemberService.create(createCourseMemberDto);
  }

  @Get()
  findAll() {
    return this.courseMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseMemberDto: UpdateCourseMemberDto) {
    return this.courseMemberService.update(+id, updateCourseMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseMemberService.remove(+id);
  }
}
