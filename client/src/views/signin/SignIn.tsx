import React, { useContext } from 'react';

import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import { AuthNavProps } from '../../navigation/AuthParamList';
import { AuthContext } from '../../utils/AuthProvider';
import { Formik } from 'formik';
import { useLoginMutation } from '../../generated/graphql';

const SignInPage = ({ navigation }: AuthNavProps<'SignIn'>) => {
  const [, login] = useLoginMutation();
  const { signIn } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={
        async (values) => {
          const response = await login({ email: values.email, password: values.password });
          if (response.data?.login.errors) {
            console.log(response.data.login.errors)
          } else if (response.data?.login.user) {
            //worked login
            console.log(response.data.login.user)
            signIn(response.data?.login.user)
          }
        }
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/BeFitLogo.png')}></Image>
          <Title style={styles.title} >Welcome Back</Title>

          <TextInput
            style={styles.emailInput}
            label="Email"
            mode="outlined"
            selectionColor="#F07820"
            value={values.email}
            onChangeText={handleChange('email')}
          />

          <TextInput
            label="Password"
            mode="outlined"
            textContentType="password"
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
            login
        </Button>

          <Text
            style={styles.signup}
            onPress={() => navigation.navigate('SignUp')}>
            Don't have an account? Sign Up!
          </Text>

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
    marginTop: 60,
    marginBottom: 25,
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

  emailInput: {
    marginTop: 50,
  },

  forgotPassword: {
    alignSelf: "flex-end"
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

  signup: {
    alignSelf: "center"
  },
});


export default SignInPage;