import React, { Component } from 'react';
import { Text, View } from 'react-native'

class Blink extends Component {
    componentDidMount(){
        //Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText}
            ))
        ), 1000);
    }

    //state object
    state = { isShowingText: true };

    render() {
        if(!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='NINERS'/>
                <Blink text='CHEMNITZ' />
            </View>
        );
    }
}