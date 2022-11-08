import { text } from 'stream/consumers';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizes')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique identifire',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({ 
        default: true,
    })
    isActive: boolean;

}