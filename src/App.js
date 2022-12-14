import './App.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Data from './components/Data/Data';
import SingleUser from './components/SingleUser/SingleUser';
import V1 from './components/V1/V1';
import F04 from './components/F04/F04';
import V1Details from './components/V1Details/V1Details';
import V2 from './components/V2/V2';

export const ThemeColor = React.createContext('d');

function App() {
    const themes = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    };

  return (
    <div className="App">
        <ThemeColor.Provider value={themes}>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/data" element={<Data></Data>}></Route>
                <Route path='/data/:UserId' element={<SingleUser></SingleUser>}></Route>
                
                <Route path="/v1" element={<V1 />}>
                    <Route path='/v1/:userId' element={<V1Details></V1Details>}></Route>
                </Route>
                <Route path='/v2' element={<V2></V2>}></Route>
                <Route path='*' element={<F04></F04>}></Route>
            </Routes>
        </ThemeColor.Provider>
    </div>
  );
}

export default App;
