import { User } from './user';

export interface Session {
    id: number;
    user: User;
}