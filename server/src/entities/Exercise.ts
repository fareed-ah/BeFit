import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Workout } from "./Workout";

@ObjectType()
@Entity()
export class Exercise extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;
     
  @Field()
  @Column()
  workoutId: number;

  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;
    
  @Field()
  @Column({type: 'text'})
  exerciseName!: string;

  @Field()
  @Column({type: 'text'})
  sets!: string;
    
  @Field()
  @Column({type: 'text'})
  restTime!: string;

  @Field()
  @Column({type: 'text'})
  notes!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}