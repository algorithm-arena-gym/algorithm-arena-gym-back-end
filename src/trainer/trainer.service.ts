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
      `select * from trainer where trainerID=${id}`,
    );
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    const queryParams = [];
    let query = "UPDATE trainer SET ";
    
    if (updateTrainerDto.nameEng !== undefined && updateTrainerDto.nameEng !== null) {
      query += "nameEng=?, ";
      queryParams.push(updateTrainerDto.nameEng);
    }
  
    if (updateTrainerDto.nameTh !== undefined && updateTrainerDto.nameTh !== null) {
      query += "nameTh=?, ";
      queryParams.push(updateTrainerDto.nameTh);
    }
  
    if (updateTrainerDto.profilePic !== undefined && updateTrainerDto.profilePic !== null) {
      query += "profilePic=?, ";
      queryParams.push(updateTrainerDto.profilePic);
    }
  
    if (updateTrainerDto.phone !== undefined && updateTrainerDto.phone !== null) {
      query += "phone=?, ";
      queryParams.push(updateTrainerDto.phone);
    }
  
    if (updateTrainerDto.email !== undefined && updateTrainerDto.email !== null) {
      query += "email=?, ";
      queryParams.push(updateTrainerDto.email);
    }
  
    if (updateTrainerDto.cID !== undefined && updateTrainerDto.cID !== null) {
      query += "cID=?, ";
      queryParams.push(updateTrainerDto.cID);
    }
  
    if (updateTrainerDto.drugAllergy !== undefined && updateTrainerDto.drugAllergy !== null) {
      query += "drugAllergy=?, ";
      queryParams.push(updateTrainerDto.drugAllergy);
    }
  
    if (updateTrainerDto.congenitalDisease !== undefined && updateTrainerDto.congenitalDisease !== null) {
      query += "congenitalDisease=?, ";
      queryParams.push(updateTrainerDto.congenitalDisease);
    }
  
    if (updateTrainerDto.address !== undefined && updateTrainerDto.address !== null) {
      query += "address=?, ";
      queryParams.push(updateTrainerDto.address);
    }
  
    if (updateTrainerDto.emergencyContact !== undefined && updateTrainerDto.emergencyContact !== null) {
      query += "emergencyContact=?, ";
      queryParams.push(updateTrainerDto.emergencyContact);
    }
  
    // Remove the trailing comma and space
    query = query.slice(0, -2);
    
    query += " WHERE trainerID=?";
    queryParams.push(id);
    
    console.log(query);
    console.log(queryParams);
    
    return this.trainerRepository.query(query, queryParams);
  }
  

  remove(id: number) {
    return this.trainerRepository.query(
      `delete from trainer where trainerID=${id}`,
    );
  }
}
