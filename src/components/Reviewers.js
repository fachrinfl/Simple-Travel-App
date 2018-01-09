import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { robotoWeights } from 'react-native-typography'

class Reviewers extends Component {
    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        ...robotoWeights.light,
                        color: '#000000',
                        margin: 10,
                        fontSize: 18
                    }}>Top Reviewers</Text>
                </View>
            </View>
        )
    }
}

export default Reviewers