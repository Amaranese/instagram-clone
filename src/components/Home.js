
import Navbar from "./Navbar";
import Posts from "./Posts";
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home__container">
        <Posts />
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;