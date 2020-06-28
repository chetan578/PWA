import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'

const Images=({setUser})=>{
    const [images,setImages]=useState([])
    useEffect(()=>{
    axios.get('https://pixabay.com/api/?key=17247347-9477f1948ca783a6c1f7034b4').then(response=>{
        setImages(response.data.hits)
        }
    )
    },[])

    
    const handleLogout=()=>{
        // window.localStorage.removeItem('loggedappUser')
        setUser(null)
      }
    return (
        <div>
            <h2>Images</h2>
            {images.map((x,id)=>
            <Card style={{ width: '18rem',marginLeft:'35%',marginTop:'5%'}}>
         <Card.Header>Image {id+1}</Card.Header>
            <Card.Img variant="top" src={x.webformatURL} />
            <Card.Body>
              <Card.Title>{x.user}</Card.Title>
            </Card.Body>
          </Card>
            )}
            <Button style={{marginTop:'3%',marginLeft:'35%'}} onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Images