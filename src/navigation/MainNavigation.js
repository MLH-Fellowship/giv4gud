import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// // Auth
import SignupScreen from '../screens/auth/SignupScreen';


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
            userID: null,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userType: action.user,
            userID: action.id,
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
        
        console.log("Data", data);
        
        /* Check if user exists using firebase 
           Return user key / id if exists
           Else dispatch restoreToken */
        

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', user: 'Other' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {

           /* Add user to database
           Return user key / id 
           For SIGN_IN Dispatch, move screen to additional form screen */

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

export default MainNavigation;