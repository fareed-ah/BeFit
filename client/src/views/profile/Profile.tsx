import React from 'react';
import { useContext } from 'react';

import {
    Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../../utils/AuthProvider';

const Profile = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>User Profile</Text>
            <Button onPress={() => signOut()}>Logout</Button>
        </View>
    );
};

export default Profile;