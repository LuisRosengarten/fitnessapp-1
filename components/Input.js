import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({
    label = 'Test'
}) {
  return (
    <View style={{ marginBottom: 20, width: '100%' }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer]}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: '#D8DAD3'
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#D8DAD3',
        flexDirection: 'row',
        marginHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        width: '100%'
    }
})