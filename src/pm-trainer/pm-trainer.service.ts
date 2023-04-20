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
    ORDER BY
     CASE
          WHEN trainingDate = 'Sunday' THEN 1
          WHEN trainingDate = 'Monday' THEN 2
          WHEN trainingDate = 'Tuesday' THEN 3
          WHEN trainingDate = 'Wednesday' THEN 4
          WHEN trainingDate = 'Thursday' THEN 5
          WHEN trainingDate = 'Friday' THEN 6
          WHEN trainingDate = 'Saturday' THEN 7
     END ASC,trainingTime
    `);
  }
}