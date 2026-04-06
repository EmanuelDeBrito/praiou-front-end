import axios from "axios"
import { baseUrl } from '../constants/config'

export const req = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: baseUrl
})