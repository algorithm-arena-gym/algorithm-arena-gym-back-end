import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PtMemberService } from './pt-member.service';
import { CreatePtMemberDto } from './dto/create-pt-member.dto';
import { UpdatePtMemberDto } from './dto/update-pt-member.dto';

@Controller('pt-member')
export class PtMemberController {
  constructor(private readonly ptMemberService: PtMemberService) {}

  @Post()
  create(@Body() createPtMemberDto: CreatePtMemberDto) {
    return this.ptMemberService.create(createPtMemberDto);
  }

  @Get()
  findAll() {
    return this.ptMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ptMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePtMemberDto: UpdatePtMemberDto) {
    return this.ptMemberService.update(+id, updatePtMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ptMemberService.remove(+id);
  }
}
