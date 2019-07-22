import axios from 'axios'

const url = 'https://heroku-api-v1.herokuapp.com';

export const register = (data,nav) => {
    const {username,email,password} = data
    return {
        type:"REGISTER",
        payload:axios.post(`${url}/users`,{
            username,
            email,
            password
        }).then((res)=>{
            nav.navigate('Home')
        })
        .catch((err)=>{
            alert('Maaf gagal masuk')
        })
    }
}

