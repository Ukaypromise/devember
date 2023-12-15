import { View, Text, Button } from 'react-native'
import { Stack } from "expo-router";
import { Link } from 'expo-router';
import React from 'react'

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 2 Onboarding" }} />
            <Text style={{ fontFamily: "AmaticBold", fontSize: 20 }}>Day2 Details Screen</Text>
            <Link href="/day2/onboarding" asChild>
                <Button title="Go to onboarding" />
            </Link>
            
        </View>
    )
}

export default DayDetailsScreen