import React, { Component } from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { robotoWeights } from 'react-native-typography'
import { connect } from 'react-redux'
import { fetchDestinations } from '../actions'

class Destionations extends Component {

    componentDidMount(){
        this.props.dispatch(fetchDestinations())
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        ...robotoWeights.light,
                        color: '#000000',
                        margin: 10,
                        fontSize: 18
                    }}>Top Destinations</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 10
                    }}
                >
                    {
                        this.props.destinations.map((data, index) => (
                            <Image
                                key={index}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 5,
                                    marginRight: 10,
                                }}
                                source={{ uri: data.image }}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        destinations: state.destinations.items
    }
}

export default connect(mapStateToProps)(Destionations)