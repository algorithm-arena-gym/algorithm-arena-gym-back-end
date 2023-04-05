import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class CourseDateTime {
    @PrimaryGeneratedColumn()
    courseDateTimeID:number;

    @Column()
    courseID:number;

    @Column()
    courseDate:string;

    @Column()
    courseTime:string;
}