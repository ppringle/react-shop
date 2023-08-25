export interface IProductReview {
    comment: string;
    reviewer: string;
}

export interface IProductData {
    id: number;
    name: string;
    description: string;
    price: number;
    reviews: IProductReview[];
}

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getProductById = async (id: number): Promise<IProductData | null> => {
    await wait(1000);
    const foundProducts = products.filter(product => product.id === id);
    return foundProducts?.length > 0 ? foundProducts[0] : null;
}

export const products: IProductData[] = [
    {
        id: 1,
        name: "React Router",
        description: "A collection of navigational components that compose your app declaratively",
        price: 8,
        reviews: [
            {
                comment: "Excellent! This does everything I want",
                reviewer: "Billy"
            },
            {
                comment: "The best router I've ever worked with",
                reviewer: "Sally"
            }
        ]
    },
    {
        id: 2,
        name: "React Redux",
        description: "A library that helps manage state across your application",
        price: 12,
        reviews: [
            {
                comment: "I've found this really useful in a large app I'm working on",
                reviewer: "Billy"
            },
            {
                comment: "A bit confusing at first but simple when you get used to it",
                reviewer: "Sally"
            }
        ]
    },
    {
        id: 3,
        name: "React Apollo",
        description: "A library that helps you interact with a GraphQL backend",
        price: 12,
        reviews: [
            {
                comment: "I'll never work with a REST API again !",
                reviewer: "Billy"
            },
            {
                comment: "It makes working with GraphQL backends a breeze",
                reviewer: "Sally"
            }
        ]
    }
];