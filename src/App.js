import './App.css';
import './modules/firebase' // initialise firebase app
import { SignInGuard } from './components/SignInGuard';

function App() {
  return (
    <div className="App">
      <SignInGuard />
    </div>
  );
}

export default App;
