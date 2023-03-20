// Components
import Header from './components/Header';
import VerticalLine from './components/VerticalLine';

// Screens
import FormsScreen from './screens/FormsScreen';
import ResultsScreen from './screens/ResultsScreen';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <article>
        <FormsScreen />
        <VerticalLine />
        <ResultsScreen />
      </article>
    </div>
  );
}


<div>
      <Title text={"Age " + value} />
      <br />
      <input
        type="text"
        placeholder="Age"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>

export default App;
