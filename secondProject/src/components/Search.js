import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import * as globalStyles from '../styles/global'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    render(){
        return(
            <View>
                <View style = {styles.search}>
                    <TextInput style = {styles.input}
                               onChangeText = {text => this.setState({searchText: text})}
                               value = {this.state.searchText}
                               placeholder={'SEARCH'}
                               placeholderTextColor={globalStyles.TEXT_COLOR}
                            //    keyboardType='email-address'
                               multiline
                               numberOfLines={3}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        color: globalStyles.TEXT_COLOR,
        paddingHorizontal: 5,
        alignItems: 'center'
        // flex: 1
    },
    search: {
        borderColor: globalStyles.TEXT_COLOR,
        backgroundColor: globalStyles.BG_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5
    }
})