import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exercise } from "./Exercise";
import { User } from "./User";

@ObjectType()
@Entity()
export class Workout extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.workouts)
  user: User;

  @OneToMany(() => Exercise, exercise => exercise.workout)
  exercises: Exercise[];

  @Field()
  @Column({type: 'text'})
  workoutName!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}