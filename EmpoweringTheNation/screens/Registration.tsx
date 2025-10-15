import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

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
        display: 'flex',
    },
    TextIn: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: "space-between",
        marginBottom: 20
    }
});

export default function Secondscreen({ navigation }: { navigation: any }) {
    const [Name, Setfirstname] = useState("");
    const [Surname, SetSurname] = useState("");
    const [Number, SetNumber] = useState("");
    const [ID, SetID] = useState("");

    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.WelcomeText}>Registration</Text>
                <TextInput
                    style={styles.TextIn}
                    placeholder="Please Enter your Name"
                    autoCapitalize='words'
                    onChangeText={(text) => Setfirstname(text)}
                    value={Name}
                />
                <TextInput
                    style={styles.TextIn}
                    placeholder="Please Enter your Surname"
                    autoCapitalize='characters'
                    onChangeText={(text) => SetSurname(text)}
                    value={Surname}
                />
                <TextInput
                    style={styles.TextIn}
                    placeholder="Please Enter your Number"
                    keyboardType='numeric'
                    onChangeText={(text) => SetNumber(text)}
                    value={Number}
                />
                <TextInput
                    style={styles.TextIn}
                    placeholder="Please Enter your ID(Number)"
                    keyboardType='numeric'
                    onChangeText={(text) => SetID(text)}
                    value={ID}
                />
                <Button
                    title='Confirm'
                    color="black"
                    onPress={() => {
                        alert("Successful Sign in")
                        navigation.navigate('Thanks', {
                            NameSend: Name,
                            SurnameSend: Surname,
                            NumberSend: Number,
                            IDSend: ID,
                        });
                        Setfirstname('');
                        SetSurname('');
                        SetNumber('');
                        SetID('');
                        console.log(Name);
                    }}
                />
            </View>
        </LinearGradient>
    );
}