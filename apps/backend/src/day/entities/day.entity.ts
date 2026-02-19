import { Habit } from "../../habit/entities/habit.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class Day {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'boolean', default: false })
    exercise

    @Column({ type: 'boolean', default: false })
    dailies

    @Column({ type: 'boolean', default: false })
    food

    @Column({ type: 'boolean', default: false })
    work

    @Column({ type: 'boolean', default: false })
    water

    @Column({ type: 'boolean', default: false })
    study

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'numeric', precision:5,scale:2,default:0.00 })
    percentage

}
