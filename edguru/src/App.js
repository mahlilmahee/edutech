
import './App.css';
import Footer from './Component/Home/Footer';
import Header from './Component/Home/Header';
import Heading from './Component/Home/Heading';
import Homepage from './Component/Home/Homepage';
import Partone from './Component/Home/Partone';
import Partthree from './Component/Home/Partthree';
import Parttwo from './Component/Home/Parttwo';

function App() {
  return (
    <div className="App">
      <Header> </Header>
   <Homepage></Homepage>
   <Partone></Partone>
   <Parttwo></Parttwo>
   <Partthree></Partthree>
   <Heading></Heading>
   <Footer></Footer>
    </div>
  );
}

export default App;
