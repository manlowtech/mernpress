import React,{useState} from 'react';
import {TextField,Button} from '@material-ui/core';
//import axios from 'axios';
import styles from './login.module.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
//import {Login} from '../../mernmodules/Login';
import { useDispatch,useSelector} from 'react-redux';
import {login} from '../backend/redux/actions/loginAction';
//iport { convertLegacyProps } from '../../../node_modules/antd/lib/button/button';

function LoginPage(props) {
    const dispatch =  useDispatch();
     const history = useHistory();
    const loggingIn = useSelector(state=>state.loggingIn)
    const loggedIn = useSelector(state=>state.loggedIn)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSubmits =  (e)=>{
        e.preventDefault();
       
        dispatch(login(email,password));
       
    
    }
    return (
       
        <div className={styles.loginContainer}>
         { loggingIn ? alert("LOGGING IN NOW") : " "}
         { loggedIn ? history.push('/admin/5') : " "}
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
