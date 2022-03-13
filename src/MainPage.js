import React from 'react';
import { SafeAreaView, View, Button, Text } from 'react-native';

import Styles from './Styles';

const MainPage  = ({ navigation }) => {

    const handleOnPressPostBooks = () => {
        navigation.navigate('PostBooks');
    }

    const handleOnPressViewBooks = () => {
        navigation.navigate('GetBooks');
    }

    return(
        <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.title}>
          <Text style={Styles.titleText}>Books</Text>
        </View>
        <View style={Styles.container}>
            <Button
                title='View Books'
                onPress={handleOnPressViewBooks}
                color='#9999DD'
            />
            <Text>
            </Text>
            <Button
                title='Post Books'
                onPress={handleOnPressPostBooks}
                color='#9999DD'
            />
        </View>
      </SafeAreaView>
    )
}

export default MainPage;