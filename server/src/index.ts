import 'reflect-metadata';
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { WorkoutResolver } from "./resolvers/workout";
import { UserResolver } from './resolvers/user';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types';

let RedisStore = connectRedis(session)
let redisClient = redis.createClient()

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const app = express();


    app.use(
        session({
            name:"qid",
            store: new RedisStore({
                client: redisClient,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years 
                httpOnly: true,
                sameSite: 'lax', // csrf
                secure: __prod__, // only https in prod
            },
            saveUninitialized: false,
            secret: 'jfefjiejfwipfjiejfipejwfpwjpifj',
            resave: false,
        })
    )
        
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [WorkoutResolver, UserResolver],
            validate: false,
        }),
        context: ({req,res}): MyContext => ({em: orm.em, req,res})
    })

    apolloServer.applyMiddleware({
        app });

    app.get('/', (_, res) => {
        res.send("BeFit Homepage");
    })

    app.listen(4000, () => {
        console.log('server startedon localhost:4000');
    })
}

main().catch((err) => {
    console.log(err)
});
