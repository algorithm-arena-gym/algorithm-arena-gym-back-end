import { Injectable } from '@nestjs/common';
import { CreatePtMemberDto } from './dto/create-pt-member.dto';
import { UpdatePtMemberDto } from './dto/update-pt-member.dto';

@Injectable()
export class PtMemberService {
  create(createPtMemberDto: CreatePtMemberDto) {
    return 'This action adds a new ptMember';
  }

  findAll() {
    return `This action returns all ptMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ptMember`;
  }

  update(id: number, updatePtMemberDto: UpdatePtMemberDto) {
    return `This action updates a #${id} ptMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} ptMember`;
  }
}
