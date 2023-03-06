import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import DataApi from './DataApi';
import './Style.css';

function AddStudent() {
    const contextData = useContext(DataApi);
    const Nav = useNavigate();

    const addObj ={
        name:" ",
        age: ' ',
        course:" ",
        batch: " ",
        id: " "
    }

    const  handleChange = (e) =>{
        addObj[e.target.name] = e.target.value
    } 

    const handleAdd = () =>{
        contextData.Start.push(addObj);
        Nav('/student')
    }

    function goBack() {
        window.history.back();
    }

    return (
    <>
      <div className='tableEdit'>
        <div className="name">
        <fieldset>
            <legend>Name</legend>
            <input placeholder='Name' name='name' onChange={handleChange}></input>
        </fieldset>
        </div>
        <div className="age">
        <fieldset>
            <legend>Age</legend>
            <input placeholder='Age' name='age' onChange={handleChange}></input>
        </fieldset>
        </div>
        <div className="course">
        <fieldset>
            <legend>Course</legend>
            <input placeholder='Course' name='course' onChange={handleChange}></input>
        </fieldset>
        </div>
        <div className="batch">
        <fieldset>
            <legend>Batch</legend>
            <input placeholder='Batch' name='batch' onChange={handleChange}></input>
        </fieldset>
        </div>
    </div>
    <div className="btn-both">
    <div >
    <button className="btn-cancel" onClick={goBack}>Cancel</button>
    </div>
    <div>
    <button className="btn-edit" onClick={handleAdd}>Update</button>
    </div>
    </div>
    </>
  )
}

export default AddStudent;
