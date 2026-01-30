import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

export enum Selection {
    ENERO = 'enero',
    FEBRERO = 'febrero',
    MARZO = 'marzo',
    ABRIL ='abril',
    MAYO = 'mayo',
    JUNIO = 'junio',
    JULIO = 'julio',
    AGOSTO ='agosto',
    SEPTIEMBRE = 'septiembre',
    OCTUBRE = 'octubre',
    NOVIEMBRE = 'noviembre',
    DICIEMBRE = 'diciembre',
    AÑO = 'año',
    NULL= 'null'
}

@Entity()
export class Record {
    @PrimaryGeneratedColumn('uuid')
    id

    @Column({type:'json'})
    percentages

    @Column({type: 'json'})
    habits_improve

    @Column({type:'json'})
    mood_statistics

    @Column({type:'enum', enum: Selection,default: Selection.NULL})
    date_month

    @Column({type: 'int'})
    year:number
}
