import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weight {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'double'})
    weight

    @Column({type: 'date'})
    date_weight: Date

    @Column({type:'date'})
    date_goal: Date

    @Column({type: 'double'})
    goal_weight

    @Column({type:'boolean', default:false})
    done: boolean

    @Column({type: 'date'})
    created_at: Date

    @Column({type: 'int'})
    worked_days: number
}
