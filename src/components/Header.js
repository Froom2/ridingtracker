import { SelectActivity } from './SelectActivity';

export const Header = ({userName}) => {
  return <header className="App-header">
    <p>
      Hello {userName}!
    </p>
    <p>
      What did you do today?
    </p>

    <SelectActivity />

  </header>
}