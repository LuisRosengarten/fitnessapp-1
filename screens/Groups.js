//IMPORTS
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, Modal, TextInput } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native-gesture-handler"
import GroupCard from "../components/GroupCard"
import { FONTS } from "../consts/Theme"
import Ionicon from '@expo/vector-icons/Ionicons'
import UpcomingTrainingCard from "../components/UpcomingTrainingCard"
import { useEffect, useState } from "react"
import DropDownPicker from 'react-native-dropdown-picker'
import { getGroups, getTypes } from "../firebase/firestore"

const GroupScreen = () => {

    //VARIBLES
    const [groupDocs, setGroupDocs] = useState([])

    const init = async () => {
        //Get groups from db
        const groups = await getGroups()
        setGroupDocs(groups)
    }

    init()

    const navigation = useNavigation()
    
    //FUNCTIONS
    const renderGroups = ({ item }) => (
        <GroupCard members={item.members} name={item.title} onClick={() => {
            navigation.navigate('detail', {
                name: item.title,
                num: item.id
            })
        }} />
    )

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <View style={{ flex: 1 }}>
                    <Text style={[FONTS.h1, { marginTop: '10%', paddingLeft: '5%' }]}>Deine Gruppen</Text>
                    <FlatList
                        data={groupDocs}
                        renderItem={renderGroups}
                        keyExtractor={item => item.id}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const DetailScreen = ({ route, navigation }) => {

    const { name } = route.params
    const [modalVisible, setModalVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [addType, setAddType] = useState('')
    const [addTypeSets, setAddTypeSets] = useState('')
    const [removeType, setRemoveType] = useState([
        { label: 'Brust & Arme', value: 'Brust & Arme' },
        { label: 'Brust & Arme', value: 'Brust & Arm' }
    ])
    const [removeDropdownOpen, setRemoveDropdownOpen] = useState(false)
    const [removeDropdownValue, setRemoveDropdownValue] = useState(null)
    const [addEx, setAddEx] = useState([
        { label: 'Brust & Arme', value: 'Brust & Arme' },
        { label: 'Brust & Arme', value: 'Brust & Arm' }
    ])
    const [addExDrop, setAddExDrop] = useState(false)
    const [addExVal, setAddExVal] = useState(null)
    const [remEx, setRemEx] = useState([
        { label: 'Brust & Arme', value: 'Brust & Arme' },
        { label: 'Brust & Arme', value: 'Brust & Arm' }
    ])
    const [remExDrop, setRemExDrop] = useState(false)
    const [remExVal, setRemExVal] = useState(null)
    const [remUe, setRemUe] = useState([
        { label: 'Brust & Arme', value: 'Brust & Arme' },
        { label: 'Brust & Arme', value: 'Brust & Arm' }
    ])
    const [remUeDrop, setRemUeDrop] = useState(false)
    const [remUeVal, setRemUeVal] = useState(null)
    const [remMi, setRemMi] = useState([
        { label: 'Brust & Arme', value: 'Brust & Arme' },
        { label: 'Brust & Arme', value: 'Brust & Arm' }
    ])
    const [remMiDrop, setRemMiDrop] = useState(false)
    const [remMiVal, setRemMiVal] = useState(null)

    const [types, setTypes] = useState([])

    const init = async () => {
        const types = await getTypes(route.params.num)
        setTypes(types)
    }

    init()

    const data = [
        {
            head: {
                id: '1234234',
                title: 'Brust & Arme',
                icon: 'bench-press.png',
                time: '90 Minuten',
                color: '#A4C2A5'
            },
            exercices: [
                {
                    id: '1234231',
                    title: 'Bankdrücken',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '35768',
                    title: 'Brustpresse',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '475930',
                    title: 'Butterfly',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '44759',
                    title: 'Bizeps-Curls',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '5968',
                    title: 'Trizeps-Curls',
                    icon: '',
                    time: '45 Minuten'
                }
            ]
        },
        {
            head: {
                id: '1234233',
                title: 'Beine & Bauch',
                icon: 'arm-muscle.png',
                time: '90 Minuten',
                color: '#566246'
            },
            exercices: [
                {
                    id: '1345678',
                    title: 'Beinpresse',
                    icon: '',
                    time: '30 Minuten'
                },
                {
                    id: '2345',
                    title: 'Squats',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '5667',
                    title: 'Waden-Dips',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '123',
                    title: 'Beinheben Dipstange',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '4367',
                    title: 'Beinheben hängend',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '234512',
                    title: 'Cable-Crunch',
                    icon: '',
                    time: '45 Minuten'
                }
            ]
        },
        {
            head: {
                title: 'Rücken & Schulter', // Min 10 Chars (Zeichen)
                icon: 'weightlifting.png',
                time: '90 Minuten',
                color: '#4A4A48'
            },
            exercices: [
                {
                    id: '1',
                    title: 'Planks',
                    icon: '',
                    time: '30 Minuten'
                },
                {
                    id: '12342345',
                    title: 'Schulter-Curls',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '874625',
                    title: 'Latziehen',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '43256',
                    title: 'Kurzhantel rundern',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '293458',
                    title: 'Rudermaschiene',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '30304',
                    title: 'Schulterdrücken',
                    icon: '',
                    time: '45 Minuten'
                },
                {
                    id: '3489743',
                    title: 'Nacken',
                    icon: '',
                    time: '45 Minuten'
                }
            ]
        }
    ]

    const planList = () => {

        let arrays = []

        data.forEach(item => {
            arrays.push(item.exercices.length)
        })

        const longest = Math.max(...arrays)

        data.forEach(item => {
            if (item.exercices.length < longest) {
                for (let i = item.exercices.length; i < longest; i++) {
                    item.exercices.push({ title: '', icon: '', time: '', id: `${Math.random(100, 100000)}` })
                }
            }
        })


        return data.map((item, id) => {
            if (id >= 1) {
                return (
                    <View key={item.head.id} style={{ flex: 1, flexDirection: 'column', marginLeft: '5%' }}>
                        <TouchableOpacity
                        activeOpacity={1}
                        onLongPress={() => setDeleteVisible(!deleteVisible)}
                        style={{ 
                            flex: 1, 
                            backgroundColor: item.head.color, 
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.15,
                            shadowRadius: 10,
                            padding: 10
                        }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={{
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    top: -10,
                                    right: -15,
                                    position: 'absolute',
                                    display: !deleteVisible ? 'none' : 'flex'
                                }}
                            >
                                <Ionicon
                                    style={{
                                        shadowColor: '#000',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        shadowOffset: { width: 0, height: 0 },
                                    }}
                                    name='close-circle' color={'#FFF'} 
                                    size={32}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontWeight: '900',
                                fontSize: 17,
                                color: '#FFF',
                                textAlign: 'center'
                            }}>{item.head.title}</Text>
                            <Image source={ item.head.icon } style={{ width: 40, height: 40, tintColor: '#FFF', marginTop: '10%' }} />
                            <Text style={{
                                fontWeight: '200',
                                color: '#FFF',
                                marginTop: '10%'
                            }}>{item.head.time}</Text>
                        </TouchableOpacity>
                        { item.exercices.map((ex) => {
                            if (ex.title === '') {
                                return (
                                    <TouchableOpacity
                                    activeOpacity={1}
                                    onLongPress={() => setDeleteVisible(!deleteVisible)}
                                    key={ex.id} style={{ 
                                        width: '100%',
                                        height: 80, 
                                        backgroundColor: '#FFF', 
                                        borderRadius: 25,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: '#FFF',
                                        borderWidth: 1.5,
                                        padding: 10,
                                        marginTop: '25%'
                                    }}>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 11,
                                            color: '#FFF',
                                            textAlign: 'center'
                                        }}>Bizeps Curls</Text>
                                        <Text style={{
                                            fontWeight: '200',
                                            color: '#FFF',
                                            marginTop: '10%'
                                        }}>30 Minuten</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <TouchableOpacity
                                    activeOpacity={1}
                                    onLongPress={()=> setDeleteVisible(!deleteVisible)}
                                    key={ex.id} style={{ 
                                        width: '100%',
                                        height: 80, 
                                        backgroundColor: '#F1F2EB', 
                                        borderRadius: 25,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: item.head.color,
                                        borderWidth: 1.5,
                                        padding: 10,
                                        marginTop: '25%'
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => setModalVisible(!modalVisible)}
                                            style={{
                                                alignItems: 'center',
                                                alignSelf: 'flex-end',
                                                top: -10,
                                                right: -15,
                                                position: 'absolute',
                                                display: !deleteVisible ? 'none' : 'flex'
                                            }}
                                        >
                                            <Ionicon
                                                style={{
                                                    shadowColor: '#000',
                                                    shadowOpacity: 0.5,
                                                    shadowRadius: 5,
                                                    shadowOffset: { width: 0, height: 0 },
                                                }}
                                                name='close-circle' color={'#FFF'} 
                                                size={32}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 11,
                                            color: '#4A4A48',
                                            textAlign: 'center'
                                        }}>{ex.title}</Text>
                                        <Text style={{
                                            fontWeight: '200',
                                            color: '#4A4A48',
                                            marginTop: '10%'
                                        }}>{ex.time}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                )
            } else {
                return (
                    <View key={item.head.id} style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity 
                        activeOpacity={1}
                        onLongPress={() => setDeleteVisible(!deleteVisible)}
                        style={{ 
                            flex: 1, 
                            backgroundColor: item.head.color, 
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.15,
                            shadowRadius: 10,
                            padding: 10
                        }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={{
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    top: -10,
                                    right: -15,
                                    position: 'absolute',
                                    display: !deleteVisible ? 'none' : 'flex'
                                }}
                            >
                                <Ionicon
                                    style={{
                                        shadowColor: '#000',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        shadowOffset: { width: 0, height: 0 },
                                    }}
                                    name='close-circle' color={'#FFF'} 
                                    size={32}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontWeight: '900',
                                fontSize: 17,
                                color: '#FFF',
                                textAlign: 'center'
                            }}>{item.head.title}</Text>
                            <Image source={ item.head.icon } style={{ width: 40, height: 40, tintColor: '#FFF', marginTop: '10%' }} />
                            <Text style={{
                                fontWeight: '200',
                                color: '#FFF',
                                marginTop: '10%'
                            }}>{item.head.time}</Text>
                        </TouchableOpacity>
                        { item.exercices.map((ex, id) => {
                            if (ex.title === '') {
                                return (
                                    <TouchableOpacity
                                    activeOpacity={1}
                                    onLongPress={() => setDeleteVisible(!deleteVisible)}
                                    key={ex.id} style={{ 
                                        width: '100%',
                                        height: 80,  
                                        backgroundColor: '#FFF', 
                                        borderRadius: 25,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: '#FFF',
                                        borderWidth: 1.5,
                                        padding: 10,
                                        marginTop: '25%'
                                    }}>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 11,
                                            color: '#FFF',
                                            textAlign: 'center'
                                        }}>Bizeps Curls</Text>
                                        <Text style={{
                                            fontWeight: '200',
                                            color: '#FFF',
                                            marginTop: '10%'
                                        }}>30 Minuten</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <TouchableOpacity
                                    activeOpacity={1}
                                    onLongPress={() => setDeleteVisible(!deleteVisible)}
                                    key={ex.id} style={{ 
                                        width: '100%',
                                        height: 80,  
                                        backgroundColor: '#F1F2EB', 
                                        borderRadius: 25,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: item.head.color,
                                        borderWidth: 1.5,
                                        padding: 10,
                                        marginTop: '25%'
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => setModalVisible(!modalVisible)}
                                            style={{
                                                alignItems: 'center',
                                                alignSelf: 'flex-end',
                                                top: -10,
                                                right: -15,
                                                position: 'absolute',
                                                display: !deleteVisible ? 'none' : 'flex'
                                            }}
                                        >
                                            <Ionicon
                                                style={{
                                                    shadowColor: '#000',
                                                    shadowOpacity: 0.5,
                                                    shadowRadius: 5,
                                                    shadowOffset: { width: 0, height: 0 },
                                                }}
                                                name='close-circle' color={'#FFF'} 
                                                size={32}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{
                                            fontWeight: '900',
                                            fontSize: 11,
                                            color: '#4A4A48',
                                            textAlign: 'center'
                                        }}>{ex.title}</Text>
                                        <Text style={{
                                            fontWeight: '200',
                                            color: '#4A4A48',
                                            marginTop: '10%'
                                        }}>{ex.time}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                ) 
            }
        })
    }

    const memberData = [
        {
            id: '2134234',
            image: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg',
            letter: 'LU'
        },
        {
            id: '2134231',
            image: 'https://barbend.com/wp-content/uploads/2017/06/BarBend-Feature-Image-1200-x-675-35.jpg',
            letter: 'CH'
        }
    ]

    const renderMembers = ({ item }) => {
        return (
            <TouchableOpacity style={{
                width: 70,
                height: 70,
                backgroundColor: '#F2F1F1',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                marginLeft: 10
            }}>
                <ImageBackground
                    source={{uri: item.image}} 
                    resizeMode='cover'
                    resizeMethod='scale'
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
                    imageStyle={{ borderRadius: 25 }}>
                        <Text style={{
                            color: '#FFF',
                            fontWeight: '900',
                            fontSize: 30
                        }}>{item.letter}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <>
        <StatusBar backgroundColor={'#566246'} barStyle='light-content' />
        <SafeAreaProvider style={{ backgroundColor: '#FFF' }}>
            <SafeAreaView style={{ flex: 0.001, backgroundColor: '#566246' }}>
                </SafeAreaView>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={modalVisible}
                    presentationStyle='formSheet'
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={{ 
                        flex: 0.2, 
                        backgroundColor: '#566246', 
                        borderBottomLeftRadius: 100, 
                        borderBottomRightRadius: 100,
                    }}>
                        <View style={{ flex: 0.6, alignItems: 'flex-end', paddingRight: '5%', marginTop: '5%' }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={{
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 0 },
                                    alignItems: 'center'
                                }}
                            >
                                <Ionicon
                                    style={{
                                        shadowColor: '#000',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        shadowOffset: { width: 0, height: 0 },
                                    }}
                                    name='close-circle' color={'#FFF'} 
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '5%' }}>
                            <Text style={[FONTS.h1, { color: '#FFF' }]}>{name}</Text>
                        </View>
                    </View>
                    <ScrollView style={{
                        flex: 1,
                        marginTop: '7%',
                    }}>
                        <Text style={[ FONTS.h1, { marginLeft: '5%' } ]}>Trainingsplan</Text>
                        <View style={{ flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: '3%', flexDirection: 'column' }}>
                            <View style={{ flex: 1, marginTop: '1%', paddingBottom: removeDropdownOpen ? '30%' : '5%' }}>
                                <Text style={{ fontWeight: '700' }}>Trainingstypen bearbeiten</Text>
                                <View style={{ flex: 1, marginTop: '5%', flexDirection: 'row', paddingBottom: remUeDrop ? '30%' : '0%' }}>
                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <View style={{
                                            width: '100%',
                                            backgroundColor: '#FFF',
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.05,
                                            shadowRadius: 10,
                                            flex: 0.3,
                                            marginTop: '2%',
                                            borderRadius: 15,
                                            flexDirection: 'row',
                                        }}>
                                            <TextInput 
                                                style={{
                                                    flex: 1,
                                                    color: '#000',
                                                    padding: '5%',
                                                }}
                                                placeholderTextColor='#4A4A48'
                                                selectionColor='#4A4A48'
                                                onTextInput={(value) => setAddType(value)}
                                                placeholder='Name des Trainingstyps' 
                                            />
                                        </View>
                                        <View style={{
                                            width: '100%',
                                            backgroundColor: '#FFF',
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.05,
                                            shadowRadius: 10,
                                            flex: 0.3,
                                            marginTop: '2%',
                                            borderRadius: 15,
                                            flexDirection: 'row',
                                        }}>
                                            <TextInput 
                                                style={{
                                                    flex: 1,
                                                    color: '#000',
                                                    padding: '5%',
                                                }}
                                                placeholderTextColor='#4A4A48'
                                                selectionColor='#4A4A48'
                                                onTextInput={(value) => setAddTypeSets(value)}
                                                placeholder='Sets Bsp.: 3x 10' 
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{
                                        flex: 0.2,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#4A4A48',
                                        borderRadius: 15,
                                        marginLeft: '5%'
                                    }}>
                                        <Ionicon name='add-circle' size={32} color='#FFF' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    flex: 0.3,
                                    marginTop: '2%',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                }}>
                                    <DropDownPicker 
                                        open={removeDropdownOpen}
                                        value={removeDropdownValue}
                                        items={removeType}
                                        setOpen={(open) => setRemoveDropdownOpen(open)}
                                        setValue={(value) => setRemoveDropdownValue(value)}
                                        setItems={(items) => setRemoveType(items)}
                                        style={{ flex: 1, borderWidth: 0 }}
                                        containerStyle={{
                                            flex: 1,
                                            borderWidth: 0,
                                            paddingLeft: '3%'
                                        }}
                                        placeholderStyle={{
                                            color: '#4A4A48'
                                        }}
                                        textStyle={{
                                            color: '#4A4A48'
                                        }}
                                        dropDownContainerStyle={{
                                            borderWidth: 0.5,
                                            borderColor: '#4A4A48'
                                        }}
                                        itemSeparator={true}
                                        itemSeparatorStyle={{
                                            backgroundColor: '#4A4A48',
                                            borderColor: '#4A4A48'
                                        }}
                                        placeholder='Trainingstyp auswählen'
                                    />
                                    <TouchableOpacity style={{
                                        flex: 0.184,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#4A4A48',
                                        borderTopRightRadius: 15,
                                        borderBottomRightRadius: 15
                                    }}>
                                        <Ionicon name='remove-circle' size={32} color='#FFF' />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={{ fontWeight: '700' }}>Übung hinzufügen</Text>
                            <View style={{ flex: 1, marginTop: '5%', flexDirection: 'row', paddingBottom: addExDrop ? '30%' : '5%' }}>
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{
                                        width: '100%',
                                        backgroundColor: '#FFF',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.05,
                                        shadowRadius: 10,
                                        flex: 0.3,
                                        marginTop: '2%',
                                        borderRadius: 15,
                                        flexDirection: 'row',
                                    }}>
                                        <TextInput 
                                            style={{
                                                flex: 1,
                                                color: '#000',
                                                padding: '5%',
                                            }}
                                            placeholderTextColor='#4A4A48'
                                            selectionColor='#4A4A48'
                                            onTextInput={(value) => setAddType(value)}
                                            placeholder='Übungsname' 
                                        />
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        backgroundColor: '#FFF',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.05,
                                        shadowRadius: 10,
                                        flex: 0.3,
                                        marginTop: '2%',
                                        borderRadius: 15,
                                        flexDirection: 'row',
                                    }}>
                                        <DropDownPicker 
                                            open={addExDrop}
                                            dropDownDirection='BOTTOM'
                                            value={addExVal}
                                            items={addEx}
                                            setOpen={(open) => setAddExDrop(open)}
                                            setValue={(value) => setAddExVal(value)}
                                            setItems={(items) => setAddEx(items)}
                                            style={{ flex: 1, borderWidth: 0 }}
                                            containerStyle={{
                                                flex: 1,
                                                borderWidth: 0,
                                                paddingLeft: '3%'
                                            }}
                                            placeholderStyle={{
                                                color: '#4A4A48'
                                            }}
                                            textStyle={{
                                                color: '#4A4A48'
                                            }}
                                            dropDownContainerStyle={{
                                                borderWidth: 0.5,
                                                borderColor: '#4A4A48'
                                            }}
                                            itemSeparator={true}
                                            itemSeparatorStyle={{
                                                backgroundColor: '#4A4A48',
                                                borderColor: '#4A4A48'
                                            }}
                                            placeholder='Trainingstyp auswählen'
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={{
                                    flex: 0.2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#4A4A48',
                                    borderRadius: 15,
                                    marginLeft: '5%'
                                }}>
                                    <Ionicon name='add-circle' size={32} color='#FFF' />
                                </TouchableOpacity>
                            </View>

                            <Text style={{ fontWeight: '700' }}>Übung löschen</Text>
                            <View style={{ flex: 1, marginTop: '5%', flexDirection: 'row', paddingBottom: remUeDrop ? '30%' : '15%' }}>
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View style={{
                                        width: '100%',
                                        backgroundColor: '#FFF',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.05,
                                        shadowRadius: 10,
                                        flex: 0.3,
                                        marginTop: '2%',
                                        borderRadius: 15,
                                        flexDirection: 'row',
                                        marginBottom: remExDrop ? '30%' : '0%'
                                    }}>
                                        <DropDownPicker 
                                            open={remExDrop}
                                            dropDownDirection='BOTTOM'
                                            value={remExVal}
                                            items={remEx}
                                            setOpen={(open) => setRemExDrop(open)}
                                            setValue={(value) => setRemExVal(value)}
                                            setItems={(items) => setRemEx(items)}
                                            style={{ flex: 1, borderWidth: 0 }}
                                            containerStyle={{
                                                flex: 1,
                                                borderWidth: 0,
                                                paddingLeft: '3%'
                                            }}
                                            placeholderStyle={{
                                                color: '#4A4A48'
                                            }}
                                            textStyle={{
                                                color: '#4A4A48'
                                            }}
                                            dropDownContainerStyle={{
                                                borderWidth: 0.5,
                                                borderColor: '#4A4A48'
                                            }}
                                            itemSeparator={true}
                                            itemSeparatorStyle={{
                                                backgroundColor: '#4A4A48',
                                                borderColor: '#4A4A48'
                                            }}
                                            placeholder='Trainingstyp auswählen'
                                        />
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        backgroundColor: '#FFF',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.05,
                                        shadowRadius: 10,
                                        flex: 0.3,
                                        marginTop: '2%',
                                        borderRadius: 15,
                                        flexDirection: 'row',
                                    }}>
                                        <DropDownPicker 
                                            open={remUeDrop}
                                            dropDownDirection='BOTTOM'
                                            value={remUeVal}
                                            items={remUe}
                                            setOpen={(open) => setRemUeDrop(open)}
                                            setValue={(value) => setRemUeVal(value)}
                                            setItems={(items) => setRemUe(items)}
                                            style={{ flex: 1, borderWidth: 0 }}
                                            containerStyle={{
                                                flex: 1,
                                                borderWidth: 0,
                                                paddingLeft: '3%'
                                            }}
                                            placeholderStyle={{
                                                color: '#4A4A48'
                                            }}
                                            textStyle={{
                                                color: '#4A4A48'
                                            }}
                                            dropDownContainerStyle={{
                                                borderWidth: 0.5,
                                                borderColor: '#4A4A48'
                                            }}
                                            itemSeparator={true}
                                            itemSeparatorStyle={{
                                                backgroundColor: '#4A4A48',
                                                borderColor: '#4A4A48'
                                            }}
                                            placeholder='Übung auswählen'
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={{
                                    flex: 0.2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#4A4A48',
                                    borderRadius: 15,
                                    marginLeft: '5%'
                                }}>
                                    <Ionicon name='add-circle' size={32} color='#FFF' />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={[ FONTS.h1, { marginLeft: '5%' } ]}>Mitglieder</Text>
                        <View style={{ flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: '3%', flexDirection: 'column' }}>
                            <View style={{ flex: 1, marginTop: '1%', paddingBottom: '30%' }}>
                                <Text style={{ fontWeight: '700' }}>Mitglieder bearbeiten</Text>
                                <View style={{
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    flex: 0.3,
                                    marginTop: '2%',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                }}>
                                    <TextInput 
                                        style={{
                                            flex: 1,
                                            color: '#000',
                                            padding: '5%',
                                        }}
                                        placeholderTextColor='#4A4A48'
                                        selectionColor='#4A4A48'
                                        onTextInput={(value) => setAddType(value)}
                                        placeholder='Name des Mitglieds' 
                                    />
                                    <TouchableOpacity style={{
                                        flex: 0.2,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#4A4A48',
                                        borderTopRightRadius: 15,
                                        borderBottomRightRadius: 15
                                    }}>
                                        <Ionicon name='add-circle' size={32} color='#FFF' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: '100%',
                                    backgroundColor: '#FFF',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 0 },
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    flex: 0.3,
                                    marginTop: '2%',
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                }}>
                                    <DropDownPicker 
                                        open={remMiDrop}
                                        value={remMiVal}
                                        dropDownDirection='BOTTOM'
                                        items={remMi}
                                        setOpen={(open) => setRemMiDrop(open)}
                                        setValue={(value) => setRemMiVal(value)}
                                        setItems={(items) => setRemMi(items)}
                                        style={{ flex: 1, borderWidth: 0 }}
                                        containerStyle={{
                                            flex: 1,
                                            borderWidth: 0,
                                            paddingLeft: '3%'
                                        }}
                                        placeholderStyle={{
                                            color: '#4A4A48'
                                        }}
                                        textStyle={{
                                            color: '#4A4A48'
                                        }}
                                        dropDownContainerStyle={{
                                            borderWidth: 0.5,
                                            borderColor: '#4A4A48'
                                        }}
                                        itemSeparator={true}
                                        itemSeparatorStyle={{
                                            backgroundColor: '#4A4A48',
                                            borderColor: '#4A4A48'
                                        }}
                                        placeholder='Name des Mitglieds'
                                    />
                                    <TouchableOpacity style={{
                                        flex: 0.184,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#4A4A48',
                                        borderTopRightRadius: 15,
                                        borderBottomRightRadius: 15
                                    }}>
                                        <Ionicon name='remove-circle' size={32} color='#FFF' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                <View style={{ 
                    flex: 0.3, 
                    backgroundColor: '#566246', 
                    borderBottomLeftRadius: 100, 
                    borderBottomRightRadius: 100,
                }}>
                    <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: '5%' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('overview')}
                                style={{
                                    width: 110,
                                    height: 40,
                                    backgroundColor: '#FFF',
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 0 },
                                    borderRadius: 9999,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <Ionicon name='arrow-back' size={32} />
                                <Text>Zurück</Text>
                            </TouchableOpacity>
                        </View>
                        <View style= {{ flex: 1, alignItems: 'flex-end', paddingRight: '5%' }}>
                            <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                                style={{
                                    width: 110,
                                    height: 40,
                                    backgroundColor: '#FFF',
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 0, height: 0 },
                                    marginLeft: '5%',
                                    borderRadius: 9999,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <Ionicon name='pencil' size={20} />
                                <Text> Bearbeiten</Text>
                            </TouchableOpacity>         
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[FONTS.h1, { color: '#FFF' }]}>{name}</Text>
                    </View>
                </View>
                <ScrollView key={'dsfse'} style={{ flex: 1, backgroundColor: '#FFF', flexDirection: 'column' }}>
                    <View style={{ flex: 1, paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                        <Text style={FONTS.h1}>Nächstes Training</Text>
                        <UpcomingTrainingCard />
                    </View>
                    <Text key={'sdfsdf'} style={[FONTS.h1, { paddingTop: '5%', paddingLeft: '5%' }]}>Trainingsplan</Text>
                    <View key={'sdkjfbsdkjf'} style={{ flex: 0.6, flexDirection: 'row', padding: '5%' }}>
                        {planList()}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[FONTS.h1, { marginLeft: '5%', marginTop: '5%' }]}>Mitglieder</Text>
                        <FlatList 
                            data={memberData}
                            renderItem={renderMembers}
                            keyExtractor={item => item.id}
                            horizontal
                            contentContainerStyle={{
                                paddingLeft: '3%',
                                marginTop: '5%'
                            }}
                        />
                    </View>
                </ScrollView>
        </SafeAreaProvider>
        </>
    )
}

const Stack = createNativeStackNavigator()

const Groups = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen component={GroupScreen} name='overview' options={{ headerShown: false }} />
            <Stack.Screen component={DetailScreen} name='detail' options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Groups