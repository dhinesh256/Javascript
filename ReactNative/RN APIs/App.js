import React ,{useState,useRef} from 'react';
import {View,Text,Image,StyleSheet, Pressable ,
   ScrollView ,Switch, FlatList ,
    TextInput, BackHandler, Alert, DrawerLayoutAndroid, 
    Button, PermissionsAndroid ,ToastAndroid,
  TouchableWithoutFeedback,Keyboard ,KeyboardAvoidingView, 
  Dimensions, TouchableHighlight ,RefreshControl} from 'react-native';
import img from './loc-mark.png';
import uuid from'uuid'
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalExample from './components/ModalExample';

const App = () => {
  const [item,setItem] = useState(0)

  const [status, setstatus] = useState(false);
  const toggleSwitch = () => setstatus(previousState => !previousState);

  const [val , setVal] = useState([
    {id:uuid() , value : 'Home'},
    {id:uuid() , value : 'Tutorial'},
    {id:uuid() , value : 'Order'},
    {id:uuid() , value : 'About'},
    {id:uuid() , value : 'Contact'},
    {id:uuid() , value : 'Log in'},
    {id:uuid() , value : 'Home'},
    {id:uuid() , value : 'Tutorial'},
    {id:uuid() , value : 'Order'},
    {id:uuid() , value : 'About'},
    {id:uuid() , value : 'Contact'},
    {id:uuid() , value : 'Log in'},
    {id:uuid() , value : 'Home'},
    {id:uuid() , value : 'Tutorial'},
    {id:uuid() , value : 'Order'},
    {id:uuid() , value : 'About'},
    {id:uuid() , value : 'Contact'},
    {id:uuid() , value : 'Log in'}
   
  ])
  const Item = ({ title }) => ( 
    <View style={{padding:7}}>
      <Text style={{backgroundColor:'#ccf',fontSize:30,padding:7}}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.value} />
  );
    const backAction = () =>{
      Alert.alert('Hold on','Do you want to close the app?',
      [
        {
          text:'No',
          onPress:()=>null
        },
        {
          text:'Yes',
          onPress:()=>BackHandler.exitApp()
        }
      ])
      return true //if returns true , stays on same page
    }
  const backhandler = BackHandler.addEventListener("hardwareBackPress",backAction)
  const drawer = useRef(null)
  const navigationView = () =>{
      return(  
        <View style={{flex:1}}>
          <Button 
          title='close drawer'
          onPress={()=>drawer.current.closeDrawer()}
          />
          <FlatList 
          data = {val}
          renderItem = {renderItem} 
          // keyExtractor={item => item.id}
          >
          </FlatList>
        </View>
      )
  }
  const permissionReq = async() => {
    let granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title:'Interested',
        message:'permission required ',
        buttonNeutral:'later',
        buttonPositive:'yes',
        buttonNegative:'no'
      }
    )
    
    granted === PermissionsAndroid.RESULTS.GRANTED ? console.log('given permission') : 
             console.log('permission not granted yet')
  }
  const toastFunc=()=>{
    ToastAndroid.showWithGravity(
      "Congrats!!!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  const customTextButton = (
    <Icon.Button name="twitter" backgroundColor="#3b5998"
    onPress={()=>{alert("congrats!!!")}}>
      <Icon name='facebook' color='yellow'></Icon>
      <Text style={{ fontFamily: 'Arial', fontSize: 15 ,color:'white' }}>
         {`   Login with Twitter`}
      </Text>
    </Icon.Button>
    );

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  


  return (
    // <KeyboardAvoidingView
    //   behavior="height"
    //   style={styles.container}
    // >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={navigationView}>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}/>}
          >
        <View>  
            <Button
            title='drawer'
            onPress={()=>drawer.current.openDrawer()}
            />
        </View>
    <View style={styles.container}>
      
      <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img2}/>
      <Text style={styles.text}>Hello World</Text>

      <TouchableHighlight activeOpacity={0.5} underlayColor='black' onPress={() => alert('Pressed!')}>
        <Text style={{backgroundColor:'gold'}}> Touchable Highlight</Text>
      </TouchableHighlight>
      
      <Image source={img} style={styles.img}/>
      <TextInput  
      placeholder="Enter a number" 
      // autoFocus={true}
      style={styles.ip}></TextInput>
      
      {customTextButton}
      <Button title='seek permisson' onPress={permissionReq}/>
      <View style={{flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center'}}>
        <Text style={styles.one}>One</Text>
        <Text style={styles.two}>Two</Text>
        <Text style={styles.one}>Three</Text>
      </View>
      <Pressable onPress={() => {
          setItem((current) => current + 1);
        }} style={({ pressed }) => 
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'yellow'
          }
        }>
          <Text style={{fontSize:20,color:'red'}}>Press</Text>
      </Pressable>
      <Text >{item}</Text>

      <ScrollView style={{height:1000}}>
        <Text style={{fontSize:50 , backgroundColor:'#ccc'}}>
        Create native apps for Android and iOS using React
        React Native combines the best parts of native development 
        with React, a best-in-class JavaScript library for building user
        interfaces.Use a little—or a lot. 
        You can use React Native today in your existing Android and iOS
        projects or you can create a whole new app from scratch.
        </Text>
      </ScrollView>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Switch
        trackColor={{ false: "yellow", true: "green" }}
        thumbColor={status ? "red" : "blue"}
        onChange={toggleSwitch}
        value={status}
      />
      {(status ? <Text>Appear</Text> : <Text> </Text>)}

        <Button title='toast' onPress={toastFunc} />
        <ModalExample/>

    </View>
    </ScrollView>
    </DrawerLayoutAndroid>
    </TouchableWithoutFeedback>
    
    
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  text:{
    color:'red',
    fontSize:30
  },
  img:{
    height:40,
    width:40
  },
  img2:{
    height:100,
    width:100,
    borderRadius:100
  },
  ip:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  one:{
    backgroundColor:'skyblue',
    padding:20
  },
  two:{
    backgroundColor:'violet',
    padding:5
  }
})
export default App;