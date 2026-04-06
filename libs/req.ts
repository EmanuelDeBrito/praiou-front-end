import axios from "axios"

export const req = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: ''
})