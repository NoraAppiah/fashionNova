import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import banner from '../assets/banner.jpg';
import product from '../assets/product.png';
const size = Dimensions.get("screen");

export default function HomePage({navigation}){
    const products = [0,1,3,4,5,6,7];

    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
            <Ionicons size={25} name="ios-menu-outline" />
            <Text style={{fontSize: 20, fontWeight: "bold"}}>HOME</Text>
            <Ionicons size={25} name="ios-menu-outline" color="transparent" />
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <View style={styles.bannerArea}>
                <Image source={banner} style={styles.banner} />
                <View style={styles.bannerText}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>LOOK</Text>
                    <Text style={{fontSize: 35, fontWeight: "bold"}}>LIKE</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>A Star</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                {products.map((item, index)=> 
                <TouchableWithoutFeedback onPress={()=> navigation.navigate("productdetail")} key={index}>
                    <View style={[styles.product, {marginRight: (index+1)%2 === 0 ? 0 : 10}]}>
                        <Image source={product} style={{width: "100%", height: 220}} />
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 5}}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Text style={styles.originalPrice}>&cent;25.00</Text>
                                <Text style={styles.price}>&cent;15.00</Text>
                            </View>
                            <Ionicons name="ios-heart-outline" size={20} />
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
        marginBottom: 10
    },
    originalPrice: {
        fontSize: 14, 
        color: "#aaa",
        marginRight: 5,
        fontWeight: "bold"
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "orangered"
    },
    bottomNavigation: {
        padding: 20,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})