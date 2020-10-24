import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAdresses1603482317432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adresses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },

          {
            name: 'street',
            type: 'varchar'
          },

          {
            name: 'number',
            type: 'int'
          },

          {
            name: 'neighborhood',
            type: 'varchar'
          },

          {
            name: 'city',
            type: 'varchar'
          },

          {
            name: 'state',
            type: 'varchar'
          },

          {
            name: 'zipcode',
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
            name: 'AddressRestaurant',
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
    await queryRunner.dropTable('adresses')
  }
}
