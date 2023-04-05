import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepeatConfig } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateTrainerMemberDto } from './dto/create-trainer-member.dto';
import { UpdateTrainerMemberDto } from './dto/update-trainer-member.dto';
import { TrainerMember } from './entities/trainer-member.entity';

@Injectable()
export class TrainerMemberService {
  constructor(
    @InjectRepository(TrainerMember)
    private trainerRepository: Repository<TrainerMember>,
  ) {}

  create(createTrainerMemberDto: CreateTrainerMemberDto) {
    return this.trainerRepository.query(`
    INSERT INTO trainer_member(

      trainerID,
      memberID,
      trainingDate,
      trainingTime
    )
    VALUES('${createTrainerMemberDto.trainerID}',
    '${createTrainerMemberDto.memberID}',
    '${createTrainerMemberDto.trainingDate}',
    '${createTrainerMemberDto.trainingTime}'

    )`);
  }

  findAll() {
    return this.trainerRepository.query(`select * from trainer_member`);
  }

  findOne(id: number) {
    return this.trainerRepository.query(
      `select * from trainer_member where trainerMemberID=${id}`,
    );
  }

  update(id: number, updateTrainerMemberDto: UpdateTrainerMemberDto) {
    return this.trainerRepository.query(`
    update trainer_member set

      trainerID=${updateTrainerMemberDto.trainerID},
      memberID=${updateTrainerMemberDto.memberID},
      trainingDate='${updateTrainerMemberDto.trainingDate}',
      trainingTime='${updateTrainerMemberDto.trainingTime}'
      WHERE trainerMemberID=${id}
    `);
  }

  remove(id: number) {
    return this.trainerRepository.query(
      `delete from trainer_member where trainerMemberID=${id}`,
    );
  }
}
