import React from 'react'
import { StyleSheet, Text} from 'react-native'
import AppText from './AppText'
import * as globalStyles from '../styles/global'
import PropTypes from 'prop-types'

const SmallText = ({style, children}) => (
    <AppText style = {[styles.small, style]}>
        {children}
    </AppText>
);

SmallText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
})

export default SmallText;