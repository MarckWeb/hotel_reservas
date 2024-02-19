
export interface Userlogin {
   user: string
   token: string
}

export interface User {
   createdAt: string
   name: string
   password: string
   photo: string
   updatedAt: string
   username: string
   _id: string
}

export interface UserStatus {
   data: Userlogin | User
}