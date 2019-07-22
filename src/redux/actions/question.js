import axios from 'axios'

const url = 'https://heroku-api-v1.herokuapp.com'

export const getQuestion = () => ({
    type: "GET_DATA",
    payload: axios({
      method: 'GET',
      url: `${url}/question`
    })
  }) 