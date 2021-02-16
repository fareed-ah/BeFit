import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allWorkouts?: Maybe<Array<Workout>>;
  workouts?: Maybe<Array<Workout>>;
  workout?: Maybe<Workout>;
  me?: Maybe<User>;
  users?: Maybe<Array<User>>;
  allExercises?: Maybe<Array<Exercise>>;
  exercises?: Maybe<Array<Exercise>>;
  exercise?: Maybe<Exercise>;
};


export type QueryWorkoutArgs = {
  id: Scalars['Float'];
};


export type QueryExercisesArgs = {
  workoutId: Scalars['Float'];
};


export type QueryExerciseArgs = {
  id: Scalars['Float'];
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['Int'];
  userId: Scalars['Float'];
  workoutName: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Exercise = {
  __typename?: 'Exercise';
  id: Scalars['Int'];
  workoutId: Scalars['Float'];
  exerciseName: Scalars['String'];
  sets: Scalars['String'];
  restTime: Scalars['String'];
  notes: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createWorkout: Workout;
  updateWorkout?: Maybe<Workout>;
  deleteWorkout: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  createExercise: Exercise;
  deleteExercise: Scalars['Boolean'];
};


export type MutationCreateWorkoutArgs = {
  workoutName: Scalars['String'];
};


export type MutationUpdateWorkoutArgs = {
  workoutName?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteWorkoutArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UserLoginInput;
};


export type MutationRegisterArgs = {
  options: UserRegistrationInput;
};


export type MutationCreateExerciseArgs = {
  workoutId: Scalars['Float'];
  options: ExerciseInput;
};


export type MutationDeleteExerciseArgs = {
  id: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegistrationInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ExerciseInput = {
  exerciseName: Scalars['String'];
  sets: Scalars['String'];
  restTime: Scalars['String'];
  notes: Scalars['String'];
};

export type CreateExerciseMutationVariables = Exact<{
  exerciseName: Scalars['String'];
  sets: Scalars['String'];
  restTime: Scalars['String'];
  notes: Scalars['String'];
  workoutId: Scalars['Float'];
}>;


export type CreateExerciseMutation = (
  { __typename?: 'Mutation' }
  & { createExercise: (
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'id' | 'exerciseName' | 'sets' | 'restTime' | 'notes' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateWorkoutMutationVariables = Exact<{
  workoutName: Scalars['String'];
}>;


export type CreateWorkoutMutation = (
  { __typename?: 'Mutation' }
  & { createWorkout: (
    { __typename?: 'Workout' }
    & Pick<Workout, 'id' | 'createdAt' | 'updatedAt' | 'workoutName' | 'userId'>
  ) }
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    )> }
  ) }
);

export type WorkoutExercisesQueryVariables = Exact<{
  workoutId: Scalars['Float'];
}>;


export type WorkoutExercisesQuery = (
  { __typename?: 'Query' }
  & { exercises?: Maybe<Array<(
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'id' | 'workoutId' | 'exerciseName' | 'sets' | 'restTime'>
  )>> }
);

export type WorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutsQuery = (
  { __typename?: 'Query' }
  & { workouts?: Maybe<Array<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'workoutName' | 'id' | 'userId'>
  )>> }
);


export const CreateExerciseDocument = gql`
    mutation CreateExercise($exerciseName: String!, $sets: String!, $restTime: String!, $notes: String!, $workoutId: Float!) {
  createExercise(
    options: {exerciseName: $exerciseName, sets: $sets, restTime: $restTime, notes: $notes}
    workoutId: $workoutId
  ) {
    id
    exerciseName
    sets
    restTime
    notes
    createdAt
    updatedAt
  }
}
    `;

export function useCreateExerciseMutation() {
  return Urql.useMutation<CreateExerciseMutation, CreateExerciseMutationVariables>(CreateExerciseDocument);
};
export const CreateWorkoutDocument = gql`
    mutation CreateWorkout($workoutName: String!) {
  createWorkout(workoutName: $workoutName) {
    id
    createdAt
    updatedAt
    workoutName
    userId
  }
}
    `;

export function useCreateWorkoutMutation() {
  return Urql.useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(CreateWorkoutDocument);
};
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(options: {password: $password, email: $email}) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($name: String!, $password: String!, $email: String!) {
  register(options: {name: $name, password: $password, email: $email}) {
    errors {
      field
      message
    }
    user {
      id
      email
      name
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const WorkoutExercisesDocument = gql`
    query WorkoutExercises($workoutId: Float!) {
  exercises(workoutId: $workoutId) {
    id
    workoutId
    exerciseName
    sets
    restTime
  }
}
    `;

export function useWorkoutExercisesQuery(options: Omit<Urql.UseQueryArgs<WorkoutExercisesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WorkoutExercisesQuery>({ query: WorkoutExercisesDocument, ...options });
};
export const WorkoutsDocument = gql`
    query Workouts {
  workouts {
    workoutName
    id
    userId
  }
}
    `;

export function useWorkoutsQuery(options: Omit<Urql.UseQueryArgs<WorkoutsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WorkoutsQuery>({ query: WorkoutsDocument, ...options });
};