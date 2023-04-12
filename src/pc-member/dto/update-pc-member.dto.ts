import { PartialType } from '@nestjs/swagger';
import { CreatePcMemberDto } from './create-pc-member.dto';

export class UpdatePcMemberDto extends PartialType(CreatePcMemberDto) {}
