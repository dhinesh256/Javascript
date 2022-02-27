import React, {useEffect} from 'react';
import {StyleSheet, View,Text, FlatList,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactData} from '../actions/contactActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contactReducers.user);
  const loading = useSelector(state => state.contactReducers.loading);
  
  //console.log(users[3].name)
  useEffect(() => {
    dispatch(fetchContactData({}));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.name}>
          {`Name : ${item.name}`}
          {'\n'}
          {`Phone : ${item.phone}`}
      </Text>
    </View>
  );

  return (

    <View style={styles.container}>
      <Text style={styles.header}>
        {'CONTACTS'}
      </Text>

      <FlatList data={users} renderItem={renderItem} testID='test-flist' keyExtractor={item => item.id.toString()}/>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 8,
    justifyContent: 'center',
    color:'red',
    
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 8,
    color: 'blue',
    backgroundColor : 'yellow',
    padding: 15
  }
});

export default HomeScreen;