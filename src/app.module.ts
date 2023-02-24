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

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Member, Trainer, TrainerMember, Course, CourseMember, Rank],
      synchronize: true,
    }),
    MemberModule,
    TrainerModule,
    TrainerMemberModule,
    CourseMemberModule,
    CourseModule,
    RankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
