import axios, { AxiosResponse } from "axios";
import { LoginValues } from "../types/formValues";
import { FormValues } from "../types/formValues";
import { User } from "../types/loginUser";
const baseUrl = 'http://localhost:3000/'

const getUserAutenticated = async (id: string): Promise<User> => {
   console.log(id)
   const response: AxiosResponse<any> = await axios.get(`${baseUrl}users/${id}`)
   return response.data
}


const loginUser = async (credentials: LoginValues): Promise<any> => {
   const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/login`, credentials)
   return response.data
}

const registerUser = async (objectUser: FormValues): Promise<any> => {
   const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/register`, objectUser)
   return response.data
}

const loginService = {
   loginUser,
   registerUser,
   getUserAutenticated
}

export default loginService