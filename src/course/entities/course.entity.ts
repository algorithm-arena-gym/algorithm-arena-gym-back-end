import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  courseID: number;

  @Column()
  courseName: string;

  @Column()
  price: number;

  @Column()
  detail: string;

  @CreateDateColumn()
  createAt: Date;
}
