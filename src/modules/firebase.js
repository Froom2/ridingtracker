import { initializeApp } from 'firebase/app';

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

initializeApp(firebaseConfig);