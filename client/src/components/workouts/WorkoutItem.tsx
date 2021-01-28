import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';
import { Title } from 'react-native-paper';

interface Props {
    title: string
}

const WorkoutItem = (props: Props) => {

    return (
        <View style={styles.container} >
            <Title style={styles.title}>{props.title}</Title>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: "#FFF",
        height: 75,
    },

    dividerStyle: {
        height: 1,
        backgroundColor: "#C4BFBF",
    },

    title: {
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: 20,
        marginStart: 8,
    }

});

export default WorkoutItem;