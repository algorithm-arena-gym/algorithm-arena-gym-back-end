import { PartialType } from '@nestjs/swagger';
import { CreatePrCourseDto } from './create-pr-course.dto';

export class UpdatePrCourseDto extends PartialType(CreatePrCourseDto) {}
