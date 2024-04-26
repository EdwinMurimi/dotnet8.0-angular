export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    createdAt: string;
    imageUrl: string;
    factorial: number;
}

export interface CreateItemDto {
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    imageUrl: string;
}