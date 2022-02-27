import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default ButtonComp = ({name , navigation}) => {
    return(
    <View>
      <TouchableOpacity
          style={{
            backgroundColor: "#007aff",
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 5,
            margin: 5
          }}
          onPress={() => navigation.navigate(name)}
          // onPress={()=>alert("clicked")}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: '400',
              color: "#fff",
            }}
          >
            {`Go to ${name} example`}
          </Text>
        </TouchableOpacity>
    </View>
)}