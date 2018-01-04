import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import {fetchBanner} from "../actions";

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: { color: '#fff', fontSize: 30, fontWeight: 'bold' }
})

class Banner extends Component {

    componentDidMount(){
        this.props.dispatch(fetchBanner())
    }

    render(){
        return (
            <Swiper
                activeDotColor={'#2c3e50'}
                dotColor={'#ffffff'}
                autoplay
                showsButtons={false}>
                {this.props.banners.map((data, index) => (
                    <View style={styles.slide} key={index}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 5
                            }}
                            source={{ uri: data.image }}
                        />
                    </View>
                ))}
            </Swiper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banners: state.banners.items
    }
}

export default connect(mapStateToProps)(Banner)