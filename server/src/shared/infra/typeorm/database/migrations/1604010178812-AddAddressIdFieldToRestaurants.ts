import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export class AddAddressIdFieldToRestaurants1604010178812
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'restaurants',
      new TableColumn({
        name: 'address_id',
        type: 'uuid'
      })
    )
    await queryRunner.createForeignKey(
      'restaurants',
      new TableForeignKey({
        name: 'RestaurantAddress',
        columnNames: ['address_id'],
        referencedTableName: 'adresses',
        referencedColumnNames: ['id']
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('restaurants', 'RestaurantAddress')
    await queryRunner.dropColumn('restaurants', 'address_id')
  }
}
