import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './member/member.module';
import { TrainerModule } from './trainer/trainer.module';
import { TrainerMemberModule } from './trainer-member/trainer-member.module';
import { CourseMemberModule } from './course-member/course-member.module';
import { CourseModule } from './course/course.module';
import { RankModule } from './rank/rank.module';
import { DataSource } from 'typeorm';
import { Member } from './member/entities/member.entity';
import { Trainer } from './trainer/entities/trainer.entity';
import { TrainerMember } from './trainer-member/entities/trainer-member.entity';
import { Course } from './course/entities/course.entity';
import { CourseMember } from './course-member/entities/course-member.entity';
import { Rank } from './rank/entities/rank.entity';
import { StatModule } from './stat/stat.module';
import { RankCourseModule } from './rank-course/rank-course.module';
import { RankCourse } from './rank-course/entities/rank-course.entity';
import { CourseDateTimeModule } from './course-date-time/course-date-time.module';
import { CourseDateTime } from './course-date-time/entities/course-date-time.entity';
import { PmRankModule } from './pm-rank/pm-rank.module';
import { PmTrainerModule } from './pm-trainer/pm-trainer.module';
import { PmCourseModule } from './pm-course/pm-course.module';
import { PtMemberModule } from './pt-member/pt-member.module';
import { PtCourseModule } from './pt-course/pt-course.module';
import { PcDateTimeModule } from './pc-date-time/pc-date-time.module';
import { PcMemberModule } from './pc-member/pc-member.module';
import { PcRankModule } from './pc-rank/pc-rank.module';
import { PrMemberModule } from './pr-member/pr-member.module';
import { PrCourseModule } from './pr-course/pr-course.module';



@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'admin',
      password: '1234',
      database: 'algorithm-arena-gym-db',
      entities: [Member, Trainer, TrainerMember,RankCourse, Course, CourseMember, Rank,CourseDateTime],
      synchronize: true,
    }),
    MemberModule,
    TrainerModule,
    TrainerMemberModule,
    CourseMemberModule,
    CourseModule,
    RankModule,
    StatModule,
    RankCourseModule,
    CourseDateTimeModule,
    MemberModule,
    PmRankModule,
    PmTrainerModule,
    PmCourseModule,
    PtMemberModule,
    PtCourseModule,
    PcDateTimeModule,
    PcMemberModule,
    PcRankModule,
    PrMemberModule,
    PrCourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
