import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity{
    
    @PrimaryGeneratedColumn({
        comment: 'The question unique identifire',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    question: string;

}