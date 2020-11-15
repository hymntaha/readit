import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, {
    title: "First post",
  });

  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert;
};

main().catch((err) => console.error(err));
