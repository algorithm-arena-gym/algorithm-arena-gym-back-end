import { Injectable } from '@nestjs/common';
import { CreatePmTrainerDto } from './dto/create-pm-trainer.dto';
import { UpdatePmTrainerDto } from './dto/update-pm-trainer.dto';

@Injectable()
export class PmTrainerService {
  create(createPmTrainerDto: CreatePmTrainerDto) {
    return 'This action adds a new pmTrainer';
  }

  findAll() {
    return `This action returns all pmTrainer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pmTrainer`;
  }

  update(id: number, updatePmTrainerDto: UpdatePmTrainerDto) {
    return `This action updates a #${id} pmTrainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} pmTrainer`;
  }
}
