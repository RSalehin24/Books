import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import axios from 'axios';

import Styles from './Styles';

const PostBooks = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [url, setURL] = useState('');

    const options = {
        method: 'POST',
        url: 'https://book4.p.rapidapi.com/',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'x-rapidapi-host': 'book4.p.rapidapi.com',
          'x-rapidapi-key': '32387ed580msh39b0df6ab10d5edp1f0bc3jsn07d3d5b15939'
        },
        data: {
            id: uuid.v4(),
            title: title,
            author: author,
            price: price,
            detail: detail,
            url: url,
        }
      };

    const onPress = () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        navigation.navigate('GetBooks');
    }

    return(
        <>
            <SafeAreaView style={Styles.safeArea}>
                <View style={Styles.title}>
                <Text style={Styles.titleText}>Books</Text>
                </View>
                <View style={Styles.container}>
                    <TextInput 
                        style={Styles.input}
                        onChangeText={(title) => setTitle(title)}
                        placeholder='Title'
                    />
                    <TextInput 
                        style={Styles.input}
                        onChangeText={(author) => setAuthor(author)}
                        placeholder='Author Name'
                    />
                    <TextInput 
                        style={Styles.input}
                        onChangeText={(price) => setPrice(price)}
                        placeholder='Price'
                    />
                    <TextInput 
                        style={Styles.input}
                        onChangeText={(detail) => setDetail(detail)}
                        placeholder='Description'
                    />
                    <TextInput 
                        style={Styles.input}
                        onChangeText={(url) => setURL(url)}
                        placeholder='Image URL'
                    />
                    <Text>
                    </Text>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.textColorWhite} onPress={onPress}>
                            Post Book
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default PostBooks;