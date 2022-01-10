import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Card from './components/Card';
import data from './data';

function App() {
  let cards = data.map(item => {
    return (
      <Card
        key= {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
