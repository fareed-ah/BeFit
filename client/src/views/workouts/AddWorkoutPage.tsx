import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AddWorkout = () => {
    const [workoutName, setWorkoutName] = React.useState('')

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.workoutNameInput}
                label="Workout Name"
                mode="outlined"
                selectionColor="#F07820"
                value={workoutName}
                onChangeText={workoutName => setWorkoutName(workoutName)}
            />

            <Button
                style={styles.submitButton}
                labelStyle={styles.submitButtonText}
                mode="contained" uppercase={true}
                dark={true}
                onPress={() => { }}>
                submit
            </Button>

        </View>

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