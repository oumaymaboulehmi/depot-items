export interface User {
    _id?: string;               
    name: string;               
    email: string;            
    passwordHash: string;       
    address: Address;        
    phone: string;             
    createdAt?: string;         
  }
  
  export interface Address {
    street: string;           
    city: string;              
    state: string;            
    zip: string;               
  }
  