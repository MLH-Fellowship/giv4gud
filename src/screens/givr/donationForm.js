import React, { useRef, useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import TextInput from '../../components/givr/forms/TextInput';
import Button from '../../components/givr/forms/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Outside function
// import OutsideFunction from '../services/Function'

// Data
const data = 
[
  {
    "email": "467cnl09",
    "password": "Qwerty917"
  },
  {
    "email": "123asl14",
    "password": "BBB"
  }
]

// Donation Cards
function Card(){
  return(
    <View>
      {data.map((x, i) => {
        return(
        <View key={i}> 
          <Text> {x.email} </Text>
          <Text>{x.password} </Text>
        </View>
        )
      })}
    </View>
  );
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
  });

export default function DonationForm() {

    // useState test
    const [text, addText ] = useState("Hi");
    
    const password = useRef(null);
    const {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched
      } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: values =>
        {
          // Database Call
          // OutsideFunction("Call to Database"); 

          // useState update
          data.push(
            {
                "email": values.email,
                "password": values.password
            })
          addText(data) 
        }
      });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card />
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          ref={password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button label='Login' onPress={handleSubmit} />
    </View>
  );
}