import { Formik } from 'formik';
import React, { useContext } from 'react';

import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import { Title, TextInput, Button, Subheading } from 'react-native-paper';
import { useRegisterMutation } from '../../generated/graphql';
import { AuthNavProps } from '../../navigation/AuthParamList';
import { AuthContext } from '../../utils/AuthProvider';

const SignUpPage = ({ }: AuthNavProps<'SignUp'>) => {
  const [, register] = useRegisterMutation();
  const { signIn } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={
        async (values) => {
          const response = await register({ name: values.name, email: values.email, password: values.password });
          if (response.data?.register.errors) {

          } else if (response.data?.register.user) {
            //worked login
            signIn(response.data?.register.user)
          }
        }
      }
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/BeFitLogo.png')}></Image>
          <Title style={styles.title} >Join The Club</Title>
          <Subheading style={styles.subheading}>The ultimate workout planner</Subheading>

          <TextInput
            style={styles.nameInput}
            label="Full Name"
            mode='outlined'
            value={values.name}
            onChangeText={handleChange('name')}
          />

          <TextInput
            style={styles.emailInput}
            label="Email"
            mode="outlined"
            value={values.email}
            onChangeText={handleChange('email')}
          />

          <TextInput
            label="Password"
            mode="outlined"
            value={values.password}
            onChangeText={handleChange('password')}
          />

          <Text style={styles.forgotPassword}>Forgot your password?</Text>

          <Button
            style={styles.loginButton}
            labelStyle={styles.loginButtonText}
            mode="contained" uppercase={true}
            dark={true}
            onPress={handleSubmit}>
            signup
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