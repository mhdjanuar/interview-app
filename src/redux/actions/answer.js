import axios from 'axios'
const url = 'https://heroku-api-v1.herokuapp.com'

export const sendAnswer = (value) =>({
    type: 'SEND_ANSWER',
    payload: axios({
        method: "POST",
        url: `${url}/answer`,
        data:{
            question_id: value.question_id,
            user_id: value.user_id,
            answer: value.answer
        }
    })
})

export const sendSelect = (value) => ({
    type: 'SEND_ANSWER',
    payload: axios({
        method: "POST",
        url: `${url}/answer`,
        data:{
            question_id: value.question_id,
            user_id: value.user_id,
            answer: value.answer
        }
    })
})