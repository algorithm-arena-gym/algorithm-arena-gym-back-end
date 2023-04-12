import { Module } from '@nestjs/common';
import { PcDateTimeService } from './pc-date-time.service';
import { PcDateTimeController } from './pc-date-time.controller';
import { PcDateTime } from './entities/pc-date-time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([PcDateTime])],
  controllers: [PcDateTimeController],
  providers: [PcDateTimeService],
})
export class PcDateTimeModule {}
