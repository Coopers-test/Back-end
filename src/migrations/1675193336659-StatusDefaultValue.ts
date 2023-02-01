import { MigrationInterface, QueryRunner } from "typeorm";

export class StatusDefaultValue1675193336659 implements MigrationInterface {
    name = 'StatusDefaultValue1675193336659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "status" SET DEFAULT 'todo'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "status" DROP DEFAULT`);
    }

}
