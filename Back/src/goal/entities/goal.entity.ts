import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column({type: 'datetime'})
    finish_date

    @Column({type:'double'})
    goal_weight

    @Column({type: 'datetime'})
    date
}
