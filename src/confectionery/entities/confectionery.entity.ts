import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm';
import { Item } from 'src/item/entities/item.entity';

@Entity('confectionery')

export class Confectionery extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ownerID: number;

    @Column({ length:128 })
    name: string;

    @Column({ length:128 })
    address: string;

    @Column({ length:128 })
    panchayath:string;

    @Column({ length:128 })
    district:string;

    @Column()
    starCategory: number;


    @Column()
    latitude:string;

    @Column()
    longitude:string;

    @Column({ length:128 })
    confectioneries: string;

    @Column({ length:11})
    contact:string;

    @Column()
    policy:string;

    @Column({type:'jsonb',nullable:true})
    photos:any;

    @Column()
    status:string;

    @OneToMany(type => Item, item => item.confectionery)
    item: Item[];


}

