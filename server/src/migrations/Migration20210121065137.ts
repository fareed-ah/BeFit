import { Migration } from '@mikro-orm/migrations';

export class Migration20210121065137 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "workout" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "workout_name" text not null);');
  }

}
