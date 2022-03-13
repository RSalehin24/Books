import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Styles from './Styles';

const Book = ({book}) => {
    return(
        <ImageBackground source={require('./pic.jpeg')} resizeMode="cover" style={Styles.image}>
            <Text style={Styles.textColor}>
                {book.title}
            </Text>
            <Text>
            </Text>
            <Text style={Styles.textColor}>
                {book.author}
            </Text>
            <Text style={Styles.textColor}>
               TK. {book.price}
            </Text>
            <View style={Styles.view}>
                <Text style={Styles.detail}>{book.detail}</Text>
            </View>
        </ImageBackground>
    )
}

export default Book;