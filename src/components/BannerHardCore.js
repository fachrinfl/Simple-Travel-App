import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    slide: { flex: 1, justifyContent: 'center', alignItems: 'center'},
    text: { color: '#fff', fontSize: 30, fontWeight: 'bold' }
})

class Banner extends Component {

    state = {
        data_images: [
            {
                image_link: 'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/europe/tmb_06'
            },{
                image_link: 'https://i.imgur.com/0gwQmWl.jpg'
            },{
                image_link: 'https://i.pinimg.com/originals/54/9b/e0/549be05621b28ab36df4aa5345304fb0.jpg'
            }
        ]
    }

    render(){
        return (
            <Swiper
                dotColor={'#ffffff'}
                autoplay
                showsButtons={false}>
                {this.state.data_images.map((data, index) => (
                    <View style={styles.slide} key={index}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: data.image_link }}
                        />
                    </View>
                ))}
            </Swiper>
        )
    }
}

export default Banner