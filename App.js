import './App.css';
import Book from './Day2/Book';

function App() {
  return (
    <div className="App">
      <center>
        <Book name="Adventures of Tom Sawyer" author="Mark Twain"></Book>
        <Book name="Ben Hur" author="Lewis Wallace"></Book>
        <Book name="Arthashastra" author="Kautilya"></Book>
        <Book name="Around the World in eighty days" author="Jules Verne"></Book>
        <Book name="Alice in Wonderland" author="Lewis Carrol"></Book>
      </center>
    </div>
  );
}

export default App;
