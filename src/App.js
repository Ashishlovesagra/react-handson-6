import './App.css';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import AddStudent from './component/AddStudent';
import DataApi from './component/DataApi';
import Edit from "./component/Edit";
import Table from './component/Table';

function App(Start) {
  const [data,setData] = useState([
    {name:'Ashish',age:25,course:'MERN',batch:'November',id:1},
    {name:'Prashant',age:25,course:'MERN',batch:'November',id:2},
    {name:'Rahul',age:25,course:'MERN',batch:'November',id:3},
    {name:'Saksham',age:25,course:'MERN',batch:'November',id:4},
  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={
            <DataApi.Provider value={{Start:data,updateFunction:setData}}>
              <Table/>
            </DataApi.Provider>
          } />
          <Route path='/editStudent' element={<DataApi.Provider value={{Start:data,updateFunction:setData}}>
            <Edit/>
          </DataApi.Provider>}/>
          <Route path='/newstudent' element={
            <DataApi.Provider value={{Start:data,updateFunction:setData}}>
              <AddStudent/>
            </DataApi.Provider>
          } />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
