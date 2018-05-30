import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, ListItem, Button,Icon,Header} from 'react-native-elements';
import styles from './styles';

class Settings extends Component{
    constructor(){
        super();
        this.list = [
            {
                title: 'Appointments',
                icon: 'av-timer'
            },
            {
                title: 'Trips',
                icon: 'flight-takeoff'
            },
        ];
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    innerContainerStyles={{flexDirection: 'row'}}
                    backgroundColor='#fff'
                    leftComponent={{ size:35, icon: 'keyboard-arrow-left', color: '#09cddb' , onPress: () => Actions.pop()}}
                    centerComponent={{ text: 'Settings', style: { color: '#09cddb' } }}
                    rightComponent={{ size:35, icon: 'home', color: '#09cddb', onPress: () => alert('right') }}
                />
                <Card title="firstPanel">
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
                <Card title="ListItems">
                    {
                        this.list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                            />
                        ))
                    }
                </Card>
            </View>
        );
    }
}

export default Settings;