import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateImages1603482309590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },

          {
            name: 'path',
            type: 'varchar'
          },

          {
            name: 'restaurant_id',
            type: 'uuid',
            isNullable: true
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
        ],
        foreignKeys: [
          {
            name: 'ImagesRestaurant',
            columnNames: ['restaurant_id'],
            referencedTableName: 'restaurants',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}
