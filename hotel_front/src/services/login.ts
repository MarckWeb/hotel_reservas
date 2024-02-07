import axios from "axios";
import { LoginValues } from "../types/formValues";
import { FormValues } from "../types/formValues";
const baseUrl = 'http://localhost:3000/auth/'


const loginUser = async (credentials: LoginValues) => {
   const response = await axios.post(`${baseUrl}login`, credentials)
   return response.data
}

const registerUser = async (objectUser: FormValues) => {
   const response = await axios.post(`${baseUrl}register`, objectUser)
   return response.data
}

export default {
   loginUser,
   registerUser
}