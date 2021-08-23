import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    ManyToOne,
    JoinColumn,
    OneToMany
  } from 'typeorm';
  
  import {Booking} from "../../booking/entities/booking.entity";
  
  
  @Entity('users')
  @Unique(['email'])
  export class User {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 128 })
    name: string;
  
    @Column({ length: 128 })
    email: string;
  
    @Column({ length: 128 })
    password: string;
  
    @Column({ length:128 })
    type: string;
  
    @Column({ length: 128 })
    status: string;
  
    @Column({nullable: true})
    resetToken: string;
  
    @Column({ nullable: true })
    lastLogin: Date;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @CreateDateColumn()
    updatedAt: Date;
  
    @OneToMany(type => Booking, booking => booking.user)
    booking: Booking[];
  

  
  }