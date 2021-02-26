import React, { useState,useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill=(props)=>{
    const [value, setValue] = useState('');
  
  let handle=(e)=>{
      console.log(e,"editor")
      setValue(e)
  }  
useEffect(()=>{
console.log(props.value,"useeffect")
setValue(props.value);
},[])
    return (
        <div>
            <ReactQuill theme="snow" value={value} onChange={handle}/>
            <button onClick={(e)=>{props.save(value)}}>Save</button>
            <button onClick={props.cancle}>cancle</button>
        </div>
    );
}

export default Quill;