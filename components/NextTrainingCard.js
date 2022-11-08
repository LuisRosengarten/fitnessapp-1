import { Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import { FONTS } from '../consts/Theme'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function NextTrainingCard({
    date = '28.10.2022',
    category = 'Brusttraining',
    time = '22:00 - 23:30',
    members = [
        {
            name: 'test',
            img: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg'
        },
        {
            name: 'test',
            img: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg'
        },
        {
            name: 'test',
            img: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg'
        }
    ],
    margin,
}) {
    return (
        <View style={{
            width: 200,
            height: 160,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 0 },
            backgroundColor: 'white',
            marginTop: '5%',
            margin: 15
        }}>
            <View style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#A4C2A5',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingLeft: '5%'
            }}>
                <Ionicons name='calendar' size={32} color='#FFF' />
                <Text style={{
                    marginLeft: '5%',
                    color: '#F1F2EB',
                    fontWeight: '500'
                }}>{date}</Text>
            </View>
            <View style={{
                flex: 0.6,
                marginTop: '5%',
                paddingLeft: '5%'
            }}>
                <Text style={{
                    fontWeight: '800',
                    fontSize: 20,
                    color: '#4A4A48'
                }}>{category}</Text>
                <Text style={{
                    fontWeight: '200',
                    fontSize: 15,
                    color: '#566246'
                }}>{time}</Text>
            </View>
            <View style={{
                flex: 0.8,
                flexDirection: 'row',
                marginTop: '5%',
                paddingLeft: '5%'
            }}>
                {
                    members.map((member, i) => {
                        i++
                        if (i <= 1 && i <= 3) {
                            return (
                                <TouchableOpacity key={i} style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#F2F1F1',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 20
                                }}>
                                    <ImageBackground
                                    source={{uri: member.img}} 
                                    resizeMode='cover'
                                    resizeMethod='scale'
                                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
                                    imageStyle={{ borderRadius: 20 }}
                                    >
                                    </ImageBackground>
                                </TouchableOpacity>
                            )
                        } else if (i <= 3) {
                            return (
                                <TouchableOpacity key={i} style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#F2F1F1',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 20,
                                    marginLeft: '3%'
                                }}>
                                    <ImageBackground
                                    source={{uri: member.img}} 
                                    resizeMode='cover'
                                    resizeMethod='scale'
                                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
                                    imageStyle={{ borderRadius: 20 }}
                                    >
                                    </ImageBackground>
                                </TouchableOpacity>
                            ) 
                        }
                    })
                }
            </View>
        </View>
    )
}