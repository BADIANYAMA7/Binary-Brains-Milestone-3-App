import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';



export default function FirstScreen({ navigation }: { navigation: any }) {
    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']}
            style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={require('../assets/Logo.png')} style={{ width: 200, height: 200, marginBottom: 20 }} />
                <Text>Powered By Binary Brains</Text>
                <Text style={styles.Normaltext}> Empowering the Nation is a community-driven app founded in 2022 with the mission to uplift lower-income individuals by helping them improve their skills. Through training, resources, and support, we aim to create opportunities, build confidence, and empower people to build better futures.</Text>
                <Button
                    color="black"
                    title="NEXT"
                    onPress={() => {
                        navigation.navigate('Registration')
                    }}
                />
                <StatusBar style="auto" />


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