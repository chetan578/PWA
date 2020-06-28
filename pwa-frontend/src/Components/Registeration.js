import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import '../index.css'
 
import "react-datepicker/dist/react-datepicker.css";

const Registeration=({setUser,setshowGallery})=>{

  const [startDate, setStartDate] = useState(new Date())

    const handleLogout=()=>{
            // window.localStorage.removeItem('loggedappUser')
            setUser(null)
          }

  return (
    <div>
    <h5>What's your name ?</h5>
    <Form> 
    <Form.Group>
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text"  placeholder="firstname" 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>LastName</Form.Label>
      <Form.Control placeholder="lastname" 
      />
    </Form.Group>
    <h5>And you gender ?</h5>
    <Button  style={{backgroundColor:'white',color:'#40E0D0'}}>
      Male
    </Button>
    {' '}
    <Button  style={{backgroundColor:'white',color:'#40E0D0'}}>
      Female
    </Button>
    <h5>What's you date of birth?</h5>
    <p>This can't be changed later</p>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} 
     name="startDate"
     dateFormat="MM/dd/yyyy"/>
    <Button type="submit" 
    onClick={()=>setshowGallery(true)}>
      Submit
    </Button>
  </Form>
    <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}


export default Registeration;
