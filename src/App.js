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

export default App;
