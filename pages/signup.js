import React from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';

const SignupPage = ({navigation})=>{
    return <View>
        <SafeAreaView edges={["top"]} />
        <View style={{paddingHorizontal: 20}}>
            <TouchableWithoutFeedback onPress={navigation.goBack}>
            <Feather name="chevron-left" size={30} />

            </TouchableWithoutFeedback>
            <Text style={{fontSize: 40, marginTop: 50, fontWeight: "bold"}}>Create Free</Text>
            <Text style={{fontSize: 40, marginBottom: 10, fontWeight: "900"}}>Account</Text>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Create free account. Takes less than a minute</Text>
            <View style={{marginTop: 60, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Username</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{marginTop: 20, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Email</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{marginTop: 20, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Password</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{marginTop: 20, padding: 10, backgroundColor: "#ddd"}}>
                <Text>Confirm Password</Text>
                <TextInput style={{paddingVertical: 10}} placeholder="Enter email" />
            </View>
            <View style={{padding: 20, marginTop: 30, backgroundColor: "#000"}}>
                <Text style={{fontSize: 18, color: "#fff", textAlign: "center", fontWeight: "bold"}}>Sign In</Text>
            </View>
        </View>
    </View>
}

export default SignupPage;