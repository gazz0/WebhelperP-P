import { User } from './user';

export interface Item {
    id: number;
    user: User;
    name: string;
    image: string;
    object_type: string;
    rating: number;
    description: string;
    
}