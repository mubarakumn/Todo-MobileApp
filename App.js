import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Splash from './Components/Splash';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [splash, setSplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    }, 5000)
  },[])

  return (
    <View style={styles.container}>
      {
        splash ? (
          <Splash/>
        ) : (
          <Home/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eded',
  },
});
