import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateRestaurants1603482285960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },

          {
            name: 'name',
            type: 'varchar'
          },

          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'approved'],
            default: "'pending'"
          },

          {
            name: 'about',
            type: 'varchar'
          },

          {
            name: 'instructions',
            type: 'varchar'
          },

          {
            name: 'whatsapp_phone',
            type: 'varchar'
          },

          {
            name: 'latitude',
            type: 'numeric'
          },

          {
            name: 'longitude',
            type: 'numeric'
          },

          {
            name: 'opening_hours',
            type: 'varchar'
          },

          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('restaurants')
  }
}
