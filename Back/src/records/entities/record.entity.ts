import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

export enum Selection {
    ENERO = '01',
    FEBRERO = '02',
    MARZO = '03',
    ABRIL ='04',
    MAYO = '05',
    JUNIO = '06',
    JULIO = '07',
    AGOSTO ='08',
    SEPTIEMBRE = '09',
    OCTUBRE = '10',
    NOVIEMBRE = '11',
    DICIEMBRE = '12',
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
