import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1603224925111 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },

          {
            name: 'provider',
            type: 'boolean',
            default: false
          },

          {
            name: 'name',
            type: 'varchar'
          },

          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },

          {
            name: 'password',
            type: 'varchar'
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

    await queryRunner.query(
      "INSERT INTO users (provider, name, email, password) VALUES (true, 'Administrador', 'admin@admin.com', 'admin')"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
