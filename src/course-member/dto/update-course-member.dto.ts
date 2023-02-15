import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseMemberDto } from './create-course-member.dto';

export class UpdateCourseMemberDto extends PartialType(CreateCourseMemberDto) {}
