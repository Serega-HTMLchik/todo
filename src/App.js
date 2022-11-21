import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

const store = [];

function App() {
  function addList() {

    alert('add');
  }

  return (
    <div className="App">
      <ol>
        <Header text="hello" />
      </ol>
      <input />
      <button onClick={addList}>Добавить</button>
    </div>
  );
}

export default App;
