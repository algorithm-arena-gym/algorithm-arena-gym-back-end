import { PartialType } from '@nestjs/swagger';
import { CreatePmTrainerDto } from './create-pm-trainer.dto';

export class UpdatePmTrainerDto extends PartialType(CreatePmTrainerDto) {}
