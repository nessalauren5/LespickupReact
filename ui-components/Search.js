import React, {Component} from 'react';
import View from 'react-native';
import {SearchBar} from 'react-native-elements';

class Search extends Component{
    render(){
        return(
            <View>
                <SearchBar
                    lightTheme
                    placeholder='Search...' />
            </View>
        );
    }
}

export default Search;