import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import Image from './Image'

@Entity('restaurants')
class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  about: string

  @Column({ default: 'pending' })
  status: 'pending' | 'approved'

  @Column('numeric', { precision: 2, scale: 10 })
  latitude: number

  @Column('numeric', { precision: 2, scale: 10 })
  longitude: number

  @Column()
  whatsapp_phone: string

  @Column()
  instructions: string

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Restaurant
