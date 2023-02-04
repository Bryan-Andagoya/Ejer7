import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDES1tM2dDE0hp64k57VE1sNCdVDpTMK6g",
  authDomain: "fir-auth-1cd1b.firebaseapp.com",
  projectId: "fir-auth-1cd1b",
  storageBucket: "fir-auth-1cd1b.appspot.com",
  messagingSenderId: "901237073609",
  appId: "1:901237073609:web:0566628f6e89283c254f18",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
