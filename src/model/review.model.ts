import { Item } from "./item.model";
import { User } from "./user.model";

export interface Review {
    _id?: string;          
    itemId: Item;      
    userId: User;         
    rating: number;        
    comment: string;       
    createdAt?: string; 
  }
  