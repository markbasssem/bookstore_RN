import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from '../store/configureStore';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineSeparator from "../components/LineSeparator";
import BackBar from "../components/BackBar";
import { Line } from "react-native-svg";

export default function ProfileScreen({ navigation }: NativeStackScreenProps<any, any>) {
    const account = useSelector((state: RootState) => state.account);

    return (
        <View style={{ flex: 1, padding: "5%", paddingHorizontal: "7%" }}>
            <BackBar navigation={navigation} />
            <View style={styles.header}>
                <Image
                    source={require('../../assets/avatar.png')}
                    style={styles.avatar}
                />
                <View>

                    <Text style={styles.name}>{account.username}</Text>
                    <Text style={styles.subTitle}>Influencer</Text>
                </View>
            </View>
            {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
            <View style={styles.contactDetails}>
                <View style={styles.contactRow} >
                    <Fontisto name="email" size={20} />
                    <Text style={styles.textDetails}>{account.email}</Text>
                </View>
                <View style={styles.contactRow}>
                    <Ionicons name="call-outline" size={20} />
                    <Text style={styles.textDetails}>{account.mobile_no}</Text>
                </View>
            </View>
            <LineSeparator width={0.9} />
            <View style={styles.middleView}>
                <Text style={styles.box}>$ {account.money}</Text>
                <LineSeparator vertical={true} width={0.9} />
                <Text style={styles.box}>{account.type}</Text>
            </View>
            <LineSeparator width={0.9} />
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        margin: 10,
        fontWeight: "900",
        color: "#000"
    },
    subTitle: {

        fontSize: 16,
        margin: 10,
        fontWeight: "400",
        color: "gray"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: "5%",
        paddingHorizontal: "11%"

    },
    avatar: {
        width: 100,
        height: 100,
    },
    contactDetails: {
        justifyContent: "space-between",
        color: "gray",
        height: "9%",
        marginVertical: 20
    },
    textDetails: {
        fontSize: 19,
        paddingHorizontal: 10,
        marginLeft: 20
    },
    contactRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    middleView: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: "10%",
        // marginVertical: "7%"
    },
    box: {
        alignSelf: "center",
        fontSize: 20,
        color: "black",
        flex: 1,
        textAlign: "center"
    },

})