import React, {useState} from "react";
import { View, StyleSheet, Text, Image, Dimensions, TouchableWithoutFeedback, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from '@expo/vector-icons';
import { useCart } from "../hooks/cart";

const dimension = Dimensions.get("screen");

export default function ProductDetailPage({navigation, route: {params: {item}}}){
    const [color, setColor] = useState(item.images[0].color);
    const [image, setImage] = useState(item.images[0].source);
    const [size, setSize] = useState(item.sizes[0]);
    const {addToCart} = useCart();

    const handleAddToBag = ()=>{
        addToCart({
            name: item.shortDesc,
            price: item.price,
            color, image, size,
        });
        navigation.navigate("cartpage");
    }

    return <View style={{flex: 1}}>
        <View style={{backgroundColor: "rgba(196, 155, 156, 0.5)"}}>
            <SafeAreaView edges={["top"]} />
            <View style={styles.homeHeader}>
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <Ionicons size={25} name="ios-chevron-back" />
                </TouchableWithoutFeedback>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>DETAILS</Text>
                <Ionicons size={25} name="ios-cart-outline" />
            </View>
        </View>
        <ScrollView style={{flex: 1}}>
            <Image source={image} style={{resizeMode: "cover", height: dimension.height * 0.6, width: dimension.width}} />
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{paddingVertical: 15, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
                        <Text style={{fontSize: 12}}>{item.shortDesc}</Text>
                        <Text style={{fontSize: 15}}>&cent;{item.price.toFixed(2)}</Text>
                    </View>

                    <View style={{paddingVertical: 15, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
                        {item.images.map(img=> <TouchableWithoutFeedback onPress={()=> {setColor(img.color); setImage(img.source)}}>
                            <View style={{width: 50, height: 50, borderRadius: 50, alignItems: "center", justifyContent: "center", marginRight: 10, borderWidth: 2, borderColor: img.color ===color ? "#000" : "transparent",}}>
                                <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: img.color }} />
                            </View>
                        </TouchableWithoutFeedback>)}
                    </View>

                    <View style={{paddingVertical: 15, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
                        <Text style={{marginRight: 10}}>Select Size (UK):</Text>
                        {item.sizes.map(s=> <TouchableWithoutFeedback onPress={()=> setSize(s)}>
                            <View style={{width: 30, height: 30, borderRadius: 30, alignItems: "center", justifyContent: "center", marginRight: 10, borderWidth: 2, borderColor: s === size ? "#000" : "transparent",}}>
                                <Text>{s}</Text>
                            </View>
                        </TouchableWithoutFeedback>)}
                    </View>

                    <View style={{paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
                        <Text style={{fontSize: 14, lineHeight: 20}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, nihil! Perspiciatis quia, molestias, quibusdam harum non expedita saepe distinctio quo placeat, modi numquam accusantium beatae illum ducimus labore iusto facilis! Adipisci corporis sint tenetur esse! Corrupti, dolorem placeat dicta quibusdam voluptatem facilis suscipit error odio iure quia aperiam dolore amet.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableWithoutFeedback onPress={handleAddToBag}>
            <View style={{padding: 20, backgroundColor: "black", alignItems: "center"}}>
                <Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}>Add to shopping bag</Text>
            </View>
        </TouchableWithoutFeedback>
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