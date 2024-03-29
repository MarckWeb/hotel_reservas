import axios, { AxiosResponse } from "axios";
import { LoginValues } from "../types/formValues";
import { FormValues } from "../types/formValues";
import { User } from "../types/loginUser";

const baseUrl = 'http://localhost:3000/'

const getUserId = async (id: string): Promise<User> => {
   try {
      const response: AxiosResponse<User> = await axios.get(`${baseUrl}users/${id}`);
      return response.data;
   } catch (error) {
      console.error(`Error al obtener el usuario con ID ${id}:`, error);
      throw error;
   }
}


const loginUser = async (credentials: LoginValues): Promise<any> => {
   try {
      const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/login`, credentials)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

const registerUser = async (objectUser: FormValues): Promise<User> => {
   const response: AxiosResponse<User> = await axios.post(`${baseUrl}auth/register`, objectUser)
   return response.data
}

const updateUser = async (id: string, objectUser: FormData): Promise<any> => {
   console.log('enviando por axios a la db');
   console.log(id);
   console.log(objectUser);

   try {
      const response: AxiosResponse<User> = await axios.put(`${baseUrl}users/${id}`, objectUser);
      return response.data;
   } catch (error) {
      throw new Error(`Error al actualizar usuario: ${error}`);
   }
};

const loginService = {
   loginUser,
   registerUser,
   getUserId,
   updateUser
}

export default loginService