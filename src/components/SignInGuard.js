import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import '../modules/firebase' // initialise firebase app
import { Header } from './Header';
import { SignInPrompt } from './SignInPrompt';

export const SignInGuard = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return <SignInPrompt />;
  }

  return <Header />;
}