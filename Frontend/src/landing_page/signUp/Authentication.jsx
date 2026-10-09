import './Signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react'
import Snackbar from "@mui/material/Snackbar";
import { AuthContext } from './AuthContext';

export default function Signup() {

  const [formState, setformState] = useState(0)
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('')
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);


  const { handleRegister, handleLogin } = useContext(AuthContext)


  const handleAuth = async () => {
    try {
      if (formState == 0) {
        const result = await handleLogin(username, password);
        setMessage(result)
       
        setOpen(true)
        setemail('')
        seterror('')
        setusername('')
        setpassword('')
      } else {
        const result = await handleRegister(email, username, password)
        setMessage(result)
        setOpen(true);
        setemail('')
        seterror('')
        setusername('')
        setpassword('')
        setformState(0)
      }
    } catch (err) {
      
      const errorMessage = err.response?.data?.message || "Something went wrong";
      seterror(errorMessage);
    }
  }

  return (
    <div className='auth'>
      <form className='form' onSubmit={(e) => {e.preventDefault(); handleAuth()}}>

        <div>

          <Button variant={formState === 0 ? "contained" : "outlined"} onClick={() => { setformState(0); seterror(""); }}>Sign In </Button>
          <Button variant={formState === 1 ? "contained" : "outlined"} onClick={() => { setformState(1); seterror(""); }}>Sign Up </Button>

        </div>
        {formState == 1 && <TextField required id="email" name='email' value={email} label="Email" autoFocus onChange={(e) => setemail(e.target.value)} />}
        <TextField required id="username" name='username' label="username" value={username} onChange={(e) => setusername(e.target.value)} />
        <TextField id="password" label="Password" type="password" name='password' required value={password} onChange={(e) => setpassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} type='submit' >{formState ? "Register" : "Login"}</Button>
      </form>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => { setOpen(false); }} message={message} />

    </div>
  )
}


