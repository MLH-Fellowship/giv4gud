import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// // Auth
import Home from '../screens/auth/Home';
import User from '../screens/auth/User';
import SignupScreen from '../screens/auth/SignupScreen';
import authFiller from '../screens/auth/authFiller';

// Givr
import GivrNavigation from "./GivrNavigation";
import CharityScreen from "../screens/givr/charityInfo"
import DonationForm from "../screens/givr/donationForm"

// Goodr
import CharityNavigation from "./CharityNavigation";

// Import Auth
import AuthContext from "../../Context"
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Test Functions (replace later)
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
            userToken: action.token,
            isLoading: false,
            userType: null,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userType: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userType: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userType: null,
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
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        
        console.log("Data", data);
        // Define user here based on firebase data

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', user: 'Other' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
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
            <Stack.Screen
              name="SignIn"
              component={SignupScreen}
              options={{
                title: 'Sign in',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : state.userType == 'User' ? (
            // User is signed in
            <>
              
              <Stack.Screen
              name="Givr Main"
              component={GivrNavigation}
              />

              <Stack.Screen
                name="Open Charity"
                component={CharityScreen}
                options={({ route }) => ({
                  title: route.params.type // Pass User ID & Charity ID in Route
                })}
              />

              <Stack.Screen
                name="Donation Form"
                component={DonationForm}
                options={({ route }) => ({
                  title: route.params.type // Pass User ID & Charity ID in Route
                })}
              />
              
            </>
          ) : (
            <>
              <Stack.Screen
                name="Goodr Main"
                component={CharityNavigation}
              />
    
          </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
/*
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false,
        }}
        headerMode="float"
      >

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Giv4Gud' }}
        />

        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: "Users"
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: "Sign Up"
          }}
        />

        <Stack.Screen
          name="authFiller"
          component={authFiller}
          options={({ route }) => ({
            title: route.params.type // Put user data in Route
          })}
        />

        <Stack.Screen
          name="Givr Main"
          component={GivrNavigation}
          options={({ route }) => ({
            title: route.params.type // Put user id in Route
          })}
        />

        <Stack.Screen
          name="Goodr Main"
          component={CharityNavigation}
          options={({ route }) => ({
            title: route.params.type // Put user id in Route
          })}
        />

        <Stack.Screen
          name="Open Charity"
          component={CharityScreen}
          options={({ route }) => ({
            title: route.params.type // Pass User ID & Charity ID in Route
          })}
        />

        <Stack.Screen
          name="Donation Form"
          component={DonationForm}
          options={({ route }) => ({
            title: route.params.type // Pass User ID & Charity ID in Route
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
export default MainNavigation;