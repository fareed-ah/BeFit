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
  workouts: Array<Workout>;
  workout?: Maybe<Workout>;
  me?: Maybe<User>;
};


export type QueryWorkoutArgs = {
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

export type Mutation = {
  __typename?: 'Mutation';
  createWorkout: Workout;
  updateWorkout?: Maybe<Workout>;
  deleteWorkout: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
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

export type WorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutsQuery = (
  { __typename?: 'Query' }
  & { workouts: Array<(
    { __typename?: 'Workout' }
    & Pick<Workout, 'workoutName' | 'id' | 'userId'>
  )> }
);


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