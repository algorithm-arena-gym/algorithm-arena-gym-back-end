import { Injectable } from '@nestjs/common';
import { PcDateTime } from './entities/pc-date-time.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcDateTimeService {
  constructor(
    @InjectRepository(PcDateTime)
    private pcDateTimeRepository: Repository<PcDateTime>,
  ) {}
  findOne(id: number) {
    return this.pcDateTimeRepository.query(`SELECT * FROM course_date_time WHERE courseID=${id}`);
  }

}
