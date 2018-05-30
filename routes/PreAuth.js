import React, {Component} from 'react';
import {Alert, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Button } from 'react-native-elements'
import styles from './styles';

import Expo from 'expo';


class PreAuth extends Component {

    constructor() {
        super();
        this.state = { fbuser:null, username:null,password:null };
    }


    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }


    async loadUser() {
        Actions.PostAuth();
        try {
            const value = await AsyncStorage.getItem('fbtoken');
            if (value !== null){
                Alert.alert(
                    'Logged in!',
                    `Hi ${value}!`,
                );
                Actions.PostAuth();
            }
            else{
               console.log("No user found.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async userSignup() {

        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('386478618530151', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            fetch(
                `https://graph.facebook.com/me?access_token=${token}`)
                .then((response) => {
                     this.saveItem("fbtoken",token);
                     console.log(token);
                })
                .finally((response) => {
                    Actions.PostAuth();
                })
                .done();



        }

    }

    render() {
        return (
            <View style={styles.containerHome}>


                    <Text>Welcome to Fyn App!</Text>

                    <TouchableOpacity style={styles.buttons} onPress={this.loadUser}>
                        <Text style={styles.buttonText}> Log In </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={this.userSignup}>
                        <Text style={styles.buttonText}> Sign Up </Text>
                    </TouchableOpacity>

            </View>
        );
    }
}


export default PreAuth;