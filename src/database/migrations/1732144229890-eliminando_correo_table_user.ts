import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreoTableUser1732144229890 implements MigrationInterface {
    name = 'EliminandoCorreoTableUser1732144229890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
