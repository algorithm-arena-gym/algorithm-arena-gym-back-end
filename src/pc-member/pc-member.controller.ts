import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcMemberService } from './pc-member.service';

@Controller('pc-member')
export class PcMemberController {
  constructor(private readonly pcMemberService: PcMemberService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcMemberService.findOne(+id);
  }

}
