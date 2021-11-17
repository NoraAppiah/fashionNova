import React, { useMemo } from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../hooks/cart';

const CartPage = ({navigation})=>{
    const {cart} = useCart();
    const totalPrice = useMemo(()=>{
        let output = 0;
        cart.forEach(item=> output += (item.price * item.quantity));
        return output;
    }, [cart]);

    return <View style={{flex: 1}}>
        <View style={{backgroundColor: "rgba(196, 155, 156, 0.5)"}}>
            <SafeAreaView edges={['top']} />
            <View style={styles.homeHeader}>
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <Ionicons size={25} name="ios-chevron-back" />
                </TouchableWithoutFeedback>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>MY BAG</Text>
                <Ionicons size={25} name="ios-cart-outline" />
            </View>
        </View>
        <ScrollView style={{flex: 1, borderBottomColor: "#ddd", borderBottomWidth: 1}}>
            {cart.map(item=> <View style={{flexDirection: "row", paddingVertical: 10, paddingHorizontal: 20, borderTopColor: "#ddd", borderTopWidth: 1}}>
                <Image source={item.image} style={{width: 150, height: 200, resizeMode: "contain", marginRight: 10}} />
                <View style={{flex: 1}}>
                    <Text style={{textTransform: "capitalize"}}>{item.name}</Text>
                    <Text>4 Sand</Text>
                    <View style={{flex: 1}} />
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text>{item.quantity} X &cent;{(item.price * item.quantity).toFixed(2)}</Text>
                        <Text>&cent;{(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                </View>
            </View>)}
        </ScrollView>
        <View style={{padding: 20}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{fontSize: 18}}>{cart.length} Item(s)</Text>
                <Text style={{fontSize: 18}}>Total: ${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>{}}>
                <View style={{padding: 20, borderRadius: 10, marginTop: 20, backgroundColor: "black", alignItems: "center"}}>
                    <Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}>Checkout Securely</Text>
                </View>
            </TouchableWithoutFeedback>
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

export default CartPage;