import React,{useState} from 'react';
import {TextField,Button} from '@material-ui/core';
//import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Login} from '../../mernmodules/Login';
//iport { convertLegacyProps } from '../../../node_modules/antd/lib/button/button';

function LoginPage(props) {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const onSubmits = async (e)=>{
        e.preventDefault();
        const variables = {
            username:username,
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
        <div>
            <TextField
            onChange={e=>setUserName(e.target.value)}
            value={username}
            label= "username"
            placeholder = "enter username"
            />
             <TextField
            onChange={e=>setPassword(e.target.value)}
            value={password}
            label= "password"
            placeholder = "enter password"
            />
            <Button disabled={!username || !password} color="secondary" variant="outlined" onClick={onSubmits}>LOGIN !</Button>
        </div>
    )
}

export default LoginPage;
