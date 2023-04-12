import { PartialType } from '@nestjs/swagger';
import { CreatePtMemberDto } from './create-pt-member.dto';

export class UpdatePtMemberDto extends PartialType(CreatePtMemberDto) {}
