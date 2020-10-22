import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import Restaurant from './Restaurant'

@Entity('adresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  street: string

  @Column()
  number: number

  @Column()
  neighborhood: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  zipcode: string

  @OneToOne(() => Restaurant, restaurant => restaurant.address)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Address
