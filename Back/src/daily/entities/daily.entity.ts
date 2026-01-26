import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Daily {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('date')
    date

    @Column()
    habitPercentage

    @Column('enum')
    mood
}
