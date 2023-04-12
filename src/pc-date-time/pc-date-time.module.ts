import { Module } from '@nestjs/common';
import { PcDateTimeService } from './pc-date-time.service';
import { PcDateTimeController } from './pc-date-time.controller';

@Module({
  controllers: [PcDateTimeController],
  providers: [PcDateTimeService]
})
export class PcDateTimeModule {}
