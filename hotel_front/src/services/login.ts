import axios, { AxiosResponse } from "axios";
import { LoginValues } from "../types/formValues";
import { FormValues } from "../types/formValues";
import { User } from "../types/loginUser";

const URL_USER: string = import.meta.env.VITE_URL_BASE;

const getUserId = async (id: string): Promise<User> => {
   try {
      const response: AxiosResponse<User> = await axios.get(`${URL_USER}users/${id}`);
      return response.data;
   } catch (error) {
      console.error(`Error al obtener el usuario con ID ${id}:`, error);
      throw error;
   }
}


const loginUser = async (credentials: LoginValues): Promise<any> => {
   try {
      const response: AxiosResponse<User> = await axios.post(`${URL_USER}auth/login`, credentials)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

const registerUser = async (objectUser: FormValues): Promise<any> => {
   const response: AxiosResponse<User> = await axios.post(`${URL_USER}auth/register`, objectUser)
   return response.data
}

const updateUser = async (id: string, objectUser: FormData): Promise<any> => {

   try {
      const response: AxiosResponse<User> = await axios.put(`${URL_USER}users/${id}`, objectUser);
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