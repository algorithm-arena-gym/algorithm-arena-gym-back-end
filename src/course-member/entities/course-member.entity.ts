import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class CourseMember {
  @PrimaryGeneratedColumn()
  courseMemberID: number;

  @Column()
  courseID: number;

  @Column()
  memberID: number;

  @CreateDateColumn()
  createAt: Date;
}
