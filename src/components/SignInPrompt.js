import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FirebaseUiConfig } from '../modules/firebaseuiConfig';

export const SignInPrompt = ({ firebase }) => {
  return <div>
    <h1>Riding-Tracker</h1>
    <p>Please sign-in:</p>
    <StyledFirebaseAuth uiConfig={FirebaseUiConfig} firebaseAuth={firebase.auth()} />
  </div>
}