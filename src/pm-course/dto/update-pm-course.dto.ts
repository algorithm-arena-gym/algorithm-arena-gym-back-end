import { PartialType } from '@nestjs/swagger';
import { CreatePmCourseDto } from './create-pm-course.dto';

export class UpdatePmCourseDto extends PartialType(CreatePmCourseDto) {}
