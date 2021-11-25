import React , {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
const SignUp:FC = () => {
    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
        </View>
    )
}
export default SignUp
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent :'center',
        alignItems:'center'
    }
})