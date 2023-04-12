import { PartialType } from '@nestjs/swagger';
import { CreatePtCourseDto } from './create-pt-course.dto';

export class UpdatePtCourseDto extends PartialType(CreatePtCourseDto) {}
