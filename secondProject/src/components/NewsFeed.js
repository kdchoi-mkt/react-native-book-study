import React, { Component } from 'react'
import {
    FlatList,
    StyleSheet,
    View,
    ViewPropTypes,
    Modal,
    TouchableOpacity
} from 'react-native';
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

    renderItem({item}){
        return(
            <NewsItem 
                onPress={() => this.onModalOpen()}
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
                </View>
            </Modal>
        )
    }
    onModalOpen(){
        this.setState({
            modalVisible:true
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
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
})