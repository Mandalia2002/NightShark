import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Habit {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column()
    morning_percentage

    @Column()
    day_percentage

    @Column()
    night_percentage

    @Column()
    morning_habit

    @Column()
    day_habit

    @Column()
    night_habit

    @Column()
    percentage

    @Column()
    date
}
