import axios from 'axios';
export const Login = async(obj)=>{
    const vars = {
        username: obj.username,
        password:obj.password,
    }
    const logdata = await axios.post('/users/login',vars);
    return logdata.data;
}
export const Register = async(obj)=>{
    const variables = {
        name : obj.name,
        username : obj.username,
        password : obj.password,
        email : obj.email,
    }
    const register = await axios.post('/users/register',variables);
    return register.data;
}