import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataApi from './DataApi';
import './Style.css';

function Edit() {
    const contextData = useContext(DataApi);
    const index = useLocation().state.data;
    const Nav = useNavigate();

    const updateObj ={
        name: contextData.Start[index].name,
        age:contextData.Start[index].age,
        course:contextData.Start[index].course,
        batch:contextData.Start[index].batch,
        id: contextData.Start[index].id,
    }

    const handlechane = (e) =>{
        updateObj[e.target.name] = e.target.value;

    } 

    const handleUpdate =()=>{
        contextData.Start[index]=updateObj
        Nav(-1)
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
            <input placeholder={contextData.Start[index].name} name='name' onChange={handlechane}></input>
        </fieldset>
        </div>
        <div className="age">
        <fieldset>
            <legend>Age</legend>
            <input placeholder={contextData.Start[index].age} name='age' onChange={handlechane}></input>
        </fieldset>
        </div>
        <div className="course">
        <fieldset>
            <legend>Course</legend>
            <input placeholder={contextData.Start[index].course} name='course' onChange={handlechane}></input>
        </fieldset>
        </div>
        <div className="batch">
        <fieldset>
            <legend>Batch</legend>
            <input placeholder={contextData.Start[index].batch} name='batch' onChange={handlechane}></input>
        </fieldset>
        </div>
    </div>
    <div className="btn-both">
    <div >
    <button className="btn-cancel" onClick={goBack}>Cancel</button>
    </div>
    <div>
    <button className="btn-edit" onClick={handleUpdate}>Update</button>
    </div>
    </div>
    </>
  )
}

export default Edit;
