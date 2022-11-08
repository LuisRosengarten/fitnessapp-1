import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { FONTS } from '../consts/Theme'
import { Svg, LinearGradient, Stop, Defs, Rect } from 'react-native-svg'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function GroupCard({
  onClick,
  name,
  members = []
}) {
  return (
    <View 
    style={{
      marginTop: '5%', 
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 10,
      shadowOpacity: '0.1',
      padding: 15,
      width: '100%'
    }}
  >
    <View style={{ width: '45%' }}>
      <Text style={{
        fontWeight: '700',
        fontSize: 20
      }}>{name}</Text>
      <Text style={{
        marginTop: '10%',
        fontWeight: '500',
        fontSize: 15
      }}>Mitglieder</Text>
      <View style={{
        marginTop: '5%',
        flexDirection: 'row'
      }}>
        {members.map((m) => {
          return (
            <TouchableOpacity key={m.toString()} style={{
              width: 50,
              height: 50,
              backgroundColor: '#F2F1F1',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginLeft: '3%',
            }}>
              <ImageBackground
              source={{ uri: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg' }} 
              resizeMode='cover'
              resizeMethod='scale'
              style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
              imageStyle={{ borderRadius: 20 }}
              >
              </ImageBackground>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
    <View style={{ width: '45%', alignItems: 'flex-end', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={onClick}
      >
        <Ionicons name='arrow-forward-circle' size={64} color='#A4C2A5' />
      </TouchableOpacity>
    </View>
  </View>
  )
}