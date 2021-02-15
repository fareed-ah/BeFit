import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { useCreateExerciseMutation } from '../../generated/graphql';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';


const AddExercise = ({ navigation, route }: WorkoutStackProps<'AddExercise'>) => {

    const [, createExercise] = useCreateExerciseMutation();
    console.log("Workout id: ", route.params.workoutId)
    return (
        <Formik
            initialValues={{ exerciseName: '', sets: '', restTime: '', notes: '' }}
            onSubmit={
                async (values) => {
                    const { error } = await createExercise({ ...values, workoutId: route.params.workoutId });

                    if (error) {
                        console.log(error.message)
                    } else {
                    }
                }
            }
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>

                    <TextInput
                        label="Exercise Name"
                        mode="outlined"
                        selectionColor="#F07820"
                        value={values.exerciseName}
                        onChangeText={handleChange('exerciseName')}
                    />

                    <TextInput
                        keyboardType="numeric"
                        label="Number of Sets"
                        mode="outlined"
                        selectionColor="#F07820"
                        value={values.sets}
                        onChangeText={handleChange('numOfSets')}
                    />
                    <TextInput
                        label="Rest Time"
                        mode="outlined"
                        selectionColor="#F07820"
                        value={values.restTime}
                        onChangeText={handleChange('restTime')}
                    />
                    <TextInput
                        style={styles.multilineInput}
                        label="Notes"
                        mode="outlined"
                        multiline={true}
                        selectionColor="#F07820"
                        value={values.notes}
                        onChangeText={handleChange('notes')}
                    />

                    <Button
                        style={styles.submitButton}
                        labelStyle={styles.submitButtonText}
                        mode="contained" uppercase={true}
                        dark={true}
                        onPress={handleSubmit}>
                        submit
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

    multilineInput: {
        height: 100,
        textAlignVertical: "top"
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


export default AddExercise;