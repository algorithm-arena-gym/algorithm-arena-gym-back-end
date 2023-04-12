import { Module } from '@nestjs/common';
import { PmTrainerService } from './pm-trainer.service';
import { PmTrainerController } from './pm-trainer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PmTrainer } from './entities/pm-trainer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PmTrainer])],
  controllers: [PmTrainerController],
  providers: [PmTrainerService]
})
export class PmTrainerModule {}
