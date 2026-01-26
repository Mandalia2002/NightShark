import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Day {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column('boolean')
    exercise: false;
}
