import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PtMemberService } from './pt-member.service';

@Controller('pt-member')
export class PtMemberController {
  constructor(private readonly ptMemberService: PtMemberService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ptMemberService.findOne(+id);
  }
}
