import { Formik } from 'formik';
import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useCreateWorkoutMutation } from '../../generated/graphql';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';

const AddWorkout = ({ navigation }: WorkoutStackProps<'AddWorkout'>) => {
    const [, createWorkout] = useCreateWorkoutMutation();
    return (
        <Formik
            initialValues={{
                workoutName: '',
            }}
            onSubmit={
                async (values) => {
                    const { error } = await createWorkout({ workoutName: values.workoutName });

                    if (error) {

                    } else {
                        navigation.navigate('Workouts');
                    }
                }
            }
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>

                    <TextInput
                        style={styles.workoutNameInput}
                        label="Workout Name"
                        mode="outlined"
                        selectionColor="#F07820"
                        value={values.workoutName}
                        onChangeText={handleChange('workoutName')}
                    />

                    <Button
                        style={styles.submitButton}
                        labelStyle={styles.submitButtonText}
                        mode="contained" uppercase={true}
                        dark={true}
                        onPress={handleSubmit}>
                        create workout
            </Button>

                </View>
            )}
        </Formik>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        width: '100%',
        backgroundColor: "#FFF",
    },


    workoutNameInput: {
        marginTop: 50,
    },

    submitButton: {
        flexDirection: 'column',
        textAlignVertical: "center",
        alignSelf: "center",
        marginTop: 28,
        margin: 6,
        backgroundColor: "#F07820",
        borderRadius: 25,
        height: 50,
        width: 325,
    },
    submitButtonText: {
        color: "#FFF",
        textAlignVertical: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Poppins",
        height: 30,
        width: 325,

    },
});


export default AddWorkout;