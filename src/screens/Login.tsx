import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setAccount } from '../store/reducers/accountReducer';
import axios, { AxiosError } from 'axios';
import { server } from './constants';
import { User } from '../types/User';
import { setAccountAtLocalStorage } from '../storage/cache';
import CustText from '../components/CustText';

type Props = NativeStackScreenProps<any, any>;

const LoginForm = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unmount = () => {
      console.log('unmounted');
    };
    return unmount;
  });

  const handleLogin = () => {
    setError("")
    if (!(username || password)) {
      setError("Data not entered")
      return;
    }
    const requestURL = `${server}/auth/signin`
    console.log("Sending request to ", requestURL)
    axios
      .post(requestURL, {
        username,
        password
      }, { timeout: 2000 })
      .then(async res => {
        if (res.status === 200) {
          const user: User = res.data;
          console.log(user)
          await setAccountAtLocalStorage(user.token);
          dispatch(setAccount({ user }));
          props.navigation.replace('HomeDrawer');
        }
      })
      .catch((err: AxiosError) => {
        console.log(JSON.stringify(err.response?.status))
        if (err.response?.status == 400) {
          setError("Invalid credentials")
        }
        else if (err.request) {
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
        Login {" "}
        <TouchableOpacity onPress={() => {
          props.navigation.navigate("Signup")
        }}>
          <CustText>
            Or signup
          </CustText>
        </TouchableOpacity>
      </Text>
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
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    color: "black"
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

export default LoginForm;
