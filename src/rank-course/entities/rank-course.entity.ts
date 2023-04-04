import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RankCourse {
    @PrimaryGeneratedColumn()
    rankCourseID: number;

    @Column()
    rankID: number;

    @Column()
    courseID: number;

}
