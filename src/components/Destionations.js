import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { robotoWeights } from 'react-native-typography'

class Destionations extends Component {
    render() {
        return (
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        ...robotoWeights.light,
                        color: '#000000'
                    }}>Top Destinations</Text>
                </View>
            </View>
        )
    }
}

export default Destionations