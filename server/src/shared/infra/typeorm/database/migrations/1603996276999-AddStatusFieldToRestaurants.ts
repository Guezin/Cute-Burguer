import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddStatusFieldToRestaurants1603996276999
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'restaurants',
      new TableColumn({
        name: 'status',
        type: 'enum',
        enum: ['pending', 'approvaded'],
        default: "'pending'"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('restaurants', 'status')
  }
}
