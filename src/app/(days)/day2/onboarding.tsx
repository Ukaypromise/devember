import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
    GestureDetector,
    Gesture,
    Directions,
} from "react-native-gesture-handler";
import Animated, {
    FadeIn,
    FadeOut,
    BounceInRight,
    SlideOutLeft,
    BounceOutLeft,
    SlideInRight,
} from 'react-native-reanimated';

const onboardingSteps = [
    {
        icon: "car",
        title: "Go anywhere with ease.",
        description:
            "Book a ride and earn on the go. The platform that transforms your life by helping you earn on each ride.",
    },
    {
        icon: "money-check-alt",
        title: "Save money with ease.",
        description:
            "Saving money is a good habit. Book a ride and earn on the go.",
    },
    {
        icon: "hourglass-start",
        title: "Providing you with the best service.",
        description:
            "Offerring you the best service is our priority. Book a ride and earn on the go.",
    },
];

export default function OnBoardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnBoarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnBoarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepIndicator,
                            { backgroundColor: index == screenIndex ? "#CEF202" : "#FDFDFD" },
                        ]}
                    ></View>
                ))}
            </View>
            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={100}
                            color="#CEF202"
                        />
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={styles.title}
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={styles.description}
                        >
                            {data.description}
                        </Animated.Text>

                        <View style={styles.buttonRow}>
                            <Text onPress={endOnBoarding} style={styles.buttonText}>
                                Skip
                            </Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#15141A",
    },
    pageContent: {
        flex: 1,
        padding: 20,
    },
    image: {
        alignSelf: "center",
        margin: 20,
        marginTop: 50,
    },
    title: {
        color: "#FDFDFD",
        fontSize: 40,
        fontFamily: "InterBlack",
        letterSpacing: 1.4,
        marginVertical: 20,
    },
    description: {
        color: "gray",
        fontSize: 20,
        fontFamily: "Inter",
        lineHeight: 25,
    },
    footer: {
        marginTop: "auto",
    },
    buttonRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    button: {
        backgroundColor: "#302E38",
        borderRadius: 50,
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        color: "#FDFDFD",
        fontSize: 16,
        fontFamily: "InterBlack",
        textAlign: "center",
        padding: 15,
    },
    stepIndicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 50,
        gap: 5,
    },
    stepIndicator: {
        flex: 1,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#FDFDFD",
    },
});
