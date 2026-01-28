import { Daily } from "src/daily/entities/daily.entity";
import { Day } from "src/day/entities/day.entity";
import { Morning } from "src/morning/entities/morning.entity";
import { Night } from "src/night/entities/night.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

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

    @Column({type: 'double'})
    percentage

    @Column({ type: 'datetime' })
    date
}
