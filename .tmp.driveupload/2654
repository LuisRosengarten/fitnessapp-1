import { Text, TouchableOpacity, View, ImageBackground, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase/firebase-config'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NextTrainingCard from '../components/NextTrainingCard'
import { FONTS } from '../consts/Theme'
import DountChart from '../components/DountChart'


const HomeScreen = () => {

  const navigation = useNavigation()
  const DATA = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
    .catch(err => alert(err.message))
  }

  const renderItem = ({ item }) => (
    <Text>{item.id}</Text>
  )

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFF', padding: 0, width: '100%' }}
    >
        <StatusBar backgroundColor='#F1F2EB'/>
        <View style={{flex: 0.1, backgroundColor: '#FFF', flexDirection: 'row' }}>
            <View style={{ 
                flex: 1, 
                justifyContent: 'center',
                paddingLeft: '5%'
            }}>
                <Text style={{
                    color: '#878889',
                    fontSize: 15
                }}>Hallo, Luis</Text>
                <Text style={{
                    color: '#A4C2A5',
                    fontWeight: '700',
                    fontSize: 19
                }}>Dein Zustand</Text>
            </View>
            <View style={{ 
                flex: 0.2, 
                alignItems: 'flex-end', 
                justifyContent: 'center',
                paddingRight: '5%' 
            }}>
                <TouchableOpacity style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#F2F1F1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20
                }}>
                    <ImageBackground
                        source={{uri: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg'}} 
                        resizeMode='cover'
                        resizeMethod='scale'
                        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
                        imageStyle={{ borderRadius: 20 }}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            flex: 0.85,
            marginTop: '5%'
        }}>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 0,
                width: '100%',
            }}>
                <View style={{ 
                    flex: 1, 
                    flexDirection: 'column',
                }}>
                    <Text style={[FONTS.h1, {paddingLeft: '5%'}]}>Deine Ziele</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 0.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <DountChart perecentage={80} max={100} ext='KG' color='#566246' />
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 15
                            }}>Körpergewicht</Text>
                        </View>
                        <View style={{
                            flex: 0.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <DountChart perecentage={40} max={60} ext='KG' color='#566246' />
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 15
                            }}>Bankdrücken</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            flex: 0.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flex: 0.4,
                                alignItems: 'flex-start',
                                paddingLeft: '5%'
                            }}>
                                <DountChart max={3} perecentage={3} ext='/ 3' radius={50} />
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '900' }}>Trainings diese Woche:</Text>
                                    <Text style={{ fontWeight: '200', fontSize: 20 }}> 3</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '900' }}>Trainingsziel diese Woche:</Text>
                                    <Text style={{ fontWeight: '200', fontSize: 20 }}> 3</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 0.7,
                    paddingLeft: '5%'
                }}>
                    <Text style={FONTS.h1}>Nächste Trainings</Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>     
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
