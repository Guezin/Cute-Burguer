import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
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

  @Column({ default: 'pending' })
  status: 'pending' | 'approved'

  @Column('numeric', { precision: 2, scale: 10 })
  latitude: number

  @Column('numeric', { precision: 2, scale: 10 })
  longitude: number

  @Column()
  opening_hours: string

  @Column()
  open_on_weekends: boolean

  @OneToMany(() => Image, image => image.restaurant, {
    cascade: ['insert', 'update'],
    eager: true
  })
  @JoinColumn({ name: 'restaurant_id' })
  images: Image[]

  @Column()
  address_id: string

  @OneToOne(() => Address, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Restaurant
