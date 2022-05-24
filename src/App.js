import MiniNavBar from './components/MiniNavBar';
import NavBar from './components/NavBar';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <MiniNavBar/>
        <NavBar/>
          <Routes>
            <Route path='task1' element={<Task1/>}/>
            <Route path='task2' element={<Task2/>}/>
            <Route path='task3' element={<Task3/>}/>

          </Routes>
       </BrowserRouter>
       {/* <div className="mainn">
         <p>Lorem ipsum dolor sit amet consectetur 
           adipisicing elit. Reiciendis ea error 
           doloribus facilis assumenda excepturi, 
           commodi iste. Quam dolorem maxime recusandae 
           hic culpa saepe aperiam 
           cum fugit repudiandae sed! Quasi.</p>
       </div> */}
    </div>
  );
}

export default App;
