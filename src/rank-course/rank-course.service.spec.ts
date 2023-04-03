import { Test, TestingModule } from '@nestjs/testing';
import { RankCourseService } from './rank-course.service';

describe('RankCourseService', () => {
  let service: RankCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RankCourseService],
    }).compile();

    service = module.get<RankCourseService>(RankCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
