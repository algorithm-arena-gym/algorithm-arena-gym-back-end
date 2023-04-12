import { PartialType } from '@nestjs/swagger';
import { CreatePcRankDto } from './create-pc-rank.dto';

export class UpdatePcRankDto extends PartialType(CreatePcRankDto) {}
