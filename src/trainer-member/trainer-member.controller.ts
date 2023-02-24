import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainerMemberService } from './trainer-member.service';
import { CreateTrainerMemberDto } from './dto/create-trainer-member.dto';
import { UpdateTrainerMemberDto } from './dto/update-trainer-member.dto';

@Controller('trainer-member')
export class TrainerMemberController {
  constructor(private readonly trainerMemberService: TrainerMemberService) {}

  @Post()
  create(@Body() createTrainerMemberDto: CreateTrainerMemberDto) {
    return this.trainerMemberService.create(createTrainerMemberDto);
  }

  @Get()
  findAll() {
    return this.trainerMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainerMemberService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainerMemberDto: UpdateTrainerMemberDto,
  ) {
    return this.trainerMemberService.update(+id, updateTrainerMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainerMemberService.remove(+id);
  }
}
