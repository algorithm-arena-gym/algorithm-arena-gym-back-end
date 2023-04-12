import { Injectable } from '@nestjs/common';
import { CreatePcDateTimeDto } from './dto/create-pc-date-time.dto';
import { UpdatePcDateTimeDto } from './dto/update-pc-date-time.dto';

@Injectable()
export class PcDateTimeService {
  create(createPcDateTimeDto: CreatePcDateTimeDto) {
    return 'This action adds a new pcDateTime';
  }

  findAll() {
    return `This action returns all pcDateTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pcDateTime`;
  }

  update(id: number, updatePcDateTimeDto: UpdatePcDateTimeDto) {
    return `This action updates a #${id} pcDateTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} pcDateTime`;
  }
}
