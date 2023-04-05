import { PartialType } from '@nestjs/swagger';
import { CreateCourseDateTimeDto } from './create-course-date-time.dto';

export class UpdateCourseDateTimeDto extends PartialType(CreateCourseDateTimeDto) {}
