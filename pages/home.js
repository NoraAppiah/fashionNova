import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import banner from '../assets/banner.jpg';

export default function HomePage(){
    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
            <Ionicons size={25} name="ios-menu-outline" />
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Home</Text>
            <Ionicons size={25} name="ios-menu-outline" color="transparent" />
        </View>
        <View style={styles.bannerArea}>
            <Image source={banner} style={styles.banner} />
            <View style={styles.bannerText}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>LOOK</Text>
                <Text style={{fontSize: 35, fontWeight: "bold"}}>LIKE</Text>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>A Star</Text>
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
    bannerArea: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    banner: {
        width: "100%",
        height: 200
    },
    bannerText: {
        position: "absolute",
        right: 20,
        padding: 30,
        paddingVertical: 20,
        top: 40,
        backgroundColor: "#ffffff70"
    }
})