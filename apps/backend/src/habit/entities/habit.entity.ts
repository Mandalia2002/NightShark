import { Daily } from "../../daily/entities/daily.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class Habit {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column({type: 'json'})
    morning_habit

    @Column({type: 'json'})
    day_habit

    @Column({type: 'json'})
    night_habit

    @OneToOne(()=> Daily, da=>da.habit)
    daily: Daily

    @Column({type: 'numeric', precision:5,scale:2})
    percentage

    @Column({ type: 'date' })
    date: Date
}
