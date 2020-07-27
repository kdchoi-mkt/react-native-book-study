import React, {Component} from 'react';
import {
    TabBarIOS,
    Text,
    View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

function Home(){
    return(
        <View>
            <Text>Home</Text>
        </View>
    );
}

function Setting(){
    return(
        <View>
            <Text>Setting</Text>
        </View>
    );
}

const Tab = new createBottomTabNavigator();

export default class HomeScreen extends Component {
    render(){
        return(
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Setting} />
              </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
