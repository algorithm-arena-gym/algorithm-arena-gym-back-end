import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity()
export class Trainer {
    @PrimaryGeneratedColumn()
    trainerID:number;

    @Column()
    nameEng:string;

    @Column()
    nameTh:string;

    @Column()
    profilePic:string;

    @Column()
    phone:string;

    @Column()
    email:string;

    @Column()
    cID:string;

    @Column()
    drugAllergy:string;

    @Column()
    congenitalDisease:string;

    @Column()
    address:string;

    @Column()
    emergencyContact:string;

    @CreateDateColumn()
    hireDate:Date;
}