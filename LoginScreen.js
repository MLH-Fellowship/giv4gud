import React from "react";
import { View, Button, Text } from 'react-native';
import * as firebase from 'firebase';
// import { StackNavigator } from 'react-navigation';
import { Input } from 'react-native-elements';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };

    }

    onLoginPress() {
        this.state({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.state({ error: '', loading: false });
                // add nav thingy here
            })

            .catch(() => {
                this.state({ error: 'Authentication Failed', loading: false });
            })

    }

    onSignUpPress() {
        this.state({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.state({ error: '', loading: false });
                // add nav thingy here
            })

            .catch(() => {
                this.state({ error: 'Authentication Failed', loading: false });
            })

    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }

        return <View>
            <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
            <Button onPress={this.onSignUpPress.bind(this)}>Sign Up</Button>
        </View>
    }

    render() {
        return (
            <View>
                <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'

                />


            </View>
        )
    }

}

export default Login;