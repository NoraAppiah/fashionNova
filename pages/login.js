import React from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';

const LoginPage = ({navigation})=>{
    return <View>
        <SafeAreaView edges={["top"]} />
        <View style={{paddingHorizontal: 20}}>
        <TouchableWithoutFeedback onPress={navigation.goBack}>
            <Feather name="chevron-left" size={30} />

            </TouchableWithoutFeedback>
            <Text style={{fontSize: 40, marginTop: 50, marginBottom: 10, fontWeight: "bold"}}>Sign In</Text>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Enter your details below to sign in.</Text>
            <View style={{marginTop: 60, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Email</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{marginTop: 20, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Password</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{padding: 20, marginTop: 30, backgroundColor: "#000"}}>
                <Text style={{fontSize: 18, color: "#fff", textAlign: "center", fontWeight: "bold"}}>Sign In</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("signup")}>
                <Text style={{textAlign: "center", paddingVertical: 20}}>Don't have an account? Sign up</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>
}

export default LoginPage;