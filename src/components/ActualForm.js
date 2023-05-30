import React from 'react'
function ActualForm(props){
    //destructuring of props object
    let {handleChangeName, handleChangeAge,handleChangeDepartment,handleChangeNumber, handleSubmit, styles} = props;
   
    return (
      <div >
        <h2 style={{textAlign:'center'}}>FEEDBACK FORM</h2>
        <form style={styles}>
          
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here' id='nameIp' onChange={handleChangeName}/>
                    <br/><br/>
                    <label>Age: </label>
                    <input type='number' placeholder='Enter age here' id='ageIp' onChange={handleChangeAge}/>
                    <br/><br/>
                    <label>Department:</label>
                    <input type='text' placeholder='enter number here' id='ageIp' onChange={handleChangeDepartment}/>
                    <br/><br/>
                    {/* <label>Department:</label>
                    <input type='text' placeholder='Enter branch here' id='branchIp' onChange={handleChangeDepartment}/>
                    <br/> */}
                    <button onClick={handleSubmit}>Submit</button>
                </form>
      </div>
    )
}
export default ActualForm