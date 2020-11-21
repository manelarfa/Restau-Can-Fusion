import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    featured: boolean;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}