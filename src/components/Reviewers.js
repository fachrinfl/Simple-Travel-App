import React, { Component } from 'react'
import { View, Text, Image, ScrollView} from 'react-native'
import { robotoWeights } from 'react-native-typography'
import { connect } from 'react-redux'
import { fetchReviewers } from '../actions'

class Reviewers extends Component {

    componentDidMount(){
        this.props.dispatch(fetchReviewers())
    }

    render() {
        return (
            <View style={{ marginTop: 10, paddingRight: 10, paddingLeft: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        ...robotoWeights.light,
                        color: '#000000',
                        marginBottom: 10,
                        fontSize: 18
                    }}>Top Reviewers</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {

                        this.props.reviewers.map((data, index) => (
                            <Image
                                key={index}
                                style={{
                                    width: 125,
                                    height: 125,
                                    borderRadius: 5,
                                    marginBottom: 10
                                }}
                                source={{ uri: data.avatar }}
                            />
                        ))
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviewers: state.reviewers.items
    }
}

export default connect(mapStateToProps)(Reviewers)