

export interface ProductData {
    id: string;
    name: string;
    quantity: number;
    price: number;
    discount: number;
    finalPrice: number;
    description: string;
    images: string[];
    category: string;
    rating: number;
    brand: string;
    published: boolean;
    date: Date;
}

export const jsonToProductData = (json: any): ProductData => {
    const { images, id, name, quantity, price, discount, finalPrice, description, category, rating, brand,
        published, date }: ProductData = json;
    return { images, id, name, quantity, price, discount, finalPrice, description, category, rating, brand, published, date };


}
