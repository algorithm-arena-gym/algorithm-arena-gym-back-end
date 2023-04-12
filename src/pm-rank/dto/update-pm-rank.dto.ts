import { PartialType } from '@nestjs/swagger';
import { CreatePmRankDto } from './create-pm-rank.dto';

export class UpdatePmRankDto extends PartialType(CreatePmRankDto) {}
