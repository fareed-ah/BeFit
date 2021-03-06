import 'reflect-metadata';
import { __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { WorkoutResolver } from "./resolvers/workout";
import { UserResolver } from './resolvers/user';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { Workout } from './entities/Workout';
import { ExerciseResolver } from './resolvers/exercise';
import { Exercise } from './entities/Exercise';

let RedisStore = connectRedis(session)
let redisClient = redis.createClient()

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'befit',
        username: 'fareedahmad',
        logging: true,
        synchronize: true,
        entities: [User, Workout, Exercise],
    });

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
            resolvers: [WorkoutResolver, UserResolver, ExerciseResolver],
            validate: false,
        }),
        context: ({req,res}) => ({req,res})
    })

    apolloServer.applyMiddleware({
        app });

    app.listen(4000, () => {
        console.log('server startedon localhost:4000');
    })
}

main().catch((err) => {
    console.log(err)
});
