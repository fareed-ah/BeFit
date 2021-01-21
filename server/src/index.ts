import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Workout } from "./entities/Workout";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    // const workout = orm.em.create(Workout, { workoutName: 'my first workout' });
    // await orm.em.persistAndFlush(workout);
    // const workouts = await orm.em.find(Workout, {});
    // console.log(workouts);
}

main().catch((err) => {
    console.log(err)
});
