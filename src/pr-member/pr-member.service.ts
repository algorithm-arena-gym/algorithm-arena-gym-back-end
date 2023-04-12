import { Injectable } from '@nestjs/common';
import { CreatePrMemberDto } from './dto/create-pr-member.dto';
import { UpdatePrMemberDto } from './dto/update-pr-member.dto';

@Injectable()
export class PrMemberService {
  create(createPrMemberDto: CreatePrMemberDto) {
    return 'This action adds a new prMember';
  }

  findAll() {
    return `This action returns all prMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prMember`;
  }

  update(id: number, updatePrMemberDto: UpdatePrMemberDto) {
    return `This action updates a #${id} prMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} prMember`;
  }
}
