import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AddExercise = () => {
    const [exerciseName, setExerciseName] = React.useState('')
    const [numOfSets, setNumOfSets] = React.useState('')
    const [restTime, setRestTime] = React.useState('')
    const [notes, setNotes] = React.useState('')

    return (
        <View style={styles.container}>

            <TextInput
                label="Exercise Name"
                mode="outlined"
                selectionColor="#F07820"
                value={exerciseName}
                onChangeText={exerciseName => setExerciseName(exerciseName)}
            />

            <TextInput
                keyboardType="numeric"
                label="Number of Sets"
                mode="outlined"
                selectionColor="#F07820"
                value={numOfSets}
                onChangeText={numOfSets => setNumOfSets(numOfSets)}
            />
            <TextInput
                label="Rest Time"
                mode="outlined"
                selectionColor="#F07820"
                value={restTime}
                onChangeText={restTime => setRestTime(restTime)}
            />
            <TextInput
                style={styles.multilineInput}
                label="Notes"
                mode="outlined"
                multiline={true}
                selectionColor="#F07820"
                value={notes}
                onChangeText={notes => setNotes(notes)}
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