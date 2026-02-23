import type { Categorie } from "./categorie";

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Categorie["name"];
};

export const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        description: "High-performance laptop for professionals",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        description: "Latest model smartphone with advanced camera",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 199.99,
        description: "Wireless headphones with noise cancellation",
        category: "Electronics"
    },
    {
        id: 4,
        name: "T-Shirt",
        price: 29.99,
        description: "Comfortable cotton t-shirt",
        category: "Clothing"
    },
    {
        id: 5,
        name: "Jeans",
        price: 79.99,
        description: "Classic blue jeans",
        category: "Clothing"
    }
];
