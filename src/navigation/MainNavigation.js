import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { db } from '../services/firebase.js'
import firebase from 'firebase'

// // Auth
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';

// Givr
import GivrNavigation from "./GivrNavigation";
import CharityScreen from "../screens/givr/charityInfo"
import DonationForm from "../screens/givr/donationForm"

// Goodr
import CharityNavigation from "./CharityNavigation";

// Import Auth
import AuthContext from "../../Context"
import { Button, Text, TextInput, View } from 'react-native';

// Fix AsyncStorage if time permits
import AsyncStorage from '@react-native-async-storage/async-storage';

// Loading Screen
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MainNavigation() {

  // Auth Code
  const [state, dispatch] = React.useReducer
    (
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token, // action.token,
              isLoading: false,
              userType: null, // null,
              userID: null,
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
              userType: action.userType,
              userID: action.userID,
            };
          case 'SIGN_UP':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
              userType: action.userType,
              userID: action.userID,
            };
          case 'SIGN_OUT':
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
              userType: null,
              userID: null,
            };
        }
      },
      {
        isLoading: true,
        isSignout: false,
        userToken: null,
        userType: null,
        userID: null,
      }
    );

  React.useEffect(() => {


    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        const { id, email, password, userType } = data.data;
        console.log("Signup Data: ID - ", id, "email", email, "password", password, "userType", userType);

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', userType: userType, userID: id });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        console.log("Signup Data", data);
        console.log("ID", data.uid);

        dispatch({ type: 'SIGN_UP', token: 'dummy-auth-token', userType: data.userType, userID: data.uid }); // Get UID
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>

          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <>

              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Login',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignupScreen}
                options={{
                  title: 'Sign in',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            </>

          ) : state.userType == 'User' && state.userToken != null ? (
            // User is signed in
            <>

              <Stack.Screen
                name="Givr Main"
                component={GivrNavigation}
                initialParams={{ id: state.userID }}
              />

              <Stack.Screen
                name="Open Charity"
                component={CharityScreen}
                initialParams={{ id: state.userID }}
              />

              <Stack.Screen
                name="Donation Form"
                component={DonationForm}
                initialParams={{ id: state.userID }}
              />

            </>
          ) : (
                  <>
                    <Stack.Screen
                      name="Goodr Main"
                      component={CharityNavigation}
                      initialParams={{ id: state.userID }}
                    />
                  </>

                )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default MainNavigation;