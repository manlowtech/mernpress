import React,{useState} from 'react';
//import axios from 'axios';
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
            label= "full Name"
            plcaceholder= "Enter full name here..."
            value={name}
            onChange={e=>setName(e.target.value)}
            />
             <TextField
             label="username"
             placeholder="Enter your username..."
             value={username}
             onChange={e=>setUsername(e.target.value)}
            />
            <TextField
            label= "Enter email"
            placeholder= "enter email here..."
            onChange={e=>setEmail(e.target.value)}
            value={email}
            type="email"
            />
            <p>{name}</p>
            <TextField
            label="Password"
            placeholder="Enter password here..."
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <TextField
            label="verify-Password"
            placeholder="enter your password again..."
            value={verifyPass}
            onChange={e=>setVerifyPass(e.target.value)}
            />
           <Button disabled={!name || !username || !email || (password !== verifyPass)} color="secondary" variant="contained" onClick={handleFormSubmit} >Register Now! </Button>
           </form>
          </div>
        </div>
    )
}

export default RegisterPage;
