import axios from 'axios'

const url = 'https://heroku-api-v1.herokuapp.com';

export const register = (data) => {
    const {username,email,password} = data
    return {
        type:"REGISTER",
        // payload:axios.post(`${url}/users`,{
        //     username,
        //     email,
        //     password
        // }).then((res)=>{
        //     nav.navigate('Home')
        //     res
        // })
        // .catch((err)=>{
        //     alert('Maaf gagal masuk')
        // })
        payload: axios({
            method : 'POST',
            url : `${url}/users`,
            data : {
                username,
                email,
                password
            }
        })
    }
}

