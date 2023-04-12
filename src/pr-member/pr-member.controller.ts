import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrMemberService } from './pr-member.service';


@Controller('pr-member')
export class PrMemberController {
  constructor(private readonly prMemberService: PrMemberService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prMemberService.findOne(+id);
  }
}
