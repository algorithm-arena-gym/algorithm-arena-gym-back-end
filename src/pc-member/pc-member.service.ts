import { Injectable } from '@nestjs/common';
import { CreatePcMemberDto } from './dto/create-pc-member.dto';
import { UpdatePcMemberDto } from './dto/update-pc-member.dto';

@Injectable()
export class PcMemberService {
  create(createPcMemberDto: CreatePcMemberDto) {
    return 'This action adds a new pcMember';
  }

  findAll() {
    return `This action returns all pcMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pcMember`;
  }

  update(id: number, updatePcMemberDto: UpdatePcMemberDto) {
    return `This action updates a #${id} pcMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} pcMember`;
  }
}
