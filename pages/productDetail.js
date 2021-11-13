import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from '@expo/vector-icons';
import product from '../assets/product.png';

const size = Dimensions.get("screen");

export default function ProductDetailPage({navigation}){
    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
            <TouchableWithoutFeedback onPress={navigation.goBack}>
                <Ionicons size={25} name="ios-chevron-back" />
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>DETAILS</Text>
            <Ionicons size={25} name="ios-cart-outline" />
        </View>
        <Image source={product} style={{resizeMode: "cover", height: size.height * 0.6, width: size.width}} />
        <View style={{padding: 20, flex: 1}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 17, color: "#aaa", fontWeight: "bold"}}>&cent; 25.00 
                        <Text style={{paddingLeft: 10, color: "orangered"}}>  &cent; 15.00</Text>
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>SPIRITIN CAMEL AND CREAM STRIPE</Text>
                </View>
                <Ionicons name="ios-heart-outline" size={30} />
            </View>
            <View style={{flex: 1}}/>
            <View style={{padding: 20, backgroundColor: "orangered", alignItems: "center"}}>
                <Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}>Add to shopping bag</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    homeHeader: {
        flexDirection: "row", 
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: "center"
    },
})