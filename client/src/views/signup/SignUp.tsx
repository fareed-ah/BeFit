import React, { useContext } from 'react';

import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import { Title, TextInput, Button, Subheading } from 'react-native-paper';
import { AuthNavProps } from '../../navigation/AuthParamList';
import { AuthContext } from '../../utils/AuthProvider';

const SignUpPage = ({ navigation }: AuthNavProps<'SignIn'>) => {
  const { signIn } = useContext(AuthContext);
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/BeFitLogo.png')}></Image>
      <Title style={styles.title} >Join The Club</Title>
      <Subheading style={styles.subheading}>The ultimate workout planner</Subheading>

      <TextInput
        style={styles.nameInput}
        label="Full Name"
        mode='outlined'
        selectionColor="#F07820"
        value={name}
        onChangeText={name => setName(name)}
      />

      <TextInput
        style={styles.emailInput}
        label="Email"
        mode="outlined"
        selectionColor="#F07820"
        value={email}
        onChangeText={email => setEmail(email)}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={password => setPassword(password)}
      />

      <Text style={styles.forgotPassword}>Forgot your password?</Text>

      <Button
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        mode="contained" uppercase={true}
        dark={true}
        onPress={() => signIn()}>
        signup
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

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },

  title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: 24,
  },

  subheading: {
    alignSelf: "center",
    fontFamily: "Poppins",
    fontSize: 18,
  },

  nameInput: {
    marginTop: 25,
  },

  emailInput: {
  },

  forgotPassword: {
    marginTop: 6,
    alignSelf: "flex-end",
  },

  loginButton: {
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
  loginButtonText: {
    color: "#FFF",
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Poppins",
    height: 30,
    width: 325,

  },
});


export default SignUpPage;