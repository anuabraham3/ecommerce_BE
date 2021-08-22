import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooking1629618969078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.createTable(new Table({
            name: 'bookings',
            columns: [
                {
                    name: 'book_id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

                {
                    name: 'deliveryDate',
                    type: 'varchar',
                },

                {
                    name: 'deliveryAdd',
                    type: 'varchar',
                },

                {

                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                  },

                  {
          
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                  },

                  {
                    name: 'userId',
                    type: 'bigint',

                  },

                  {
                    name: 'itemId',
                    type: 'bigint',

                  },

                  {
                    name: 'DeliveryStatus',
                    type: 'varchar',
                    default: '\'BOOKED\'',
                    

                  },


                  {
                    name: 'paymentDetail',
                    type: 'varchar',
                },
                {
                    name: 'payStatus',
                    type: 'varchar',
                },


            ],

        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "bookings"`);
    }

}
