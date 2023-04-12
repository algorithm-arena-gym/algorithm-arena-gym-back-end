import { PartialType } from '@nestjs/swagger';
import { CreatePrMemberDto } from './create-pr-member.dto';

export class UpdatePrMemberDto extends PartialType(CreatePrMemberDto) {}
