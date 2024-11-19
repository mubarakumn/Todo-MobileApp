import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Task({text, press}) {
    return (
        <View style={styles.taskWrapper} >
            <View style={styles.left}>
                <TouchableOpacity style={styles.square} />
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
            <TouchableOpacity style={styles.circle} onPress={press}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskWrapper: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        border: "black",
        borderRadius: 10,
        backgroundColor: "white",
      },
      left:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 5,
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: "#55bcf6",
        opacity: 0.4,
        borderRadius: 2,
      },
      text:{
        maxWidth: "80%",
      },
      circle: {
        width: 20,
        height: 20,
        borderColor: "#55bcf6",
        borderWidth: 2,
        borderRadius: 5, 
      }
})