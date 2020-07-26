import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ViewPropTypes
} from 'react-native';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component {
    render(){
        const {
            style,
            imageUrl,
            title,
            author,
            date,
            location,
            description
        } = this.props;
        const accentColor = globalStyles.ACCENT_COLORS[
            this.props.index % globalStyles.ACCENT_COLORS.length
        ];

        return (
            <TouchableOpacity
                style={style}
                onPress={() => console.log('onPress')}
                onPressIn={() => console.log('onPressIn')}
                onPressOut={() => console.log('onPressOut')}
                onLongPress={() => console.log('onPressLong')}
                // delayLongPress={1000}
                hitSlop={{
                    top: 10,
                    right: 5,
                    left: 5,
                    bottom: 10
                }}
            >  
                <View>
                    <Thumbnail
                        url={imageUrl}
                        titleText={title}
                        accentColor={accentColor}
                        style={styles.thumbnail}
                    />
                    <View style={styles.content}>
                        <Byline
                            author={author}
                            date={date}
                            location={location}
                        />
                        <AppText>{description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    descrpition: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    author: PropTypes.string,
    location: PropTypes.string,
    index: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style
}

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});