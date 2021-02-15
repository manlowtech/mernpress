import React,{useState} from 'react';
import {TextField,Button} from '@material-ui/core';
//import axios from 'axios';
import styles from './login.module.css';
import {Redirect,Link} from 'react-router-dom';
import {Login} from '../../mernmodules/Login';
//iport { convertLegacyProps } from '../../../node_modules/antd/lib/button/button';

function LoginPage(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onSubmits = async (e)=>{
        e.preventDefault();
        const variables = {
            email:email,
            password:password,
        }
        console.log(props);
     const logdatas = await  Login(variables);
        console.log(logdatas);
        if(logdatas.success){
            alert('Login SuccessFull');
                   <Redirect to="/admin/4"/>           // props.history.push('/admin/manlow');
        }
    }
    return (
        <div className={styles.loginContainer}>
        <div className={styles.logins} >
            <TextField
            className={styles.pt}
            onChange={e=>setEmail(e.target.value)}
            value={email}
            color="secondary"
            label= "Email"
            placeholder = "enter email"
            />
             <TextField
              className={styles.pt}
            onChange={e=>setPassword(e.target.value)}
            value={password}
            label= "Password"
            color="secondary"
            placeholder = "enter password"
            />
           
            <Button size="large" className={styles.pt} disabled={!email || !password} color="secondary" variant="contained" onClick={onSubmits}>LOGIN !</Button>
            <p className={styles.pt}>Dont have Account ? <Link color="secondary" to="/register">Register Now</Link> </p>
          </div>
        </div>
    )
}

export default LoginPage;
