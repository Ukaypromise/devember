import { Text, View, StyleSheet } from 'react-native'

type DayListItemProps = {
    day: number,
}

export default function DayListItem({ day }: DayListItemProps) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    box: {
        backgroundColor: "#F9EDE3",
        flex: 1,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: "#9b4521",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: "#9b4521",
        fontSize: 70,
    }
});
