import { Picker } from "@react-native-picker/picker";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, Route } from '@react-navigation/native';
import { useState } from 'react';

export default function Courses({ navigation }: { navigation: any }) {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']}
            style={{ flex: 1 }}
        >
            <View>
                <Text style={styles.displayText}>Welcome to our course</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue,) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select a course" value="" />
                    <Picker.Item label="First Aid" value="First Aid" />
                    <Picker.Item label="Sewing" value="Sewing" />
                    <Picker.Item label="LandScaping" value="LandScaping" />
                    <Picker.Item label="Life Skills" value="Life Skills" />
                    <Picker.Item label="Cooking" value="Cooking" />
                    <Picker.Item label="Child Minding" value="Child Minding" />
                    <Picker.Item label="Garden Maintenance" value="Garden Maintenance" />
                </Picker>
                <Text style={styles.displayText}>Description of {selectedValue}</Text>
                {selectedValue === `First Aid` && <Text style={styles.displayText}>Fees:R1500 Purpose:To provide first aid awareness and basic life support Content:Wound and bleeding,Burns and Fractures,Emergency scence management,Cardio-Pulmonary Resuscitation(CPR),Respiratory distress e.g Choking,blocked airwayDuration:Six Months</Text>}
                {selectedValue === `Sewing` && <Text style={styles.displayText}>Fees:R1500 Purpose:To provide alterations and new garment tailoring services Content:types of stiches,Threading a sewing machine,Sewing buttons,zips,hems and seams,Alterations,Designing and sewing new garements Duration:Six Months</Text>}
                {selectedValue === `LandScaping` && <Text style={styles.displayText}>Fees:R1500 Purpose:To Provide Landscaping services for new and established gardens Content:Indigenous and exotics plants and trees,Fixed structures(fountains,statues,benches,tables,built-in braai),Balancing of plants and trees in a garden,Aesthetics of plant shapes and colours,Garden layout Duration:Six Months</Text>}
                {selectedValue === `Life Skills` && <Text style={styles.displayText}>Fees:R1500 Purpose:To provide skills tonavigate basic life necessities Content:Opening a bank account,Basic labour law (know your rights),Basic reading and writing literacy,Basic numeric literacy Duration: Six Months</Text>}
                {selectedValue === `Cooking` && <Text style={styles.displayText}>Fees:R750 purpose:To prepare and cook nutritious family meals Content:Nutritional requirements for a healthy body,Types of protein,carbohydrates and vegetables,Planning meals,Tasty and nutritious Duration: Six-weeks</Text>}
                {selectedValue === `Child Minding` && <Text style={styles.displayText}>Fees:R750 Purpose:To provide basic child and baby care Content:birth to six-month old baby needs,seven-month to one year old needs,Toddler needs,Educational toys Duration:Six-weeks</Text>}
                {selectedValue === `Garden Maintenance` && <Text style={styles.displayText}>Fees:R750 Purpose:To provide basic knowledge of wateringm pruning and planting in a domestic garden Content:Water restrictions and the watering requirements of indigenous and exotic plants,Pruning and propagation of plants,Planting techniques for different plant types Duration:Six-weeks</Text>}
                <StatusBar style="auto" />
                <Button title="Next" color="black" onPress={() => navigation.navigate('Apply')} />
            </View>
        </LinearGradient>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    picker: {
        width: 200,
        height: 50,
        marginBottom: 20,
    },
    displayBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    displayText: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});
