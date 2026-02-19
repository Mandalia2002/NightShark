import { Habit } from "../../habit/entities/habit.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

export enum Mood {
    VACIO = 'vacio',
    FELIZ = 'feliz',
    ESTRESANTE = 'estresante',
    EMOCIONANTE ='emocionante',
    ABURRIDO = 'aburrido',
    TRANQUILO = 'tranquilo',
    TRISTE = 'triste'
}

@Entity()
export class Daily {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'date', nullable: false})
    date: Date

    @OneToOne(()=> Habit, ha => ha.daily, {eager: true})
    @JoinColumn({name: 'habit_id'})
    habit: Habit

    @Column({type: 'simple-enum', enum: Mood, default: Mood.VACIO})
    mood
}
