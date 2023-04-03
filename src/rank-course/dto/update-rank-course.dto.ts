import { PartialType } from '@nestjs/swagger';
import { CreateRankCourseDto } from './create-rank-course.dto';

export class UpdateRankCourseDto extends PartialType(CreateRankCourseDto) {}
