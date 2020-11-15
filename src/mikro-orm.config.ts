import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
  dbName: "readit",
  user: "postgres",
  password: "postgres",
  debug: !__prod__,
  type: "postgresql",
  entities: [Post],
} as Parameters<typeof MikroORM.init>[0];
