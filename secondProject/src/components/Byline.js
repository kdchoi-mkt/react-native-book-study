import React from 'react';
import PropTypes from 'prop-types';
import * as globalStyles from '../styles/global';
import {StyleSheet, View} from 'react-native';
import SmallText from './SmallText';

const Byline = ({ date, author, location }) => (
    <View>
        <View style={styles.row}>
            <SmallText>
                {date.toLocaleString()}
            </SmallText>
            <SmallText>
                {author}
            </SmallText>
        </View>
        {location ? (
            <View style={styles.row}>
                <SmallText style={styles.location}>
                    {location}
                </SmallText>
            </View>
        ): null}
    </View>
)

Byline.propTypes = {
//    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    location: {
        color: globalStyles.MUTED_COLOR
    }
})

export default Byline;