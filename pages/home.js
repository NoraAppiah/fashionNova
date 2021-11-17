import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import db from "../db";
const size = Dimensions.get("screen");

export default function HomePage({navigation}){
    return <View style={{flex: 1}}>
        <View style={{backgroundColor: "rgba(196, 155, 156, 0.5)"}}>
            <SafeAreaView edges={["top"]} />
            <View style={[styles.homeHeader]}>
                <Ionicons size={25} name="ios-menu-outline" />
                <Text style={{fontSize: 20, fontWeight: "bold"}}>HOME</Text>
                <Ionicons size={25} name="ios-cart-outline" />
            </View>
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                {db.items.map((item, index)=> 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate("productdetail", {item})} key={index}>
                    <View style={[styles.product, {marginRight: (index+1)%2 === 0 ? 0 : 10}]}>
                        <Image source={item.images[0].source} style={{width: "100%", height: 220}} />
                        <View style={{padding: 5}}>
                            <Text style={{fontSize: 14, marginBottom: 2, fontWeight: "bold", textTransform: "uppercase"}}>{item.name}</Text>
                            <Text style={{fontSize: 11, marginBottom: 3 }}>{item.shortDesc}</Text>
                            <Text style={styles.originalPrice}>&cent;{item.price.toFixed(2)}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                )}
            </View>
        </ScrollView>
        <View style={styles.bottomNavigation}>
            <Ionicons name="ios-home-outline" size={25} />
            <Ionicons name="ios-search" size={25} />
            <Ionicons name="ios-cart-outline" size={25} />
            <Ionicons name="ios-heart-outline" size={25} />
            <Ionicons name="ios-person-circle-outline" size={25} />
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
    bannerArea: {
        paddingBottom: 10,
    },
    banner: {
        width: "100%",
        height: 200
    },
    bannerText: {
        position: "absolute",
        right: 0,
        padding: 30,
        top: 25,
        backgroundColor: "#ffffff70"
    },
    product: {
        width: (size.width - 50)/2,
        marginTop: 10
    },
    originalPrice: {
        fontSize: 14, 
        fontWeight: "bold"
    },
    bottomNavigation: {
        padding: 20,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(196, 155, 156, 0.5)"
    }
})