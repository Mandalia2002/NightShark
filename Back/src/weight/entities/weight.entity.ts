import { Goal } from "src/goal/entities/goal.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Weight {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'double'})
    weight

    @Column({type: 'datetime'})
    date

    @OneToOne(()=>Goal, go=>go.id)
    @JoinColumn({name: 'goal'})
    goal
}
