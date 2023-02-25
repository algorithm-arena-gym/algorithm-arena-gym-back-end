import { Injectable } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  create(createTrainerDto: CreateTrainerDto) {
    return this.trainerRepository.query(`
    INSERT INTO trainer(
      nameEng,
      nameTh,
      profilePic,
      phone,
      email,
      cID,
      drugAllergy,
      congenitalDisease,
      address,
      emergencyContact
      )
      VALUES('${createTrainerDto.nameEng}',
      '${createTrainerDto.nameTh}',
      '${createTrainerDto.profilePic}',
      '${createTrainerDto.phone}',
      '${createTrainerDto.email}',
      '${createTrainerDto.cID}',
      '${createTrainerDto.drugAllergy}',
      '${createTrainerDto.congenitalDisease}',
      '${createTrainerDto.address}',
      '${createTrainerDto.emergencyContact}'
      )`);
  }

  findAll() {
    return this.trainerRepository.query(`select * from trainer`);
  }

  findOne(id: number) {
    return this.trainerRepository.query(
      `select * from trainer where trainerID=${id}`);
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return this.trainerRepository.query(`
    update trainer set
      nameEng='${updateTrainerDto.nameEng}',
      nameTh='${updateTrainerDto.nameTh}',
      profilePic='${updateTrainerDto.profilePic}',
      phone='${updateTrainerDto.phone}',
      email='${updateTrainerDto.email}',
      cID='${updateTrainerDto.cID}',
      drugAllergy='${updateTrainerDto.drugAllergy}',
      congenitalDisease='${updateTrainerDto.congenitalDisease}',
      address='${updateTrainerDto.address}',
      emergencyContact='${updateTrainerDto.emergencyContact}'
      where trainerID =${id}
      `);
  }

  remove(id: number) {
    return this.trainerRepository.query(
      `delete from trainer where trainerID=${id}`,
    );
  }
}
