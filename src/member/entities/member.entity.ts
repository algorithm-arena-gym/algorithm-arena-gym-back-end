import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    memberID:number;

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
    rankID:number;

    @Column()
    adress:string;

    @Column()
    emergencyContact:string;

    @Column()
    point:number;

    @CreateDateColumn()
    subscriptionDate:Date;
}