import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PmTrainer } from './entities/pm-trainer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PmTrainerService {
  constructor(
    @InjectRepository(PmTrainer)
    private pmTrainerRepository:Repository<PmTrainer>,
  ){}
  findOne(id: number) {
    return this.pmTrainerRepository.query(`
    SELECT *
    FROM member
    JOIN trainer_member
    JOIN trainer
    ON trainer.trainerID=trainer_member.trainerID
    ON member.memberID=trainer_member.memberID
    WHERE member.memberID=${id}
    `);
  }
}