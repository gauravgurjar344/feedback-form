import React, { useState } from 'react'
import ActualForm from './ActualForm';
import FormData from './FormData';

function ParentForm(){

    const[nameIp,setName] = useState('');
    const[ageIp,setAge] = useState('');
    // const[branchIp,setBranch] = useState('');
    const[myObj,setMyObJ] = useState({});
    const[users,setUsers] = useState([]);
    const[isSubmitted,setisSubmitted] = useState(false);

    
         const mystyle = {
      color: "white",
      backgroundColor: "rgb(173,224,196)",
      padding: "10px",
      fontFamily: "Arial"
    };
    
    let myForm1 = {
        color:'black',
        fontSize:'25px',
        fontStyle:'bolder',
        textAlign:'left',
        marginTop:'10px',marginLeft:'600px',height:'100%',
        backgroundColor:'linear-gradient(to right, #00AAFF, #b54779)',
    }
    let myForm2={
        border:'4px solid purple', backgroundColor:'rgb(red,green)', display:'inline-block', 
        padding:'9px'
    }
    
    const handleChangeName=(e)=>{
        console.log('typing...');
       setName(e.target.value);
    }
    const handleChangeAge=(e)=>{
        console.log('typing...');
        setAge(e.target.value)
    }
    // const handleChangeDepartment=(e)=>{
    //     console.log('typing...');
    //     setAge(e.target.value)
    // }
    const handleChangeDepartment=(e)=>{
        console.log('typing...');
        setAge(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj = myObj;
        tempObj={
            name:nameIp,
            age:ageIp,
            // branch:branchIp,
        }
        console.log(tempObj);

        let tempArr = users;
        tempArr.push(tempObj);

        setUsers(()=>([
            ...tempArr
        ]))
        console.log(users);
        setisSubmitted(!isSubmitted);
    }
    const handleBack=()=>{
        setisSubmitted(!isSubmitted);
    }
    const handleDelete=(e)=>{
        e.preventDefault();
    }
    return (
      <div style={{height:'100vh'}}>
        {
        !isSubmitted?
        <ActualForm handleChangeName={handleChangeName} handleChangeAge={handleChangeAge} handleChangeDepartment={handleChangeDepartment}
          
        // handleChangeDepartment={handleChangeDepartment}
         handleSubmit={handleSubmit} styles={{...myForm1, ...myForm2}} />
        :
        <FormData users={users} handleBack={handleBack} />
        }

      </div>
      
    )

}

export default ParentForm