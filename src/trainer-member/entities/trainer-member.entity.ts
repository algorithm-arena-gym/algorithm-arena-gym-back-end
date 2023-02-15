import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity()
export class TrainerMember {
    @PrimaryGeneratedColumn()
    trainerMemberID:number;

    @Column()
    trainerID:number;

    @Column()
    memberID:number;

    @Column()
    trainingDate:string;

    @Column()
    trainingTime:string;

    @CreateDateColumn()
    createAt:Date;
}