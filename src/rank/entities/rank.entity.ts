import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Rank {
  @PrimaryGeneratedColumn()
  rankID: number;

  @Column()
  RankName: string;

  @Column()
  Detail: string;

  
}
