import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "readit",
    user: "postgres",
    password: "postgres",
    debug: !__prod__,
    type: "postgresql",
    entities: [],
  });
};

main();
