import { __prod__ } from "./constants";
import { Workout } from "./entities/Workout";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';
import { User } from "./entities/User";

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/, 
    },
    entities: [Workout, User],
    dbName: 'befit',
    type: 'postgresql',
    user: "fareedahmad",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];