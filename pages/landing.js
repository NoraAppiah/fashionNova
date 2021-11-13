import React from 'react';
import { Dimensions, Image, View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import image from '../assets/onboarding.jpg';

const size = Dimensions.get("screen");

export default function LandingPage ({navigation}){
    return <View style={{justifyContent: "flex-end", flex: 1}}>
        <Image source={image} style={{position: "absolute", left: 0, top: 0, height: size.height, width: size.width, resizeMode: "cover"}} />
        <View style={styles.buttonsBox}>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate("homepage")}>
                <View style={{...styles.button, marginBottom: 20}}>
                    <Text style={styles.buttonText}>Woman</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate("homepage")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Man</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
}

const styles = StyleSheet.create({
    buttonsBox: {
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    button: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        shadowColor: "#000",
        shadowRadius: 10,
        shadowOffset: {width: 10, height: 20},
        shadowOpacity: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})