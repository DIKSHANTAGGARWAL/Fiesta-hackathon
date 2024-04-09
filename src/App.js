import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Todo from './components/Todo';
import Album from './components/Album';
import Photos from './components/Photos';
import Post from './components/Post';
import Profile from './components/Profile';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Pages/>}/>
        <Route path="/:id/profile" element={<Profile/>}/>
        <Route path="/:id/todo" element={<Todo/>}/>
        <Route path="/:id/albums" element={<Album/>}/>
        <Route path="/:id/albums/:id/photos" element={<Photos/>}/>
        <Route path="/:id/posts" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
