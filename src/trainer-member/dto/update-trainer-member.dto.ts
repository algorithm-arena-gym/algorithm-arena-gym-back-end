import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainerMemberDto } from './create-trainer-member.dto';

export class UpdateTrainerMemberDto extends PartialType(
  CreateTrainerMemberDto,
) {}
