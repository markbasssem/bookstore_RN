import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { server } from '../screens/constants';
import { User } from '../types/User';

export async function isLoggedIn(): Promise<boolean> {
  try {
    const firstTime = await EncryptedStorage.getItem('Account');
    console.log('cache', firstTime);
    if (firstTime === null || firstTime === '') {
      return false;
    }
  } catch (error) {
    console.log(`isFirstTime error: ${JSON.stringify(error)}`);
  }
  return true;
}

export async function getAccount(): Promise<User | undefined> {
  const token = await EncryptedStorage.getItem('Account');
  try {
    const result = await axios.get(`${server}:3000/`, {
      headers: {
        'x-auth-token': token,
      },
    });
    const obj = { token, ...result.data };
    return obj;
  } catch {
    return undefined
  }
}

export async function setAccountAtLocalStorage(token: string) {
  await EncryptedStorage.setItem('Account', token);
}
