import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import Card from '../../components/card/card';
const Main = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('job')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log('documentSnapshot', documentSnapshot);
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('Login');
      });
  };
  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>Data from Firebase</Text>
      <View style={styles.flatListView}>
        <FlatList data={users} renderItem={({item}) => <Card item={item} />} />
      </View>

      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default Main;
