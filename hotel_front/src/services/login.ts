import axios from "axios";
const baseUrl = 'http://localhost:3000/auth/'
export interface CredentialsUser {
   username: string;
   password: string;
}

const loginUser = async (credentials: CredentialsUser) => {
   const response = await axios.post(`${baseUrl}login`, credentials)
   return response.data
}

const registerUser = async (objectUser: CredentialsUser) => {
   const response = await axios.post(`${baseUrl}register`, objectUser)
   return response.data
}

export default {
   loginUser,
   registerUser
}