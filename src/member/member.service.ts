import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  create(createMemberDto: CreateMemberDto) {
    return this.memberRepository.query(`
    INSERT INTO member(
      nameEng,
      nameTh,
      profilePic,
      phone,
      email,
      cID,
      drugAllergy,
      congenitalDisease,
      rankID,
      address,
      emergencyContact,
      point)
      VALUES('${createMemberDto.nameEng}',
      '${createMemberDto.nameTh}',
      '${createMemberDto.profilePic}',
      '${createMemberDto.phone}',
      '${createMemberDto.email}',
      '${createMemberDto.cID}',
      '${createMemberDto.drugAllergy}',
      '${createMemberDto.congenitalDisease}',
      ${createMemberDto.rankID},
      '${createMemberDto.address}',
      '${createMemberDto.emergencyContact}',
      ${createMemberDto.point}
      )`);
  }

   findAll() {
    return this.memberRepository.query(`
    SELECT *
FROM member
JOIN rank ON member.rankID = rank.rankID
JOIN trainer_member ON trainer_member.memberID = member.memberID
JOIN trainer ON trainer.trainerID = trainer_member.trainerID

  `);
  }

  findOne(id: number) {
    return this.memberRepository.query(
      `
      SELECT *
      FROM member
      JOIN rank ON member.rankID = rank.rankID
      JOIN trainer_member ON trainer_member.memberID = member.memberID
      JOIN trainer ON trainer.trainerID = trainer_member.trainerID
      JOIN course_member ON course_member.memberID=member.memberID
      JOIN course ON course.courseID=course_member.courseID
      where member.memberID =${id}
      `,
    )
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.memberRepository.query(
      `update member set
      nameEng = '${updateMemberDto.nameEng}',
      nameTh='${updateMemberDto.nameTh}',
      profilePic='${updateMemberDto.profilePic}',
      phone='${updateMemberDto.phone}',
      email='${updateMemberDto.email}',
      cID='${updateMemberDto.cID}',
      drugAllergy='${updateMemberDto.drugAllergy}',
      congenitalDisease='${updateMemberDto.congenitalDisease}',
      rankID=${updateMemberDto.rankID},
      address='${updateMemberDto.address}',
      emergencyContact='${updateMemberDto.emergencyContact}',
      point=${updateMemberDto.point}
      where memberID =${id}`,
    );
  }

  remove(id: number) {
    return this.memberRepository.query(
      `delete from member where memberID =${id}`,
    );
  }
}
