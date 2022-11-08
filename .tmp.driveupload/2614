import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { FONTS } from '../consts/Theme'
import { Svg, LinearGradient, Stop, Defs, Rect } from 'react-native-svg'
import React from 'react'

export default function UpcomingTrainingCard({
    count = 'Tag 1',
    people = [
        {
            img: 'C'
        },
        {
            img: 'L'
        }
    ],
    date= '23.10.2022',
    category = 'Brust & Arme',
    start = '16:30',
    end = '18:00',
    img = 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg'
}) {
  return (
    <View 
    style={{
      marginTop: '5%', 
      width: '100%',
      backgroundColor: 'white',
      flex: 0.9,
      flexDirection: 'column',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 10,
      shadowOpacity: '0.3',
      
    }}>
    <ImageBackground
      source={{uri: img}} 
      resizeMode='cover'
      resizeMethod='scale'
      style={{ width: '100%', height: '100%'}}
      imageStyle={{ borderRadius: 20 }}
    >
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
            <LinearGradient id="grad" x1="0" y1="-2.5" x2="-1" y2="0%">
                <Stop offset="0" stopColor='rgb(255, 255, 255)' stopOpacity={0.1}/>
                <Stop offset="1" stopColor='rgb(0,0,0)' stopOpacity={0.6}/>
            </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" rx={20}/>
    </Svg>

        <View style={{ padding: 20, width: '100%', height: '100%', borderRadius: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
            <View style={{ 
              flex: 1,
            }}>
              <View style={{
                height: 30,
                width: 95, 
                backgroundColor: '#CFECF6', 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: 15
              }}>
                <Text style={{ color: 'black', fontWeight: '700' }}>{date}</Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end',}}>
                {people.forEach((p) => {
                    console.log(p.img)
                        return (
                <View style={{ 
                    width: 30, 
                    height: 30, 
                    backgroundColor: '#F2F1F1', 
                    alignSelf: 'flex-end', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                    <Text>{p.img}</Text>
                </View>
                    )
                })}
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'transparent' }}>{date}</Text>
            <Text style={{ fontSize: 25, fontWeight: '900', marginTop: '3%', color: 'white' }}>{category}</Text>
            <Text style={{ fontSize: 15, fontWeight: '300', marginTop: '3%', color: 'white' }}>Start: {start} Ende: {end}</Text>
          </View>
        </View>
    </ImageBackground>
  </View>
  )
}