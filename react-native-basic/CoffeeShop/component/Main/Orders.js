import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class OrdersScreen extends Component {
    render() {
        return (
            <View>
                <Text>SPE</Text>
            </View>
        );
    }
}
// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { Swiper } from 'react-native-swiper';

// import capuchino from '../../assets/Items/capuchino.jpg';
// import cooktail from '../../assets/Items/cooktail.jpg';
// import miti from '../../assets/Items/miti.jpg';
// import hongTra from '../../assets/Items/hongTra.jpg';

// const { height } = Dimensions.get('window');

// export default class OrdersScreen extends Component {
//     render() {
//         const { wrapper, textStyle, imageStyle } = styles;
//         return (
//             <Swiper style={wrapper}>
//                 <View style={{ flex: 1, justifyContent: 'center' }} >
//                     <Text style={textStyle}>SPECIAL DRINKS</Text>
//                 </View>
//                 <Swiper >
//                     <Image source={capuchino} style={imageStyle} />
//                     <Image source={cooktail} style={imageStyle} />
//                     <Image source={miti} style={imageStyle} />
//                     <Image source={hongTra} style={imageStyle} />
//                 </Swiper>
//             </Swiper>
                
//         );
//     }
// }

// const styles = StyleSheet.create({
//     wrapper: {
//         height: height * 0.3,
//         backgroundColor: '#FFF',
//         margin: 10,
//         shadowColor: '#2E272B',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.2,
//         padding: 10,
//         paddingTop: 10
//     },
//     textStyle: {
//         fontSize: 20,
//         color: '#AFAEAF',
//     },
//     imageStyle: {
//         width: 150,
//         height: 300
//     }
// });

