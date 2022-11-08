import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase-config'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setSignedIn] = useState(false)
    const navigation = useNavigation()

    /*const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((re) => {
            setSignedIn(true)
        })
    }*/

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setSignedIn(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Tab')
            }
        })

        return unsubscribe
    }, [])

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Email'
            value={email.toString()}
            onChangeText={text => setEmail(text.toString())}
            style={styles.input}
            textContentType='emailAddress'
        />
        <TextInput 
            placeholder='Password'
            value={password.toString()}
            onChangeText={text => setPassword(text.toString())}
            style={styles.input}
            secureTextEntry
            textContentType='password'
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleSignIn}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
})