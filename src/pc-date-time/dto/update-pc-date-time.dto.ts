import { PartialType } from '@nestjs/swagger';
import { CreatePcDateTimeDto } from './create-pc-date-time.dto';

export class UpdatePcDateTimeDto extends PartialType(CreatePcDateTimeDto) {}
