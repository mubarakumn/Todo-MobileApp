import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/favicon.png'

export default function Splash() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
       <Image source={logo} style={styles.img}/>
      <Text style={styles.text} >Tasks are loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:80,
        height:80,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
    }
})