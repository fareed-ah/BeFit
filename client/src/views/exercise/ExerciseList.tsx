import React from 'react';
import {
    View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { ActivityIndicator, FAB } from 'react-native-paper';
import StyledDivider from '../../components/common/Divider';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';
import WorkoutItem from '../../components/workouts/WorkoutItem';
import { useWorkoutExercisesQuery } from '../../generated/graphql';

const ExercisesList = ({ navigation, route }: WorkoutStackProps<'ExerciseList'>) => {
    const [{ data, fetching, error }] = useWorkoutExercisesQuery({ requestPolicy: "cache-and-network", variables: { workoutId: route.params.workoutId } });

    if (fetching) return <ActivityIndicator animating={true} />;
    if (error) return <Text>Something went wrong.. {error.message}</Text>;

    return (
        <View style={styles.container}>
            {console.log(data)}
            {data.exercises ? (data.exercises.map((exercise, index) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("ExerciseDetail")}>
                        <WorkoutItem key={index} title={exercise.exerciseName} ></WorkoutItem>
                    </TouchableOpacity>
                    <StyledDivider />
                </View>
            ))) : (<Text>Add an exercise</Text>)}

            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => {
                    navigation.navigate('AddExercise', { workoutId: route.params.workoutId })
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
    },
    fab: {
        backgroundColor: 'tomato',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

});

export default ExercisesList;