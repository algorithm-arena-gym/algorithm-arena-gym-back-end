import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PcMemberService } from './pc-member.service';
import { CreatePcMemberDto } from './dto/create-pc-member.dto';
import { UpdatePcMemberDto } from './dto/update-pc-member.dto';

@Controller('pc-member')
export class PcMemberController {
  constructor(private readonly pcMemberService: PcMemberService) {}

  @Post()
  create(@Body() createPcMemberDto: CreatePcMemberDto) {
    return this.pcMemberService.create(createPcMemberDto);
  }

  @Get()
  findAll() {
    return this.pcMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcMemberDto: UpdatePcMemberDto) {
    return this.pcMemberService.update(+id, updatePcMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcMemberService.remove(+id);
  }
}
