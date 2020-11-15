import { Migration } from '@mikro-orm/migrations';

export class Migration20201115224658 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" jsonb not null, "updated_at" timestamptz(0) not null, "title" text not null);');
  }

}
