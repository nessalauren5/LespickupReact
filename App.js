import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import PreAuth from './routes/PreAuth';
import PostAuth from './routes/PostAuth';
import Settings from './routes/Settings';
export default class App extends React.Component {


    render() {
    return (
        <Router hideNavBar={false}>
            <Scene key='root'>
                <Scene
                    component={PreAuth}
                    hideNavBar={true}
                    initial={true}
                    key='PreAuth'
                    title='PreAuth'
                />
                <Scene
                    component={PostAuth}
                    hideNavBar={true}
                    key='PostAuth'
                    title='PostAuth'
                />
                <Scene component={Settings}
                       hideNavBar={false}
                       key='Settings'
                       title='Settings'
                />
            </Scene>
        </Router>
    );
  }


}


