import axios from 'axios'
import React,{useState} from 'react'

export default function PatientsInfo() {
    const[name, setName]=useState("")
    const[age, setAge]=useState("")
    const[gender, setGender]=useState("")
    const[disease, setDisease]=useState("")
    const[doctor, setDoctor]=useState("")
    const[weight, setWeight]=useState("")
    function addPatient() {
        if (name=="" && age=="" && gender=="" & disease=="" && doctor=="" && weight=="") {
            alert("Please fill all the details")
        }
        else {
          axios.post("https://doc-back.onrender.com/patients", {
            name, age, gender, disease, doctor, weight
          })
            .then((res) => {
              console.log(res)
            })
          setAge("");
          setDisease("");
          setDoctor("");
          setGender("");
          setName("");
          setWeight("")
        }
      }
  return (
    <div className='patients-detains'>
      <p>
        <input
        placeholder='Enter name'
        value={name}
        onChange={(e)=> setName(e.target.value)}/>
      </p>
      <p>
        <input
        placeholder='Enter age'
        value={age}
        onChange={(e)=> setAge(e.target.value)}/>
      </p>
      <p>
        <input
        placeholder='Enter gender'
        value={gender}
        onChange={(e)=> setGender(e.target.value)}/>
      </p>
      <p>
        <input
        placeholder='Enter disease'
        value={disease}
        onChange={(e)=> setDisease(e.target.value)}/>
      </p>
      <p>
        <input
        placeholder='Enter your doctor name'
        value={doctor}
        onChange={(e)=> setDoctor(e.target.value)}/>
      </p>
      <p>
        <input
        placeholder='Enter weight'
        value={weight}
        onChange={(e)=> setWeight(e.target.value)}/>
      </p>
      <button onClick={addPatient}>Add Patient</button>
    </div>
  )
}
