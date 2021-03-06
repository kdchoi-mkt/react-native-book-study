import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Provider, connect } from 'react-redux';

import store from './store';
import Counter from './Counter'
import { increment, decrement, zero } from './Actions'

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    zero: () => dispatch(zero())
})

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default class Countly extends Component{
    constructor(props){
        super(props);
        this.updateState = this.updateState.bind(this);
        this.state = {
            tally: store.getState(),
            unsubscribe: store.subscribe(this.updateState)
        };
    }

    componentWillUnmount(){
        this.state.unsubscribe()
    }

    updateState() {
        this.setState({
            tally: store.getState()
        });
    }

    render(){
        return(
            <Provider store = {store} >
                <View style={styles.container}>
                    <Text style={styles.appName}>
                        Countly
                    </Text>
                    <Text style={styles.tally}>
                        Tally: {this.state.tally.count}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => store.dispatch(increment())}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => store.dispatch(decrement())}>
                        <Text style={styles.buttonText}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => store.dispatch(zero())}>
                        <Text style={styles.buttonText}>
                            0
                        </Text>
                    </TouchableOpacity>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    appName: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    tally: {
        textAlign: "center",
        color: '#333333',
        marginBottom: 20,
        fontSize: 25
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        marginBottom: 20,
        padding: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})