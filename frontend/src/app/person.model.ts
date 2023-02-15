export interface Person {
    users: User[]
  }
  
  export interface User {
    _id: string
    name: string
    age: string
    gender: string
    mobileNumber: string
    __v: number
  }
  