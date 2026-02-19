import { Habit } from "../../habit/entities/habit.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class Night {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'boolean', default: false })
    cleanDesk

    @Column({ type: 'boolean', default: false })
    skinNigh

    @Column({ type: 'boolean', default: false })
    teethNigh

    @Column({ type: 'boolean', default: false })
    hair

    @Column({ type: 'boolean', default: false })
    read

    @Column({ type: 'boolean', default: false })
    prepare

    @Column({ type: 'boolean', default: false })
    clothes

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'double', default: 0.00 })
    percentage

}
