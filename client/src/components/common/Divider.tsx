import React from 'react';

import {
    StyleSheet,
} from 'react-native';
import { Divider } from 'react-native-paper';


const StyledDivider = () => {

    return (
        <Divider style={styles.dividerStyle} />
    );
};

const styles = StyleSheet.create({

    dividerStyle: {
        height: 1,
        backgroundColor: "#C4BFBF",
    },

});

export default StyledDivider;