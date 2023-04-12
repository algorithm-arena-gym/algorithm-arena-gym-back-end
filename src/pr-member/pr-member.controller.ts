import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrMemberService } from './pr-member.service';
import { CreatePrMemberDto } from './dto/create-pr-member.dto';
import { UpdatePrMemberDto } from './dto/update-pr-member.dto';

@Controller('pr-member')
export class PrMemberController {
  constructor(private readonly prMemberService: PrMemberService) {}

  @Post()
  create(@Body() createPrMemberDto: CreatePrMemberDto) {
    return this.prMemberService.create(createPrMemberDto);
  }

  @Get()
  findAll() {
    return this.prMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrMemberDto: UpdatePrMemberDto) {
    return this.prMemberService.update(+id, updatePrMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prMemberService.remove(+id);
  }
}
