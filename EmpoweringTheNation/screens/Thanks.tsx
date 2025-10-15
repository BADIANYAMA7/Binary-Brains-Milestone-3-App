import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, Route } from '@react-navigation/native';
import { useState } from 'react';

export default function ({ route, navigation }: { navigation: any, route: any }) {
    const Namefecth = route.params.NameSend
    const Surnamefecth = route.params.SurnameSend
    const Numberfecth = route.params.NumberSend
    const IDfecth = route.params.IDSend
    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']}
            style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.WelcomeText}> Name:{Namefecth}</Text>
                <Text style={styles.WelcomeText}> Surname:{Surnamefecth}</Text>
                <Text style={styles.WelcomeText}> Number:{Numberfecth}</Text>
                <Text style={styles.WelcomeText}> ID:{IDfecth}</Text>
                <Text style={styles.Normaltext}>
                    Thank you for registering with us! 🎉 You can now proceed to your course selection and start planning your learning journey.
                    We’re excited to have you on board!
                    Best regards, Empowering The Nation</Text>

                <Button title='Next'
                    color="black"
                    onPress={() => {
                        navigation.navigate('Course')
                    }}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    WelcomeText: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        backgroundColor: "white",
        alignContent: "center",
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "center",
        display: 'flex'
    },
    Normaltext: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        alignContent: 'center',
        fontSize: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
        height: 150,
        width: 300,
        fontFamily: 'serif',



    },



})