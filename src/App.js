import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Event from './components/Event/Event';
import Resourse from './components/Resourse/Resourse';
import Form from './components/Form/Form';
import Activity from './components/Activity/Activity';

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/event" element={<Event/>}></Route>
      <Route path="/activity" element={<Activity/>}></Route>
      <Route path="/resource" element={<Resourse/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
