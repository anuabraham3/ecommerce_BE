import { User } from "src/user/entities/user.entity";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToOne,  JoinColumn, BaseEntity, Entity, OneToMany } from "typeorm";
import { Item } from '../../item/entities/item.entity';

@Entity('bookings')
export class Booking extends BaseEntity {
    

    @PrimaryGeneratedColumn()
    book_id:number;

    @Column({ length: 128 })
    deliveryStatus: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;


    @ManyToOne(type => User, user => user.booking)
    @JoinColumn({name:'userId'})
    user: User;

    @ManyToOne(type => Item, item => item.booking)
    @JoinColumn({name:'itemId'})
    item: Item;
    
    @Column()
    deliveryDate: Date;

    @Column({ length: 128 })
    deliveryAdd: string;


    @Column({ length: 128 })
    paymentDetail: string;

    @Column({ length: 128 })
    payStatus: string;



}
