import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    ImageBackground,
    View,
    ViewPropTypes
} from 'react-native'
import Title from './Title'

const Thumbnail = ({ url, titleText, accentColor, style, blurRadius}) => {
    const imageStyle = {
        backgroundColor: `${accentColor}77`
    };
    const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

    return(
        <View style={[styles.container, {borderColor: accentColor}, style]}>
            {url.length > 0 ? (
                <ImageBackground
                style={[styles.image]}
                source={{
                    uri: url
                }}
                blurRadius={blurRadius}
                >
                {TitleComponent}
                </ImageBackground>
            ): (
            <View style={[style.image, imageStyle]}>
                {TitleComponent}
            </View>
            )}
        </View>
    );
};

Thumbnail.propTypes = {
    style: ViewPropTypes.style,
    url: PropTypes.string.isRequired,
    titleText: PropTypes.string,
    accentColor: PropTypes.string.isRequired,
    blurRadius: PropTypes.number
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        justifyContent: 'flex-end'
    },
    title: {
        padding: 5
    },
    container: {
        borderBottomWidth: 3,
        borderStyle: 'solid'
    }
})

export default Thumbnail;