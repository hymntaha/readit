import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "readit",
    user: "postgres",
    password: "postgres",
    debug: !__prod__,
    type: "postgresql",
    entities: [Post],
  });

  const post = orm.em.create(Post, {
    title: "First post",
  });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert;
};

main().catch((err) => console.error(err));
