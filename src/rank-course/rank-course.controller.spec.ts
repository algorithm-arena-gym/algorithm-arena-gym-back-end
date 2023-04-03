import { Test, TestingModule } from '@nestjs/testing';
import { RankCourseController } from './rank-course.controller';
import { RankCourseService } from './rank-course.service';

describe('RankCourseController', () => {
  let controller: RankCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankCourseController],
      providers: [RankCourseService],
    }).compile();

    controller = module.get<RankCourseController>(RankCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
