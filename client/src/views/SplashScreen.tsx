import React from 'react';

import {
    View, StyleSheet, Image,
} from 'react-native';

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/BeFitLogo.png')}></Image>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#FFF",
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },
})

export default SplashScreen;