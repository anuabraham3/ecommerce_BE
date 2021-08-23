import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { ItemStatus } from "../itemStatus.enum";
import { Booking } from 'src/booking/entities/booking.entity';
import { Confectionery } from 'src/confectionery/entities/confectionery.entity';

@Entity()
export class Item extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    title:string;


    @Column()
    features:string;

    @Column()
    description:string;

    @Column()
    category:string;


    @Column({type:'jsonb',nullable:true})
    photos:any;

    @Column()
    cost:number;

    @Column()
    status: ItemStatus;

    @Column()
    count:number;

    @OneToMany(type => Booking, booking => booking.item)
    booking: Booking[];


    @ManyToOne(type => Confectionery, confectionery => confectionery.item)
    @JoinColumn()
    confectionery:Confectionery;

}