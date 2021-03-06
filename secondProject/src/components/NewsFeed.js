import React, { Component } from 'react'
import {
    FlatList,
    StyleSheet,
    View,
    ViewPropTypes,
    Modal,
    TouchableOpacity,
    Alert,
    Vibration,
} from 'react-native';
import WebView from 'react-native-webview'
import url from './SampleImage';
import DummyString from './LoremIpsum';
import PropTypes from 'prop-types';
import * as globalStyles from '../styles/global';
import NewsItem from './NewsItem';
import SmallText from './SmallText';

export default class NewsFeed extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible:false
        };
        this.onModalOpen = this.onModalOpen.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    AlertForNullURL(){
        Vibration.vibrate();
        Alert.alert(
            'commingSoon!',
            'heel',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('Pressed OK')
                }
            ]
        );
    }

    renderItem({item}){
        return(
            <NewsItem 
                onPress={item.url? () => this.onModalOpen(item.url): () => this.AlertForNullURL()}
                imageUrl={item.imageUrl}
                author={item.author}
                index={item.index}
                location={item.location}
                date={item.date}
                title={item.title}
                description={item.description}
                style={styles.newsItem}
            />
        )
    };
    renderModal(){
        return(
            <Modal
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}
                animationType='fade'
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        onPress={this.onModalClose}
                        style={styles.closeButton}
                    >
                        <SmallText>close</SmallText>
                    </TouchableOpacity>
                    <WebView 
                        onLoadStart = {() => console.log('loadStart!')}
                        onLoadEnd = {() => console.log('loadEnd!')}
                        scalesPageToFit
                        source={{url: this.state.modalUrl}}
                    />
                </View>
            </Modal>
        )
    }
    onModalOpen(url){
        this.setState({
            modalVisible:true,
            modalUrl: url
        });
    }
    onModalClose(){
        this.setState({
            modalVisible:false
        })
    }
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
                {this.renderModal()}
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

const styles=StyleSheet.create({
    newsItem: {
        marginBottom:20
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    },
    closeButton: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        flexDirection: 'row'
    }
})