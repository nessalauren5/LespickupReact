import React, {Component} from 'react';
import {Alert, Image, View,Text,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Button,Header,SearchBar,Rating} from 'react-native-elements';

import styles from './styles';

class PostAuth extends Component {

    constructor()
    {
        super();
        this.state={
            data:[];
        }
    }
    userLogout() {
        Actions.pop();
    }

    async getFromAPI(){
        fetch(
            `https://lespickupengine.appspot.com/api/persons?name="Ness"`)
            .then(response => response.json())
            .then((rspJSON) => {
                console.log(rspJSON);
                this.setState({data:rspJSON})
            })
    }
    async userLogout() {
        try {
            await AsyncStorage.removeItem('fbtoken');
            Alert.alert('Logout Success!');
            Actions.pop();
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }

    openSettings(){
        console.log("left button press");
        Actions.push('Settings',{back:true});
    }

    render() {

        return (

            <View style={styles.container}>
                <Header
                    innerContainerStyles={{flexDirection: 'row'}}
                    backgroundColor='#fff'
                    leftComponent={{ icon: 'menu', color: '#09cddb' , onPress: () => this.openSettings()}}
                    centerComponent={{ text: 'fyn.app', style: { color: '#09cddb' } }}
                    rightComponent={{ icon: 'home', color: '#09cddb', onPress: () => alert('right') }}
                />
                <SearchBar
                    lightTheme
                    placeholder='Search...' />
                <Rating
                    showRating
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={20}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 , backgroundColor:'#09cddb'}}
                />
                <Image source={{uri:'http://via.placeholder.com/350x150'}} style={styles.image}/>
                <Text>{this.state.message}</Text>
                <Button onPress={this.getFromAPI} title="FETCH" style={styles.buttons}/>
                <Button onPress={this.userLogout} title="Log out" style={styles.buttons}/>
            </View>
        );
    }
}
export default PostAuth;


