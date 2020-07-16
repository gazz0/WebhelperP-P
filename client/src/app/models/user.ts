import { Item } from './item';
import { Music } from './music';
import { Session } from './session';
import { Rating } from './rating';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    items: Item[];
    musics: Music[];
    sessions: Session[];
    ratings: Rating[];
    last_login: Date;
    is_admin: boolean;
}