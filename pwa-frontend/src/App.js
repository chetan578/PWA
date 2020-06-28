import React,{useState} from 'react'
import Registeration from './Components/Registeration'
import loginService from './services/login'
import {Form,Alert,Button} from 'react-bootstrap'
import Images from './Components/Images'
import './index.css'

const Notification=(props)=>{
  if(props.message===null)
  return null
  return(
    <div>
      <Alert variant="danger">
       {props.message}
      </Alert>
    </div>
  )
  }

const App=()=>{

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [message,setMessage]=useState(null)
  const [user, setUser] = useState(null)
  const[showGallery,setshowGallery]=useState(false)
 
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedappUser')
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON)
  //     setUser(user)
  //   }
  // }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      // window.localStorage.setItem(
      //   'loggedappUser', JSON.stringify(user)
      // )
    setUsername('')
    setPassword('') 
    }catch (exception) {
      setMessage(`Wrong username or password`)
      setUsername('')
      setPassword('')
      setTimeout(()=>{
        setMessage(null)
      },5000)
    }
    }

    
const LoginForm=()=>{
  return(
        <div>
          <h1>PWA</h1>
          <p>Catch Phrase</p>
          <Notification message={message}/>
          <Form onSubmit={handleLogin}> 
    <Form.Group>
      <Form.Label>Username</Form.Label>
      <Form.Control type="text"  placeholder="Enter username" 
      value={username}
      name="Username"
      onChange={({ target }) => setUsername(target.value)}
      />
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      value={password}
      name="Password"
      onChange={({ target }) => setPassword(target.value)}
      />
    </Form.Group>
    <Button style={{backgroundColor:'white',color:'#40E0D0'}}
     type="submit" size="lg" block>
      Log In 
    </Button>
  </Form>
  </div>
      )
  
  }
  if(user===null)
  {
    return(
      <div className='container first'> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {LoginForm()}
      </div>
    )
  }
  if(user!==null)
  {
    if(showGallery===false)
    {
    return(
      <div className='container first'> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Registeration setshowGallery={setshowGallery} setUser={setUser}/>
    </div>
    )
  }else{
    return(
      <div className='container'> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Images setUser={setUser}/>
      </div>
    )
  }
}
}

export default App;
