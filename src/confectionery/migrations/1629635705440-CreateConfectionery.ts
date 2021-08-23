import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConfectionery1629635705440 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: 'confectionery',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'address',
                type: 'varchar',
              },
              {
                name: 'ownerID',
                type: 'bigint',  
                isNullable: true
              },
              {
                name:'panchayath',
                type:'varchar',
                isNullable: true
              },
              {
                name:'longitude',
                type:'varchar',
              },
              {
                name:'latitude',
                type:'varchar',
              },
              {
                name: 'status',
                type: 'varchar',
                default: '\'ACTIVE\'',
              },
              {
                name: 'starCategory',
                type: 'bigint',
                isNullable:true,
              },
              {
                  name: 'confectioneries',
                  type: 'varchar',
                  isNullable:true,
              },
              {
      
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
                isNullable: false,
              },
              {
                name:'district',
                type:'varchar',
              },
              {
                name:'contact',
                type:'varchar',
              },
              {
                name:'policy',
                type:'varchar',
              },
              {
                  name: 'photos',
                  type: 'jsonb',
                  isNullable: true
              },
              
              {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
                isNullable: false,
              },
            ],
          }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "confectionery"`);
    }

}
