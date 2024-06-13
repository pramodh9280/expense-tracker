import { Item } from '../types/Item';

export const items: Item[] = [
    {
        date: new Date(2022, 2, 5),
        category: 'food', 
        title: 'McDonalds', 
        value: 32.12
    },   
    {
        date: new Date(2022, 3, 14),
        category: 'food', 
        title: 'Burger King', 
        value: 38
    },
    {
        date: new Date(2022, 2, 16),
        category: 'rent', 
        title: 'Rent', 
        value: 2300
    },
    {
        date: new Date(2022, 2, 15),
        category: 'salary', 
        title: 'Salary', 
        value: 32.12
    }
];