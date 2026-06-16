import { Product } from "../models/ProductModel";
import { products } from "../data/ProductData";

let nextId = 1;

//Crear Producto
export const createProduct = ( 
    name: string, 
    price: number, 
    stock: number
): Product => {
    const product: Product = {
        id: nextId,
        name,
        price,
        stock
    };

    products.push(product);
    nextId++;

    return product
};
 //Mostar el Producto 
export const getProduct = (): Product[] => {
    return products;
};

//Buscar Producto por ID
export const getProductById = (id: number): Product | undefined => {
    return products.find(products => products.id === id);
};