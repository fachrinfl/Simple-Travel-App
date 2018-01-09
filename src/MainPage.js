import React, { Component } from 'react'
import {
    StyleSheet,
    ActivityIndicator,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import { robotoWeights } from 'react-native-typography'
import Banner from './components/Banner'
import Destionations from './components/Destionations'
import Reviewers from './components/Reviewers'

class MainPage extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        ...robotoWeights.bold, fontSize: 24, color: '#000000'
                    }}>Travels</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Banner />
                </View>
                <View style={{ flex: 2.5 }}>
                    <Destionations />
                </View>
                <View style={{ flex: 3.5 }}>
                    <Reviewers />
                </View>
            </View>
        )
    }
}

export default MainPage