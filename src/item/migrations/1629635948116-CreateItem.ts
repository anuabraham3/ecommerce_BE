import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateItem1629635948116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: 'item',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'confectionaryId',
                type: 'bigint',
              },
              {
                name: 'title',
                type: 'varchar',
              },
              {
                name:'features',
                type:'varchar',
              },
              {
                name:'description',
                type:'varchar',
              },
              {
                name:'category',
                type:'varchar',
              },
              {
                name: 'photos',
                type: 'jsonb',
                isNullable: true,
              },
              {
                name: 'count',
                type: 'bigint',
                isNullable: false,
              },
              {
                name: 'cost',
                type: 'bigint',
                isNullable: false,
              },
              {
                name: 'status',
                type: 'varchar',
                default: '\'AVAILABLE\'',
              },
              
            ],
          }), true);
}

public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "item"`);
}

}
