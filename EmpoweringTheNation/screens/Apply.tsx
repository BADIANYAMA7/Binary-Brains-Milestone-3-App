import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const COURSE_PRICES: { [key: string]: number } = {
    FIRSTAID: 1500,
    SEWING: 1500,
    LIFESKILLS: 1500,
    LANDSCAPING: 1500,
    COOKING: 750,
    GARDEN: 750,
    CHILDMINDING: 750,
};

export default function Apply() {
    const [courses, setCourses] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
    });
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);

    const handleInputChange = (key: string, value: string) => {
        setCourses({ ...courses, [key]: value.toUpperCase() });
    };

    const calculateAmounts = () => {

        const enteredCourses = Object.values(courses)
            .map(c => c.trim().toUpperCase())
            .filter(c => c && COURSE_PRICES[c]);
        const uniqueCourses = Array.from(new Set(enteredCourses));
        const courseCount = uniqueCourses.length;


        let totalAmount = uniqueCourses.reduce((sum, course) => sum + COURSE_PRICES[course], 0);


        let discountPercent = 0;
        if (courseCount > 3) discountPercent = 15;
        else if (courseCount === 3) discountPercent = 10;
        else if (courseCount === 2) discountPercent = 5;

        let discountAmount = (totalAmount * discountPercent) / 100;
        let final = totalAmount - discountAmount;

        setTotal(totalAmount);
        setDiscount(discountAmount);
        setFinalAmount(final);
    };

    return (
        <LinearGradient colors={['#00FFD1', '#00FF66', '#66ffe6']} style={{ flex: 1 }}>
            <View style={style.body}>
                <Text style={style.texthere}>Apply For Courses</Text>
                <Text style={style.texthere}>Enter The Courses You want to Pursue</Text>
                <Text style={style.texthere}>
                    Enter the correct courses below (FIRSTAID, SEWING, COOKING, GARDEN, LIFESKILLS, CHILDMINDING, LANDSCAPING)
                </Text>
                <TextInput
                    style={style.texthere}
                    placeholder="Enter the First course"
                    autoCapitalize="characters"
                    testID="first"
                    value={courses.first}
                    onChangeText={text => handleInputChange('first', text)}
                />
                <TextInput
                    style={style.texthere}
                    placeholder="Enter the Second course"
                    autoCapitalize="characters"
                    testID="second"
                    value={courses.second}
                    onChangeText={text => handleInputChange('second', text)}
                />
                <TextInput
                    style={style.texthere}
                    placeholder="Enter the Third course"
                    autoCapitalize="characters"
                    testID="third"
                    value={courses.third}
                    onChangeText={text => handleInputChange('third', text)}
                />
                <TextInput
                    style={style.texthere}
                    placeholder="Enter the Fourth course"
                    autoCapitalize="characters"
                    testID="fourth"
                    value={courses.fourth}
                    onChangeText={text => handleInputChange('fourth', text)}
                />
                <TextInput
                    style={style.texthere}
                    placeholder="Enter the Fifth course"
                    autoCapitalize="characters"
                    testID="fifth"
                    value={courses.fifth}
                    onChangeText={text => handleInputChange('fifth', text)}
                />

                <Text testID="Fees">Total: {total}</Text>
                <Text testID="Fees2">Discount: {discount}</Text>
                <Text testID="Fees3">Final Amount: {finalAmount}</Text>
                <Button
                    title="See Total Amount"
                    color="black"
                    testID="Submit"
                    onPress={calculateAmounts}
                />

                <Button
                    title="Send Application"
                    color="black"
                    testID="Send"
                    onPress={() => {
                        alert("Thank you for your registration. We will get back to you shortly.");
                    }}
                />
                <StatusBar style="auto" />
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    body: {
        marginTop: 20,
        flex: 1,
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
});