import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Header } from './Header';
import { SignInPrompt } from './SignInPrompt';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-_hF8jFMpVZCHaImr3JM-neV2kqmhhA",
  authDomain: "ridingtracker.firebaseapp.com",
  databaseURL: "https://ridingtracker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ridingtracker",
  storageBucket: "ridingtracker.appspot.com",
  messagingSenderId: "851047951993",
  appId: "1:851047951993:web:7e3b8092bae38364882ea8",
  measurementId: "G-9N3QGLFWFG"
};
firebase.initializeApp(firebaseConfig);

export const SignInGuard = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(fbUser => {
      setIsSignedIn(!!fbUser);
      setUserName(fbUser.displayName);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return <SignInPrompt firebase={firebase} />;
  }

  return <Header userName={userName} />;
}