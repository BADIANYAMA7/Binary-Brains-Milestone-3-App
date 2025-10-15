import { Picker } from "@react-native-picker/picker";
import { StatusBar } from 'expo-status-bar';
import CheckBox from "@react-native-community/checkbox";
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, Route } from '@react-navigation/native';
import { useState } from 'react';
import { linear } from "react-native-reanimated";
import { CheckBoxBase } from '@react-native-community/checkbox';
import javascript from "./javascript";


export default function apply() {
    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']}
            style={{ flex: 1 }}>
            <View style={style.body}>
                <Text style={style.texthere}>Apply For Courses</Text>
                <Text style={style.texthere}> Enter The Courses You want to Pursue</Text>
                <Text style={style.texthere}>Enter the correct courses below(FIRSTAID,SEWING,COOKING,GARDEN,LIFESKILLS,CHILDMINDING,LANDSCAPING)</Text>
                <TextInput style={style.texthere}
                    placeholder="Enter the First course "
                    autoCapitalize="characters"
                    testID="first"
                ></TextInput>
                <TextInput style={style.texthere}
                    placeholder="Enter the Second course "
                    autoCapitalize="characters"
                    testID="second"
                ></TextInput>
                <TextInput style={style.texthere}
                    placeholder="Enter the Thrid course "
                    autoCapitalize="characters"
                    testID="third"
                ></TextInput>
                <TextInput style={style.texthere}
                    placeholder="Enter the Fourth course "
                    autoCapitalize="characters"
                    testID="fourth"
                ></TextInput>
                <TextInput style={style.texthere}
                    placeholder="Enter the fifth  course "
                    autoCapitalize="characters"
                    testID="fifth"
                ></TextInput>

                <Text testID="Fees">Total:</Text>
                <Text testID="Fees2">Discount:</Text>
                <Text testID="Fees3">Final Amount</Text>
                <Button title="See Total Amount"
                    color="black"
                    testID="Submit"
                    onPress={() => { }}
                />

                <Button title="Send Application"
                    color="black"
                    testID="Send"
                    onPress={() => { alert("Thank you for your registration. We will get back to you shortly.") }} />
                <StatusBar style="auto" />


            </View>
        </LinearGradient>
    )
}



const style = StyleSheet.create({
    body: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
    },


    texthere: {
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 20,
        textTransform: "uppercase",
        padding: 10,
        marginBottom: 10

    }

})