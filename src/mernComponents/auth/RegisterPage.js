import React,{useState} from 'react';
//import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import {TextField,Button} from '@material-ui/core';
import styles from './auth.module.css';
import {Register} from '../../mernmodules/Login';
function RegisterPage() {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [verifyPass,setVerifyPass] = useState('');
    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        const vars = {
            name,
            username,
            password,
            email,

        }
        console.log(vars)
         const regisData = await Register(vars);
         console.log(regisData);
         setUsername('');
    }
    return (
        <div className={styles.regisContainer} >
        <div className={styles.regis}>
        <form onSubmit={handleFormSubmit}  className={styles.regis}>
            <TextField
            label= "Full Name"
            plcaceholder= "Enter full name here..."
            value={name}
            onChange={e=>setName(e.target.value)}
            />
             <TextField
             label="Username"
             placeholder="Enter your username..."
             value={username}
             onChange={e=>setUsername(e.target.value)}
            />
            <TextField
            className={styles.pt}
            label= "Enter Email"
            placeholder= "enter email here..."
            onChange={e=>setEmail(e.target.value)}
            value={email}
            type="email"
            />
            <p>{name}</p>
            <TextField

             className={styles.pt}
            label="Password"
            placeholder="Enter password here..."
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <TextField
             className={styles.pt}
            label="verify-Password"
            placeholder="enter your password again..."
            value={verifyPass}
            onChange={e=>setVerifyPass(e.target.value)}
            />
           <Button  className={styles.pt} disabled={!name || !username || !email || (password !== verifyPass)} color="secondary" variant="contained" onClick={handleFormSubmit} >Register Now! </Button>

           <p>Already Have an Account ? <Link to="/login">Login</Link></p>
           </form>
          </div>
        </div>
    )
}

export default RegisterPage;
