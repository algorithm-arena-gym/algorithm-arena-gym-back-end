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
    const queryParams = [];
    let query = "UPDATE member SET";

    if (updateMemberDto.nameEng!== undefined && updateMemberDto.nameEng !== null) {
      query += " nameEng=?,";
      queryParams.push(updateMemberDto.nameEng);
    }

    if (updateMemberDto.nameTh !== undefined && updateMemberDto.nameTh !== null) {
      query += " nameTh=?,";
      queryParams.push(updateMemberDto.nameTh);
    }

    if (updateMemberDto.profilePic !== undefined && updateMemberDto.profilePic !== null) {
      query += " profilePic=?,";
      queryParams.push(updateMemberDto.profilePic);
    }

    if (updateMemberDto.phone !== undefined && updateMemberDto.phone !== null) {
      query += " phone=?,";
      queryParams.push(updateMemberDto.phone);
    }
    if (updateMemberDto.email !== undefined && updateMemberDto.email !== null) {
      query += " email=?,";
      queryParams.push(updateMemberDto.email);
    }

    if (updateMemberDto.cID !== undefined && updateMemberDto.cID !== null) {
      query += " cID=?,";
      queryParams.push(updateMemberDto.cID);
    }

    if (updateMemberDto.drugAllergy !== undefined && updateMemberDto.drugAllergy!== null) {
      query += " drugAllergy=?,";
      queryParams.push(updateMemberDto.drugAllergy);
    }
    if (updateMemberDto.congenitalDisease !== undefined && updateMemberDto.congenitalDisease !== null) {
      query += " congenitalDisease=?,";
      queryParams.push(updateMemberDto.congenitalDisease);
    }

    if (updateMemberDto.rankID !== undefined && updateMemberDto.rankID !== null) {
      query += " rankID=?,";
      queryParams.push(updateMemberDto.rankID);
    }

    if (updateMemberDto.address !== undefined && updateMemberDto.address !== null) {
      query += " address=?,";
      queryParams.push(updateMemberDto.address);
    }
    if (updateMemberDto.emergencyContact!== undefined && updateMemberDto.emergencyContact !== null) {
      query += " emergencyContact=?,";
      queryParams.push(updateMemberDto.emergencyContact);
    }

    if (updateMemberDto.point !== undefined && updateMemberDto.point !== null) {
      query += " point=?,";
      queryParams.push(updateMemberDto.point);
    }

  
    // Remove the trailing comma
    query = query.slice(0, -1);

    query += " WHERE memberID=?";
    queryParams.push(id);
    console.log(query)
    console.log(queryParams)
    return this.memberRepository.query(query, queryParams);
}

  remove(id: number) {
    return this.memberRepository.query(
      `delete from member where memberID =${id}`,
    );
  }
}
