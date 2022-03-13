import React, {useState, useEffect} from 'react';
import { Text, View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import axios from "axios";
import Book from './Book';
import Styles from './Styles';

export default function GetBooks({ navigation }) {

  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://book4.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'book4.p.rapidapi.com',
      'x-rapidapi-key': '32387ed580msh39b0df6ab10d5edp1f0bc3jsn07d3d5b15939'
    }
  };  

  useEffect(()=>{
    axios.request(options).then(function (response) {
      setBooks(response.data.books);
     }).catch(function (error) {
       console.error(error);
     });
  }, [])

  console.log(books)

  const renderBook = ({ item }) => (
    <Book book={item} />
  );

  const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = (() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
  },[]);

  return (
    <>
      <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.title}>
          <Text style={Styles.titleText}>Books</Text>
        </View>
        <View style={Styles.container}>
          <FlatList
          data={books}
          renderItem={renderBook}
          keyExtractor={(item) => item.id}
          refreshControl={
              <RefreshControl
              refreshing={refreshing}
              />
          }
          />
        </View>
      </SafeAreaView>
    </>
  );
}