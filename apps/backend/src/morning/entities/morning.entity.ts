import { Habit } from "src/habit/entities/habit.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class Morning {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'boolean', default: false })
    wakeUp

    @Column({ type: 'boolean', default: false })
    bed

    @Column({ type: 'boolean', default: false })
    clean

    @Column({ type: 'boolean', default: false })
    teethMorn

    @Column({ type: 'boolean', default: false })
    skinMorn

    @Column({ type: 'boolean', default: false })
    body

    @Column({type: 'date'})
    date: Date

    @Column({type: 'double', default:0})
    percentage

}
