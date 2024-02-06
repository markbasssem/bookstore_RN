import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from '../store/configureStore';

export default function NotificationsScreen({ navigation }: NativeStackScreenProps<any, any>) {
    const account = useSelector((state: RootState) => state.account);

    return (
        <View style={{padding: 10}}>
            <Text style={styles.header}>Profile</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>{account.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        margin: 10,
        fontWeight: "900",
        color: "#000"
    }
})