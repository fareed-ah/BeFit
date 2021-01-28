import React from 'react';
import {
    View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { FAB } from 'react-native-paper';
import StyledDivider from '../../components/common/Divider';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';
import WorkoutItem from '../../components/workouts/WorkoutItem';

const ExercisesList = ({ navigation }: WorkoutStackProps<'ExerciseList'>) => {
    const exercises = ["Bench", "Cables", "Shoulder Press", "Triceps"];

    return (

        <View style={styles.container}>
            {exercises.map((exercise, index) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("ExerciseDetail")}>
                        <WorkoutItem key={index} title={exercise} ></WorkoutItem>
                    </TouchableOpacity>
                    <StyledDivider />
                </View>
            ))}
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => { navigation.navigate("AddExercise") }}
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