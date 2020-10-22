import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import Image from './Image'
import Address from './Address'

@Entity('restaurants')
class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('numeric', { precision: 2, scale: 10 })
  latitude: number

  @Column('numeric', { precision: 2, scale: 10 })
  longitude: number

  @Column()
  opening_hours: string

  @Column()
  open_on_weekends: boolean

  @OneToOne(() => Image, image => image.restaurant, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'restaurant_id' })
  images: Image[]

  @OneToOne(() => Address, address => address.restaurant, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'restaurant_id' })
  address: Address

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Restaurant
