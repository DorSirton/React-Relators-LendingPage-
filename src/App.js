import './sass/App.scss';
import Header from './Components/header/header';
import Features from "./Components/features/features"
import Story from "./Components/story/story"
import Houses from './Components/houses/houses';
import Gallery from './Components/gallery/gallery';
import Item  from './Components/gallery/item';
import {Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='menue'>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/Features">Features</NavLink>
        <NavLink to="/Story">Story</NavLink>
        <NavLink to="/Houses">Houses</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
      </nav>


      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Story" element={<Story/>}/>
        <Route path="/Houses" element={<Houses/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Gallery/:Id" element={<Item/>}/>
      </Routes>
    </div>
  );
}
export default App;

