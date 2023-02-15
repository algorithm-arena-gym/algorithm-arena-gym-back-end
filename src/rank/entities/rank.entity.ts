import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity()
export class Rank {
    @PrimaryGeneratedColumn()
    rankID:number;

    @Column()
    rankName:string;

    @Column()
    detail:string;

    @CreateDateColumn()
    createAt:Date;
}