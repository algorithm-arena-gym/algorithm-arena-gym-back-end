import { Injectable } from '@nestjs/common';
import { CreateTrainerMemberDto } from './dto/create-trainer-member.dto';
import { UpdateTrainerMemberDto } from './dto/update-trainer-member.dto';

@Injectable()
export class TrainerMemberService {
  create(createTrainerMemberDto: CreateTrainerMemberDto) {
    return 'This action adds a new trainerMember';
  }

  findAll() {
    return `This action returns all trainerMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainerMember`;
  }

  update(id: number, updateTrainerMemberDto: UpdateTrainerMemberDto) {
    return `This action updates a #${id} trainerMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainerMember`;
  }
}
