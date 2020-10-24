import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import Restaurant from './Restaurant'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  path: string

  @ManyToOne(() => Restaurant, restaurant => restaurant.images)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Image
