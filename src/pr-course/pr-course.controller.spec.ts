import { Test, TestingModule } from '@nestjs/testing';
import { PrCourseController } from './pr-course.controller';
import { PrCourseService } from './pr-course.service';

describe('PrCourseController', () => {
  let controller: PrCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrCourseController],
      providers: [PrCourseService],
    }).compile();

    controller = module.get<PrCourseController>(PrCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
