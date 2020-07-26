import React, { Component } from 'react'
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    ViewPropTypes
} from 'react-native';
import url from './SampleImage';
import DummyString from './LoremIpsum';
import PropTypes from 'prop-types';
import * as globalStyles from '../styles/global';
import NewsItem from './NewsItem';

export default class NewsFeed extends Component{

    renderItem({item}){
        return(
            <NewsItem 
                imageUrl={item.imageUrl}
                author={item.author}
                index={item.index}
                location={item.location}
                date={item.date}
                title={item.title}
                description={item.description}
            />
        )
    };

    render(){
        return(
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <FlatList
                    ListEmptyComponent
                    data={this.props.dataSource}
                    renderItem ={this.renderItem}
                    // style={this.props.listStyles}
                    keyExtractor={item=>item.id}
                />
            </View>
        )
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: ViewPropTypes.style
}

NewsFeed.defaultProps={
    dataSource: [
        {
            imageUrl: url,
            title: 'Hello1',
            description: DummyString,
            date: new Date(),
            author: 'kdchoi1',
            location: 'Seoul',
            index: 1,
            id: '1'
        },
    ]
}