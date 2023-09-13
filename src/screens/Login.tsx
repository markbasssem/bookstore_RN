import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import {setAccount} from '../store/reducers/accountReducer';
import axios from 'axios';
import {Alert} from 'react-native';
import {server} from './constants';
import EncryptedStorage from 'react-native-encrypted-storage';
import { User } from '../types/User';
import { setAccountAtLocalStorage } from '../storage/cache';

type Props = NativeStackScreenProps<any, any>;

const LoginForm = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          axios
            .post(`${server}:3000/auth/signin`, {
              username,
              password,
            })
            .then(async res => {
              if (res.status === 200) {
                const data: User = res.data;
                await setAccountAtLocalStorage(data.token)
                dispatch(setAccount(data));
                props.navigation.navigate('Home');
              }
            })
            .catch(err => {
              alert('Invalid username or password');
            });
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
});

export default LoginForm;
