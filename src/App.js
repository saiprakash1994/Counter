import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Todo from './components/Todo';
import CounterByState from './components/CounterByState';
import CounterByRedux from './components/CounterByRedux';
import CounterByToolKit from './components/CounterByToolKit';
import CounterByUseReducer from './components/CounterByUseReducer';
import CounterByUseContext from './components/CounterByUseContext';
import Data from './components/Data';
import Fetch from './components/Fetch';
import Forms from './components/Forms';
import SearchDisplay from './components/SearchDisplay';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='todo' element={<Todo />}></Route>
          <Route path='state' element={<CounterByState />}></Route>
          <Route path='redux' element={<CounterByRedux />}></Route>
          <Route path='toolkit' element={<CounterByToolKit />}></Route>
          <Route path='reducer' element={<CounterByUseReducer />}></Route>
          <Route path='context' element={<Data />}></Route>
          <Route path='fetch' element={<Fetch />}></Route>
          <Route path='forms' element={<Forms />}></Route>
          <Route path='search' element={<SearchDisplay />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
