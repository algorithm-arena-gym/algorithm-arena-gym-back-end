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
    return this.trainerRepository.query(`
    SELECT
      *
      FROM
      trainer_member
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

  findOne(id: number) {
    return this.trainerRepository.query(`
      SELECT
      *
      FROM
      trainer_member
      WHERE trainerMemberID=${id}
      `,
    );
  }

  update(id: number, updateTrainerMemberDto: UpdateTrainerMemberDto) {
    const queryParams = [];
    let query = "update trainer_member set";

    if (updateTrainerMemberDto.trainerID !== undefined && updateTrainerMemberDto.trainerID !== null) {
      query += " trainerID=?,";
      queryParams.push(updateTrainerMemberDto.trainerID);
    }

    if (updateTrainerMemberDto.memberID !== undefined && updateTrainerMemberDto.memberID !== null) {
      query += " memberID=?,";
      queryParams.push(updateTrainerMemberDto.memberID);
    }

    if (updateTrainerMemberDto.trainingDate !== undefined && updateTrainerMemberDto.trainingDate !== null) {
      query += " trainingDate=?,";
      queryParams.push(updateTrainerMemberDto.trainingDate);
    }

    if (updateTrainerMemberDto.trainingTime !== undefined && updateTrainerMemberDto.trainingTime !== null) {
      query += " trainingTime=?,";
      queryParams.push(updateTrainerMemberDto.trainingTime);
    }

    // Remove the trailing comma
    query = query.slice(0, -1);

    query += " where trainerMemberID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.trainerRepository.query(query, queryParams);
}


  remove(id: number) {
    return this.trainerRepository.query(
      `delete from trainer_member where trainerMemberID=${id}`,
    );
  }
}
