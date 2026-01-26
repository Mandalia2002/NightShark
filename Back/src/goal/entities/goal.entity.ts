import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column('date')
    finish_date

    @Column('double')
    goal_weight

    @Column('date')
    date
}
