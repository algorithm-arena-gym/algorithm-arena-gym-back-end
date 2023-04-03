import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Rank {
  @PrimaryGeneratedColumn()
  rankID: number;

  @Column()
  rankPic: string;

  @Column()
  rankName: string;

  @Column()
  rankDetail: string;

  @CreateDateColumn()
  createAt: Date;
}
