import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weight {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column('double')
    weight

    @Column('date')
    date
}
