import React from 'react';
import {
    View, StyleSheet,
} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const ExerciseDetail = () => {
    return (
        <View style={styles.container}>
            <Card style={styles.cardItem}>
                <Card.Title title="Workout" />
                <Card.Content>
                    <Text>3 Sets (10-12 reps)</Text>
                    <Text>2-3 min rest</Text>
                </Card.Content>
            </Card>
            <Card style={styles.cardItem}>
                <Card.Title title="Previous Workout" />
                <Card.Content>
                    <Text>3 Sets (10-12 reps)</Text>
                    <Text>2-3 min rest</Text>
                </Card.Content>
            </Card>
            <Card style={styles.cardItem}>
                <Card.Title title="Notes" />
                <Card.Content>
                    <Text>3 Sets (10-12 reps)</Text>
                    <Text>2-3 min rest</Text>
                </Card.Content>
            </Card>
            <Button style={styles.startButton}
                mode="contained" uppercase={true}
                dark={true}>Start</Button>
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
    cardItem: {
        marginVertical: 8,
        borderRadius: 10,
        elevation: 4,
    },
    startButton: {
        backgroundColor: "#F07820",
        borderRadius: 25,
        marginTop: 8,
    }

});

export default ExerciseDetail;