import React from 'react'





interface StudentProps{
    name:string;
    age:number;
    isStudent:Boolean;
}

function Students(props:StudentProps) {
  return (
    <div className='student'>
      <h1>Name : {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>isStudent: {props.isStudent?"Yes":"No"}</h1>

    </div>
  )
}

export default Students
