import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ActivityIndicator,
} from 'react-native';
import axios, { AxiosError } from 'axios';
import { server } from './constants';
import { User } from '../types/User';
import { launchImageLibrary } from 'react-native-image-picker';
import CustText from '../components/CustText';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = NativeStackScreenProps<any, any>;

const SignupForm = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [photo, setPhoto] = useState<string | undefined>("")

    const handleSignup = () => {
        setError("")
        if (!(username && password && photo)) {
            setError("Data not entered")
            return;
        }
        const requestURL = `${server}/auth/signup`
        console.log("Sending request to ", requestURL)
        axios
            .post(requestURL, {
                username,
                password,
                photo
            }, { timeout: 2000 })
            .then(async res => {
                if (res.status === 200) {
                    const user: User = res.data;
                    // await setAccountAtLocalStorage(user.token);
                    // dispatch(setAccount({ user }));
                    props.navigation.replace('Login');
                }
            })
            .catch((err: AxiosError) => {
                console.log(JSON.stringify(err.response?.status))
                // if (err.response?.status == 400) {
                //     setError("Invalid credentials")
                // }
                if (err.request) {
                    setError('Network error');
                }
                else if (axios.isCancel(error)) {
                    setError("Timeout error")
                }
                else {
                    setError("App is not responding")
                }
                setModalVisible(false)
            });
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size={40} />
                    </View>
                </View>
            </Modal>
            <Text style={styles.title}>
                Signup {" "}
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Login")
                }}>
                    <CustText>
                        or Login
                    </CustText>
                </TouchableOpacity>
            </Text>
            <TouchableOpacity
                onPress={async () => {
                    console.log("het")
                    const result = await launchImageLibrary({ mediaType: "photo", maxHeight: 600, maxWidth: 400, includeBase64: true });
                    // console.log(result)
                    if (result.assets) {
                        console.log("Result")
                        console.log(result.assets[0].fileSize)
                        setPhoto(result.assets[0].base64)
                    }
                }}>

                <CustText>Upload picture {" "}
                    <AntDesign name="upload" size={14} color={'gray'}></AntDesign></CustText>

            </TouchableOpacity>
            <TextInput
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={"gray"}
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"gray"}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: "black"
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#4285f4',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 15,
    },
    modalView: {
        margin: 20,
        padding: 35,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: "100%",
        width: "100%",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
});

export default SignupForm;
