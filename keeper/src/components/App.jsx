import '../styles.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";

function App() {
  return (
    <div className="app">
      <Header />
      <Note />
      <Card name="Beyonce" url="https://nationaltoday.com/wp-content/uploads/2020/09/Beyonce%CC%81s-Birthday.jpg"/>
      <Footer />
    </div>
  );
}

export default App;
