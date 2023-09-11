import EncryptedStorage from 'react-native-encrypted-storage';

export async function isLoggedIn(): Promise<boolean> {
  try {
    console.log('entered');
    const firstTime = await EncryptedStorage.getItem('Account');
    console.log(firstTime);
    if (firstTime === null || firstTime === '') {
      return false;
    }
  } catch (error) {
    console.log(`isFirstTime error: ${JSON.stringify(error)}`);
  }
  console.log('Returning false');
  return true;
}
