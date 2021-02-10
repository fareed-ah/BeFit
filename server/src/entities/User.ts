import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Workout } from "./Workout";

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({type: 'text'})
  name!: string;

  @Field()
  @Column({type: 'text', unique:true})
  email!: string;
  
  @Column({type: 'text'})
  password!: string;

  @OneToMany(() => Workout, workout => workout.user)
  workouts: Workout[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();

}