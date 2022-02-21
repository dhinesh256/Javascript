import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadUser } from '../actions/userAction';

export function User(props) {

    React.useEffect(()=> {
        props.loadUser()
    },[])

    const userData = props.users 


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>
    
    {userData.map(user => (
    <View
    key={user.id}>

    <Text style={styles.userText}>{user.name}</Text>

    </View>
            ))}

    </View>
             
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 156,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 2,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'red'
  }
});

const mapStateToProps = ({ isLoading , users , error }) => ({
  isLoading , users, error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
